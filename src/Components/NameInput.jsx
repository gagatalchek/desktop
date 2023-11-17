import { useId } from "react";

const NameInput = () => {
  const id = useId();

  return (
    <div className="h-[73px] w-[522px] ">
      <label
        htmlFor={id}
        className="text-[#8B949E] text-[14px] font-normal leading-[150%] mb-[8px] "
      >
        Full name
      </label>
      <div className=" px-[10] rounded-[6px] border-[1px] border-solid border-[#484F58] bg-[#21262D]">
        <input
          id={id}
          placeholder="Name Surname"
          className=" px-[10px] h-[44px] w-[522px] bg-[transparent] text-white outline-none	"
        />
      </div>
    </div>
  );
};

export default NameInput;
