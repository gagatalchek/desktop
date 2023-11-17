const SignupPaper = ({ children }) => {
  return (
    <div className="block">
      <div className=" absolute top-[-64px] h-[16px]  flex justify-center items-center m-auto mb-[64px] translate-x-[-50%] left-1/2">
        <h2 className="flex items-center justify-center h-[16px] text-[white]">
          TRADE INVEST Backoffice
        </h2>
      </div>
      <div className="w-full">
        <div className="p-[36px] flex w-[594px] flex-col justify-center items-center rounded-[24px] border-solid border-[1px] border-[#30363D] bg-[#161B22] ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SignupPaper;
