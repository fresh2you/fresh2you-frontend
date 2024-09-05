import React from 'react';
import FooterNavBar from './FooterNavBar';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const RootLayout = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <Header />
      <Outlet />
      <FooterNavBar />
    </div>
  );
};

export default RootLayout;
