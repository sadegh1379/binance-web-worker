import {
  BotOutline,
  Candle,
  CardOutline,
  ContractOutline,
  GameOutline,
  NoteTwoOutline,
  ProfileAddOutline,
  RankingOutline,
  SettingOutline,
  SpotOutline,
  WebTerminalOutline,
} from '../../assets/icons';
import { INavbarSideConfig } from './types';

const NavbarConfig = () => {
  const Config: INavbarSideConfig[] = [
    {
      title: 'By Crypto',
      id: 'By Crypto',
      link: '/',
    },
    {
      title: 'Markets',
      id: 'Markets',
      link: '/',
    },
    {
      title: 'Trade',
      id: 'Trade',
      link: '/',
      subMenu: [
        {
          title: 'Usdsm Futures',
          description: 'Futures Description',
          a: '#',
          icon: <ContractOutline />,
          id: 'navbar futures',
        },
        {
          title: 'Top Trader',
          description: 'Top Trader Description',
          link: '/leaderboard',
          icon: <RankingOutline />,
          id: 'navbar top trader',
        },
        {
          title: 'Trading Bot',
          description: 'Trading Bot Description',
          a: '#',
          icon: <BotOutline />,
          id: 'navbar trading bot',
        },
        {
          title: 'Demo Trading',
          description: 'Demo Trading Description',
          a: '#',
          icon: <GameOutline />,
          target: '_blank',
          id: 'navbar demo',
        },
      ],
    },

    {
      title: 'Futures',
      id: 'Futures',
      subMenu: [
        {
          title: 'Usdsm Futures',
          description: 'Futures Description',
          a: '#',
          icon: <ContractOutline />,
          id: 'navbar futures',
        },
        {
          title: 'Top Trader',
          description: 'Top Trader Description',
          link: '/leaderboard',
          icon: <RankingOutline />,
          id: 'navbar top trader',
        },
        {
          title: 'Trading Bot',
          description: 'Trading Bot Description',
          a: '#',
          icon: <BotOutline />,
          id: 'navbar trading bot',
        },
        {
          title: 'Demo Trading',
          description: 'Demo Trading Description',
          a: '#',
          icon: <GameOutline />,
          target: '_blank',
          id: 'navbar demo',
        },
      ],
    },
    {
      title: 'Earn',
      link: '/',
      id: 'Earn',
    },

    {
      title: 'Square',
      id: 'Square',
      subMenu: [
        {
          id: 'navbar forex web terminal',
          title: 'Web Terminal',
          description: 'Web Terminal Description',
          link: '/',
          icon: <WebTerminalOutline />,
        },
        {
          id: 'navbar forex intro',
          title: 'Forex Intro',
          description: 'Forex Intro Description',
          a: '#',
          target: '_blank',
          icon: <NoteTwoOutline />,
        },
        {
          id: 'navbar forex dashboard',
          title: 'Open Account',
          description: 'Forex Dashboard Description',
          link: '/',
          icon: <ProfileAddOutline />,
        },
        {
          id: 'navbar forex dashboard IB',
          title: 'Ib Dashboard',
          description: 'Ib Dashboard Description',
          link: '/',
          icon: <SettingOutline />,
        },
      ],
    },
    {
      title: 'More',
      id: 'More',
      subMenu: [
        {
          id: 'navbar forex web terminal',
          title: 'Web Terminal',
          description: 'Web Terminal Description',
          link: '/',
          icon: <WebTerminalOutline />,
        },
        {
          id: 'navbar forex intro',
          title: 'Forex Intro',
          description: 'Forex Intro Description',
          a: '#',
          target: '_blank',
          icon: <NoteTwoOutline />,
        },
        {
          id: 'navbar forex dashboard',
          title: 'Open Account',
          description: 'Forex Dashboard Description',
          link: '/',
          icon: <ProfileAddOutline />,
        },
        {
          id: 'navbar forex dashboard IB',
          title: 'Ib Dashboard',
          description: 'Ib Dashboard Description',
          link: '/',
          icon: <SettingOutline />,
        },
      ],
    },
  ];

  return Config;
};

const MobileNavbar = () => {
  const config: INavbarSideConfig[] = [
    {
      title: 'Buy Crypto',
      icon: <CardOutline />,
      link: '/',
      id: 'mobile navbar buy crypto',
    },
    {
      title: 'Market',
      icon: <Candle />,
      link: '/',
      id: 'mobile navbar market',
    },
    {
      title: 'Trade',
      icon: <SpotOutline />,
      id: 'mobile navbar trade',
      subMenu: [
        {
          title: 'Spot',
          description: 'Spot Description',
          a: '#',
          id: 'mobile navbar spot',
        },
      ],
    },
    {
      title: 'Derivatives',
      icon: <ContractOutline />,
      id: 'mobile navbar derivatives',
      subMenu: [
        {
          title: 'Usdsm Futures',
          description: 'Futures Description',
          a: '#',
          id: 'mobile navbar futures',
        },
        {
          title: 'Top Trader',
          description: 'Top Trader Description',
          link: '/leaderboard',
          id: 'mobile navbar top trader',
        },
      ],
    },
  ];

  return config;
};

export { MobileNavbar, NavbarConfig };
