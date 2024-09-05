import { useLocation, useParams } from 'react-router-dom';

const FooterNavBar = () => {
  const param = useParams();
  const location = useLocation();

  console.log(param, location);

  return <footer className="w-full h-[72px] bg-orange-500">FooterNavBar</footer>;
};

export default FooterNavBar;
