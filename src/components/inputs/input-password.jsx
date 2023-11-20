import { useState } from "react";
import { useId } from "react";
import svgMaker from "../../svg-maker";

const InputPassword = () => {
  const id = useId();

  const [password, setPassword] = useState(false);

  const handleSwitch = () => {
    setPassword((prev) => {
      return !prev;
    });
  };

  return (
    <div className="">
      <label
        htmlFor={id}
        className="text-[#8B949E] text-[12px] tablet:text-[14px] font-normal leading-[150%] mb-[8px] block"
      >
        Password
      </label>
      <div className=" pl-[10px] flex items-center rounded-[6px] border-[1px] border-solid border-[#484F58] bg-[#21262D] justify-between">
        <input
          id={id}
          type={password ? "text" : "password"}
          placeholder="Password"
          className="px-[10px] h-[44px] bg-[transparent] text-white outline-none w-full	"
        />
        <button onClick={handleSwitch}>
          {svgMaker(
            "icon-eye",
            "mr-[10px] hover:stroke-[white] cursor-pointer h-[20px] w-[20px]"
          )}
        </button>
      </div>
    </div>
  );
};

export default InputPassword;
