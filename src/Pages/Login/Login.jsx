import { useState } from "react";
import { Link } from "react-router-dom";
import SigupLayout from "../../layouts/signup-layout";
import FrameAndTradeInvest from "../../Components/FrameAndTradeInvest";
import InputEmail from "../../Components/InputEmail";
import InputPassword from "../../Components/InputPassword";
import Button from "../../Components/Button";

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
        <div className="mb-[32px]">
          <p className=" text-[32px] font-700 leading-[120%] text-white mb-[12px] h-[38px] w-[387px]">
            Welcome to Trade Invest
          </p>

          <div className=" flex justify-center align-middle text-[16px] font-medium leading-[24px] text-[#8B949E] ">
            Don't have an account?
            <Link to={"#"} className="text-[#1F6FEB] ml-[4px]">
              Start for free
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <InputEmail />
          <InputPassword />
          <Button>Log in</Button>
          <Link
            to={"#"}
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
