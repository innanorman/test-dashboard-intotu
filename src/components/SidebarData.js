import React from 'react';
import * as Icon from "react-icons/ai";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: <Icon.AiOutlineAppstore/>,
    cName: 'nav-text'
  },
  {
    title: 'Pengiriman',
    path: '/admin/pengiriman',
    icon: <Icon.AiOutlineForm/>,
    cName: 'nav-text'
  },
  {
    title: 'Keluar',
    path: '/login',
    icon: <Icon.AiOutlineExport/>,
    cName: 'nav-text'
  },
]