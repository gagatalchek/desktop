import { Link } from "react-router-dom";
import { useState } from "react";
import FrameAndTradeInvest from "../../components/sign-up-paper";
import NameInput from "../../components/inputs/input-name";
import InputEmail from "../../components/inputs/input-email";
import PhoneInput from "../../components/inputs/input-phone";
import CountryInput from "../../components/inputs/input-country";
import InputPassword from "../../components/inputs/input-password";
import Button from "../../components/buttons/Button";

const Create_account = () => {
  const [password, setPassword] = useState(true);

  const handleSwitch = () => {
    setPassword((prev) => {
      return !prev;
    });
  };

  return (
    <FrameAndTradeInvest>
      <div className=" m-auto tablet:w-[387px] h-[74px] mb-[24px] tablet:mb-[32px] ">
        <p className=" flex justify-center items-center text-[20px] tablet:text-[32px] font-700 leading-[150%] tablet:leading-[120%] text-white mb-[12px] h-[38px] w-full tablet:w-[387px]">
          Create your account!
        </p>
        <div className=" flex justify-center align-middle text-[12px] tablet:text-[16px] font-medium leading-[133%] tablet:leading-[150%] text-[#8B949E] ">
          Already heaven account?
          <Link
            to={`/`}
            className="text-[#1F6FEB] ml-[4px] text-[12px] tablet:text-[16px] font-medium leading-[133%] tablet:leading-[150%]"
          >
            Log in
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] tablet:gap-[24px]">
        <NameInput />

        <InputEmail />

        <PhoneInput />

        <CountryInput />

        <InputPassword />

        <Button>Create account</Button>

        <div className=" text-center max-w-[256px] tablet:max-w-none	tablet:text-start">
          <span className="text-[12px] font-[500px] leading-[133%] text-[#8B949E] mr-[4px]">
            By creating an account, you agree to the
          </span>
          <Link
            to={"#"}
            className="  text-[12px] font-[500] leading-[133%] text-[#1F6FEB] mr-[4px]"
          >
            Terms of Service
          </Link>
          <span className=" text-[12px] font-[500px] leading-[133%] text-[#8B949E] mr-[4px]">
            and
          </span>
          <Link
            to={"#"}
            className="  text-[12px]  font-[500] leading-[133%] text-[#1F6FEB]"
          >
            Privacy Policy
          </Link>
          <span className=" text-[12px] font-[500px] leading-[133%] text-[#8B949E]">
            .
          </span>
        </div>
      </div>
    </FrameAndTradeInvest>
  );
};

export default Create_account;
