import logoImg from "../../../assets/img/circle-logo.png";
export const Loading = ({ isLayoutApplied }) => {
  return (
    <div className={`flex justify-center items-center w-full ${!isLayoutApplied ? "h-screen" : ""}`}>
      <img alt="Fresh 2 You" src={logoImg} className="animate-bounce w-1/3 max-w-36" />
    </div>
  );
};
