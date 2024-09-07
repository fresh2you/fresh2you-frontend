import { Outlet } from 'react-router-dom';
import Header from './Header';
import FooterNavBar from './FooterNavBar';

const RootLayout = () => {
  return (
    <div className="w-full h-full flex flex-col justify-betwee">
      <Header />
      <main className="w-full h-full overflow-hidden overflow-y-scroll scrollbar-hide">
        <Outlet />
      </main>

      <FooterNavBar />
    </div>
  );
};

export default RootLayout;
