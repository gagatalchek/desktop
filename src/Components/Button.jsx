const Button = ({ children }) => {
  return (
    <button className=" w-[522px] h-[44px] px-[24px] py-[12px] text-white rounded-[6px] bg-[#1F6FEB]">
      {children}
    </button>
  );
};

export default Button;
