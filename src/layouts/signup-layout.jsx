const SigupLayout = ({ children }) => {
  return (
    <div className="bg-[#0E0F12] h-screen w-full relative flex items-center justify-center px-[12px] ">
      <div className="absolute z-[1] top-0 left-0 right-0 bottom-0 bg-signup-background blur-[12px] w-full"></div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default SigupLayout;
