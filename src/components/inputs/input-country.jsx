import { useId } from "react";
import svgMaker from "../../svg-maker";

const CountryInput = () => {
  const id = useId();

  return (
    <div className="h-[73px] w-full tablet:w-[522px] ">
      <label
        htmlFor={id}
        className="text-[#8B949E] text-[12px] tablet:text-[14px] font-normal leading-[150%] mb-[8px] block"
      >
        Country
      </label>
      <div className=" pl-[10px] flex items-center rounded-[6px] border-[1px] border-solid border-[#484F58] bg-[#21262D]">
        {svgMaker("icon-flag", "mr-[8px] w-[20px] h-[20px]")}
        <input
          type="text"
          id={id}
          placeholder="USA"
          className="px-[10px] h-[44px] w-full tablet:w-[522px] bg-[transparent] text-white outline-none	placeholder:text-[#F0F6FC]"
        />
        {svgMaker("icon-dropdown", "mr-[10px] w-[20px] h-[20px]")}
      </div>
    </div>
  );
};

export default CountryInput;
