import logoImg from "../../../assets/img/circle-logo.png";

const Loading = () => {
  return (
    <div className={`flex justify-center items-center w-full absolute top-1/2 -translate-y-1/2`}>
      <img alt="Fresh 2 You" src={logoImg} className="w-1/3 animate-bounce max-w-36" />
    </div>
  );
};

export default Loading;
