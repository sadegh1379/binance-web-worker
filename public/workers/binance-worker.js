let intervalId;

onmessage = (e) => {
  const data = e.data;

  if (data.type === 'init') {
    startUpdating(data.symbol, data.interval, data.refetchInterval);
  }
};

const Timeout = (time) => {
  let controller = new AbortController();
  setTimeout(() => controller.abort(), time * 1000);
  return controller;
};

const startUpdating = (symbol, interval, refetchInterval = 3000) => {
  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    fetchData(symbol, interval);
  }, refetchInterval);
};

const fetchData = (symbol, interval) => {
  const endTime = Date.now();
  const startTime = endTime - 72 * 60 * 60 * 1000;

  fetch(
    `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&startTime=${startTime}&endTime=${endTime}`,
    {
      signal: Timeout(2.5).signal,
    },
  )
    .then((response) => response.json())
    .then((data) => {
      const formattedData = data.map((candle) => ({
        time: candle[0] / 1000,
        open: parseFloat(candle[1]),
        high: parseFloat(candle[2]),
        low: parseFloat(candle[3]),
        close: parseFloat(candle[4]),
      }));

      postMessage({
        type: 'ticker-update',
        body: formattedData,
      });
    })
    .catch((error) => {
      postMessage({ error: 'Failed to fetch data' });
    });
};
