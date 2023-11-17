const FrameAndTradeInvest = ({ children }) => {
  return (
    <div className=" flex  flex-col m-auto">
      <div className=" absolute top-[-64px] h-[16px] w-[594px] flex justify-center items-center m-auto mb-[64px]">
        <h2 className="flex items-center justify-center w-[594px] h-[16px] text-[white]">
          TRADE INVEST Backoffice
        </h2>
      </div>
      <div>
        <div className="p-[36px] flex w-[594px] flex-col justify-center items-center rounded-[24px] border-solid border-[1px] border-[#30363D] bg-[#161B22] ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FrameAndTradeInvest;
