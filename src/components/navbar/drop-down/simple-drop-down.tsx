import { FC } from 'react';
import { INavbarSideConfig } from '../types';
import styles from './simple-drop-down.module.css';
import { Link } from 'react-router-dom';

const SimpleDropDown: FC<{ menu: INavbarSideConfig['subMenu']; className?: string }> = ({ menu, className }) => {
  return (
    <div className={`${styles.drop_down_container} ${className ? className : ''}`}>
      {menu?.map((item, index) => (
        <Link key={`drop_${item.title}_${index}`} id={item.id} className={`${styles.drop_down_item}`} to={'/'}>
          <div className={styles.icon_container}>{item.icon}</div>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.description}>{item.description}</div>
        </Link>
      ))}
    </div>
  );
};

export default SimpleDropDown;
