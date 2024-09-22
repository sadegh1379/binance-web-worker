import { ReactNode } from 'react';

interface NavbarPropTypes {}

interface MobileSidebarTypes {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface INavbarSideConfig {
  title: string;
  link?: string;
  a?: string;
  target?: string;
  icon?: ReactNode;
  id: string;
  badge?: {
    preIcon?: ReactNode;
    afterIcon?: ReactNode;
  };
  subMenu?: {
    id: string;
    title: string;
    description?: string;
    link?: string;
    a?: string;
    target?: string;
    icon?: ReactNode;
  }[];
}

export type { INavbarSideConfig, MobileSidebarTypes, NavbarPropTypes };
