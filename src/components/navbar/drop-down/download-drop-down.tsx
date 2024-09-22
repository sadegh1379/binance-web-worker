import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './download-drop-down.module.css';
import { ArrowRightOutline, QrCodeDownload } from '../../../assets/icons';

export const DownloadDropDown: FC<{
  className: string;
}> = ({ className }) => {
  return (
    <div className={`${className ?? ''} ${styles.download_dropDown_container}`}>
      <p className={styles.scan_txt}>Scan to Download App iOS & Android</p>
      <QrCodeDownload className={styles.qr_code} />
      <Link to={`#`} className={styles.view_more}>
        More Download Options <ArrowRightOutline />
      </Link>
    </div>
  );
};
