import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { BinanceLogo } from '../../assets/images';
import { Button } from '../button';
import { DownloadDropDown } from './drop-down/download-drop-down';
import SimpleDropDown from './drop-down/simple-drop-down';
import { NavbarConfig } from './navbar.config';
import styles from './navbar.module.css';
import MobileSideBar from './sidebar/mobile';
import { NavbarPropTypes } from './types';
import {
  ArrowDownBold,
  CategoryOutline,
  DownloadOutline,
  GlobalOutline,
  MenuOutline,
  MoonOutline,
  SearchOutline,
} from '../../assets/icons';

const Navbar: FC<NavbarPropTypes> = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const config = NavbarConfig();

  return (
    <nav className={`${styles.navbar} core_navbar`}>
      <div className={styles.navbar_left}>
        <Link to={`/`} id="navbar_logo">
          <img src={BinanceLogo} className={styles.binance} alt="" />
        </Link>
        {config.map((item, index) =>
          item.title === 'grid' ? (
            <div key={'nav_left_' + index} className={styles.grid_item} id={item.id}>
              <CategoryOutline className={styles.grid_icon} />
              {item.subMenu && (
                <>
                  <ArrowDownBold className={styles.arrow_down} />
                  <SimpleDropDown
                    menu={item.subMenu}
                    key={'drop_down_' + index}
                    className={styles.drop_down_container}
                  />
                </>
              )}
            </div>
          ) : item.subMenu ? (
            <div key={'nav_left_' + index} className={styles.nav_left_item} id={item.id}>
              <span>{item.title}</span>
              {item.subMenu && (
                <>
                  <ArrowDownBold className={styles.arrow_down} />
                  <SimpleDropDown
                    menu={item.subMenu}
                    key={'drop_down_' + index}
                    className={styles.drop_down_container}
                  />
                </>
              )}
            </div>
          ) : (
            <Link key={'nav_left_' + index} className={`${styles.nav_left_item} `} id={item.id} to={'/'}>
              <span>{item.title}</span>
            </Link>
          ),
        )}
      </div>

      <div className={styles.navbar_right}>
        <div className={styles.login_container}>
          <SearchOutline className={styles.search_icon} />
          <Button variant="outline" size="small" id="navbar_login">
            LoginIn
          </Button>
          <Button variant="primary" size="small" id="navbar_register">
            SignUp
          </Button>
        </div>

        <div className={`${styles.right_icons_container}`}>
          <MoonOutline className={styles.right_icons} id="navbar_theme" />

          <div className={styles.nav_right_item} style={{ cursor: 'inherit' }}>
            <DownloadOutline className={`${styles.right_icons}`} id="navbar_download" />
            <DownloadDropDown className={styles.drop_down_container} />
          </div>

          <div className={styles.nav_right_item} style={{ cursor: 'inherit' }} id="navbar_language" onClick={() => {}}>
            <GlobalOutline className={`${styles.right_icons}`} />
          </div>
        </div>
        <div className={styles.mobile_container}>
          <MenuOutline
            className={styles.nav_profile_icon}
            onClick={() => setOpenMenu((prev) => !prev)}
            id="navbar_mobile_menu"
          />
        </div>
      </div>
      <MobileSideBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </nav>
  );
};

export default Navbar;
