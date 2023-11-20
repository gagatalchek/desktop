import { useState } from "react";
import { Link } from "react-router-dom";
import SigupLayout from "../../layouts/signup-layout";
import FrameAndTradeInvest from "../../components/sign-up-paper";
import InputEmail from "../../components/inputs/input-email";
import InputPassword from "../../components/inputs/input-password";
import Button from "../../components/buttons/Button";

const Login = () => {
  const [password, setPassword] = useState(true);

  const handleSwitch = () => {
    setPassword((prev) => {
      return !prev;
    });
  };

  return (
    <SigupLayout>
      <FrameAndTradeInvest>
        <div className="mb-[24px] tablet:mb-[32px] flex flex-col justify-center align-middle">
          <p className=" text-[20px] tablet:text-[32px] font-700 leading-[150%] tablet:leading-[120%] text-white mb-[12px] h-[38px] w-[387px] flex justify-center align-middle">
            Welcome to Trade Invest
          </p>

          <div className=" flex justify-center align-middle text-[12px] tablet:text-[16px] font-medium leading-[133%] tablet:leading-[150%] text-[#8B949E] ">
            Don't have an account?
            <Link
              to={`/create`}
              className="text-[#1F6FEB] ml-[4px] text-[12px] tablet:text-[16px] font-medium leading-[133%] tablet:leading-[150%]"
            >
              Start for free
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] tablet:gap-[24px] w-full">
          <InputEmail />
          <InputPassword />
          <Button>Log in</Button>
          <Link
            to={`/recovery2`}
            className=" flex justify-center items-center px-[24px] py-[12px] text-[#1F6FEB]"
          >
            Forgot password?
          </Link>
        </div>
      </FrameAndTradeInvest>
    </SigupLayout>
  );
};

export default Login;
