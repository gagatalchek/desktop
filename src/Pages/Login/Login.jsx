import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState(true);

  const handleSwitch = () => {
    setPassword((prev) => {
      return !prev;
    });
  };

  return (
    <div className=" flex  flex-col m-auto">
      <div className="h-[16px] w-[283px] pt-[180px] flex justify-self-center align-middle m-auto mb-[64px]">
        <h2 className="flex items-center align-middle text-white h-[16px] w-[283px] mb-[64px]">
          TRADE INVEST Backoffice
        </h2>
      </div>
      <div className=" flex flex-col m-auto p-[36px] w-[594px] justify-center align-middle rounded-[24px] border-[1px] border-solid border-[#30363D] bg-[#161B22]">
        <div className=" m-auto w-[387px] h-[74px] mb-[32px] ">
          <p className=" text-[32px] font-700 leading-[120%] text-white mb-[12px] h-[38px] w-[387px]">
            Welcome to Trade Invest
          </p>
          <div className=" flex justify-center align-middle text-[16px] font-medium leading-[24px] text-[#8B949E] ">
            Don't have an account?
            <Link className="text-[#1F6FEB] ml-[4px]">Start for free</Link>
          </div>
        </div>
        <div className="h-[73px] w-[522px] mb-[24px]">
          <p className="text-[#8B949E] text-[14px] font-normal leading-[150%] mb-[8px] ">
            Email address
          </p>
          <div className=" px-[10] rounded-[6px] border-[1px] border-solid border-[#484F58]">
            <input className=" px-[10px] h-[44px] w-[522px] bg-[transparent] text-white outline-none	" />
          </div>
        </div>
        <div className="h-[73px] w-[522px] mb-[24px]">
          <p className="text-[#8B949E] text-[14px] font-normal leading-[150%] mb-[8px]">
            Password
          </p>
          <div className=" pl-[10px] flex items-center rounded-[6px] border-[1px] border-solid border-[#484F58]">
            <input
              type={password ? "text" : "password"}
              placeholder="Password"
              className="px-[10px] h-[44px] w-[522px] bg-[transparent] text-white outline-none	"
            />
            <svg
              onClick={handleSwitch}
              className="mr-[10px]"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3211 9.74688C19.2937 9.68516 18.632 8.21719 17.1609 6.74609C15.2008 4.78594 12.725 3.75 9.99999 3.75C7.27499 3.75 4.79921 4.78594 2.83905 6.74609C1.36796 8.21719 0.703118 9.6875 0.678899 9.74688C0.643362 9.82681 0.625 9.91331 0.625 10.0008C0.625 10.0883 0.643362 10.1748 0.678899 10.2547C0.706243 10.3164 1.36796 11.7836 2.83905 13.2547C4.79921 15.2141 7.27499 16.25 9.99999 16.25C12.725 16.25 15.2008 15.2141 17.1609 13.2547C18.632 11.7836 19.2937 10.3164 19.3211 10.2547C19.3566 10.1748 19.375 10.0883 19.375 10.0008C19.375 9.91331 19.3566 9.82681 19.3211 9.74688ZM9.99999 15C7.5953 15 5.49452 14.1258 3.75546 12.4023C3.0419 11.6927 2.43483 10.8836 1.95312 10C2.4347 9.11636 3.04179 8.30717 3.75546 7.59766C5.49452 5.87422 7.5953 5 9.99999 5C12.4047 5 14.5055 5.87422 16.2445 7.59766C16.9595 8.307 17.5679 9.11619 18.0508 10C17.4875 11.0516 15.0336 15 9.99999 15ZM9.99999 6.25C9.25831 6.25 8.53329 6.46993 7.9166 6.88199C7.29992 7.29404 6.81927 7.87971 6.53544 8.56494C6.25162 9.25016 6.17735 10.0042 6.32205 10.7316C6.46674 11.459 6.82389 12.1272 7.34834 12.6517C7.87279 13.1761 8.54097 13.5333 9.2684 13.6779C9.99583 13.8226 10.7498 13.7484 11.4351 13.4645C12.1203 13.1807 12.7059 12.7001 13.118 12.0834C13.5301 11.4667 13.75 10.7417 13.75 10C13.749 9.00576 13.3535 8.05253 12.6505 7.34949C11.9475 6.64645 10.9942 6.25103 9.99999 6.25ZM9.99999 12.5C9.50554 12.5 9.02219 12.3534 8.61107 12.0787C8.19994 11.804 7.87951 11.4135 7.69029 10.9567C7.50107 10.4999 7.45157 9.99723 7.54803 9.51227C7.64449 9.02732 7.88259 8.58186 8.23222 8.23223C8.58186 7.8826 9.02731 7.6445 9.51227 7.54804C9.99722 7.45157 10.4999 7.50108 10.9567 7.6903C11.4135 7.87952 11.804 8.19995 12.0787 8.61107C12.3534 9.0222 12.5 9.50555 12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 9.99999 12.5Z"
                fill="#484F58"
              />
            </svg>
          </div>
        </div>
        <button className=" mb-[24px] w-[522px] h-[44px] px-[24px] py-[12px] text-white rounded-[6px] bg-[#1F6FEB]">
          Log in
        </button>
        <Link
          to={"#"}
          className=" flex justify-center items-center px-[24px] py-[12px] text-[#1F6FEB]"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
