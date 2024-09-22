import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Close, DownloadOutline, MoonOutline, NotificationOutline, ThemeBold } from '../../../assets/icons';
import { MobileDropDown } from '../drop-down/mobile-drop-down';
import { MobileNavbar } from '../navbar.config';
import styles from '../navbar.module.css';
import { MobileSidebarTypes } from '../types';

const MobileSideBar: FC<MobileSidebarTypes> = ({ openMenu, setOpenMenu }) => {
  const config = MobileNavbar();

  return (
    <>
      <div
        className={`${styles.sidebar_layout} ${openMenu ? styles.sidebar_active_layout : ''}`}
        onClick={() => setOpenMenu((prev: boolean) => !prev)}
      ></div>
      <div className={`${styles.sidebar} ${openMenu ? styles.sidebar_open : ''}`}>
        <div className={`${styles.sidebar_container} ${styles.container_open}`}>
          <Close
            className={styles.sidebar_close}
            onClick={() => setOpenMenu((prev: boolean) => !prev)}
            id="mobile_navbar_close"
          />
          <ul>
            {config.map((item, index) =>
              item.subMenu ? (
                <MobileDropDown
                  key={`MobileDropDown_${index}`}
                  index={index}
                  item={item}
                  setOpenMenu={setOpenMenu}
                  className={styles.slider_drop_down_container}
                />
              ) : (
                <Link key={'side_top_' + index} className={styles.sidebar_item} to={'/'} id={item.id}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              ),
            )}
            <>
              <Link to={`/`} className={`${styles.sidebar_item}`} id="mobile_navbar_notification">
                <NotificationOutline />
                <span>notification</span>
              </Link>
              <Link to={`/`} className={styles.sidebar_item} id="mobile_navbar_app">
                <DownloadOutline />
                <span>App</span>
              </Link>
            </>

            <div className={styles.darkMode_container}>
              <div className={styles.left_container}>
                <ThemeBold className={styles.darkmode_icon} />
                <span>Theme</span>
              </div>
              <MoonOutline className={styles.right_icons} id="mobile_navbar_theme" />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileSideBar;
