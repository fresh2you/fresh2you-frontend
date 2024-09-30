import logoImg from "../../../assets/img/circle-logo.png";
export const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <img alt="Fresh 2 You" src={logoImg} className="animate-bounce w-1/3 max-w-36" />
    </div>
  );
};
