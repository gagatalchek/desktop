import { useId } from "react";
import svgMaker from "../../svg-maker";

const PhoneInput = () => {
  const id = useId();

  return (
    <div className="h-[73px] w-full tablet:w-[522px]">
      <label
        htmlFor={id}
        className="text-[#8B949E] text-[12px] tablet:text-[14px] font-normal leading-[150%] mb-[8px] block"
      >
        Phone number
      </label>
      <div className=" pl-[10px] flex items-center rounded-[6px] border-[1px] border-solid border-[#484F58] bg-[#21262D]">
        {svgMaker("icon-flag", "mr-[4px] h-[20px] w-[20px]")}
        <input
          type="tel"
          inputMode="tel"
          id={id}
          placeholder="+1"
          className="px-[10px] h-[44px]  w-full tablet:w-[522px] bg-[transparent] text-white outline-none	placeholder:text-[#F0F6FC]"
        />
      </div>
    </div>
  );
};

export default PhoneInput;
