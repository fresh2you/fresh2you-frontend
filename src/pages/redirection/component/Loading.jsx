import logoImg from "../../../assets/img/circle-logo.png";
export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img alt="Fresh 2 You" src={logoImg} className="animate-bounce mobile:w-1/3 mobile:max-w-36" />
    </div>
  );
};
