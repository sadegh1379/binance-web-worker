import React, { useEffect, useRef, useState } from 'react';
import { createChart, ISeriesApi } from 'lightweight-charts';
import styles from './trading-view-chart.module.css';
import { Button } from '../button';

const TIMEFRAMES = ['1m', '5m', '15m', '1h', '1d'];

const CandleChart: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const workerRef = useRef<Worker | null>(null);
  const [selectedInterval, setSelectedInterval] = useState<string>('1m');
  const [loading, setLoading] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: chartContainerRef.current.clientHeight,
      });

      const candleSeries: ISeriesApi<'Candlestick'> = chart.addCandlestickSeries();

      workerRef.current = new Worker(new URL('/workers/binance-worker.js', window.location.origin));

      workerRef.current.onmessage = (event: MessageEvent) => {
        const { type, body, error } = event.data;
        if (error) {
          console.error(error);
          setLoading(false);
        } else if (type === 'ticker-update') {
          candleSeries.setData(body);
          setLastUpdated(new Date().toLocaleTimeString());
          setLoading(false);
        }
      };

      workerRef.current.postMessage({
        type: 'init',
        symbol: 'BTCUSDT',
        interval: selectedInterval,
        refetchInterval: 500,
      });

      return () => {
        chart.remove();
        workerRef.current?.terminate();
      };
    }
  }, [selectedInterval]);

  const handleIntervalChange = (interval: string) => {
    setSelectedInterval(interval);
    setLoading(true);
    workerRef.current?.postMessage({
      type: 'init',
      symbol: 'BTCUSDT',
      interval,
    });
  };

  return (
    <div className={styles.app}>
      <div className={styles.button_group}>
        {TIMEFRAMES.map((interval) => (
          <Button variant="primary" size="small" key={interval} onClick={() => handleIntervalChange(interval)}>
            {interval}
          </Button>
        ))}
      </div>
      {loading && <div className={styles.loader}>Loading...</div>}
      <div className={styles.chart_container} ref={chartContainerRef} />
      <div className={styles.last_updated}>Last updated: {lastUpdated}</div>
    </div>
  );
};

export default CandleChart;
