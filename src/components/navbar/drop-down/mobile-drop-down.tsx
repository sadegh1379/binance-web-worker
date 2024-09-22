import { Dispatch, FC, SetStateAction, useState } from 'react';
import { INavbarSideConfig } from '../types';
import styles from './mobile-drop-down.module.css';
import { ArrowDownBold } from '../../../assets/icons';
import { Link } from 'react-router-dom';

export const MobileDropDown: FC<{
  item: INavbarSideConfig;
  className?: string;
  index: number;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}> = ({ className, index, item, setOpenMenu }) => {
  const [sidebarSubMenu, setSidebarSubMenu] = useState<string>('');

  const handleDD = (key: string) => {
    setSidebarSubMenu(sidebarSubMenu === key ? '' : key);
  };

  return (
    <ul
      key={'side_top_' + index}
      className={styles.dropdown_item}
      onClick={() => handleDD(`side_top${index}`)}
      id={item.id}
    >
      <li className={styles.dropdown_title}>
        <span className={styles.dropDown_icon}>{item.icon}</span>
        <span>{item.title}</span>

        <ArrowDownBold
          className={`${styles.side_arrow_down} ${sidebarSubMenu === `side_top${index}` ? styles.arrow_up : ''}`}
          onClick={() => setSidebarSubMenu('side_top_' + index)}
        />
      </li>

      <li
        className={`${styles.all_links} ${sidebarSubMenu === `side_top${index}` ? styles.show_links : ''} ${
          className ? className : ''
        }`}
      >
        {item.subMenu?.map((item, index) => (
          <Link
            key={`drop_${item.title}_${index}`}
            className={styles.links}
            to={'/'}
            onClick={() => {
              setOpenMenu(false);
            }}
            id={item.id}
          >
            <span>{item.title}</span>
          </Link>
        ))}
      </li>
    </ul>
  );
};
