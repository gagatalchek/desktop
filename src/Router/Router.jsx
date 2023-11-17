import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import PasswordMail from "../Pages/PasswordMail/PasswordMail";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import CreateAccount from "../Pages/CreateAccount/CreateAccont";
import SigupLayout from "../layouts/signup-layout";
import FrameAndTradeInvest from "../Components/FrameAndTradeInvest";
import InputEmail from "../Components/InputEmail";
import InputPassword from "../Components/InputPassword";
import Button from "../Components/Button";
import NameInput from "../Components/NameInput";
import PhoneInput from "../Components/PhoneInput";
import CountryInput from "../Components/CountryInput";

const RouterContainer = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route
          path="recovery"
          element={
            <SigupLayout>
              <PasswordMail />
            </SigupLayout>
          }
        />
        <Route
          path="recovery2"
          element={
            <SigupLayout>
              <ForgotPassword />
            </SigupLayout>
          }
        />
        <Route
          path="create"
          element={
            <SigupLayout>
              <CreateAccount />
            </SigupLayout>
          }
        />
        <Route
          path="test"
          element={
            <SigupLayout>
              <PhoneInput />
            </SigupLayout>
          }
        />
      </Routes>
    </>
  );
};

export default RouterContainer;
