import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
    {
        name: 'dashboard',
        imgUrl: dashboard,
        link: '/',
    },
    {
        name: 'campaign',
        imgUrl: createCampaign,
        link: '/create-campaign',
    },
    {
        name: 'payment',
        imgUrl: payment,
        link: '/',
        disabled: true,
    },
    {
        name: 'withdraw',
        imgUrl: withdraw,
        link: '/',
        disabled: true,
    },
    {
        name: 'profile',
        imgUrl: profile,
        link: '/profile',
    },
    {
        name: 'crypto-news',
        imgUrl: createCampaign,
        link: '/crypto-news',
    },
    {
        name: 'ethereum-price',
        imgUrl: profile,
        link: '/ethereum-price',
    },
    {
        name: 'logout',
        imgUrl: logout,
        link: '/',
        disabled: true,
    },

];
