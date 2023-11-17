const SigupLayout = ({ children }) => {
  return (
    <div className="bg-[#0E0F12] h-screen relative flex items-center justify-center">
      <div className="absolute z-[1] top-0 left-0 right-0 bottom-0 bg-signup-background blur-[12px]"></div>

      <div className="relative z-10 -translate-y-[76px]">{children}</div>
    </div>
  );
};

export default SigupLayout;
