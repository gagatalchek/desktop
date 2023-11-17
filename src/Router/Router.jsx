import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import PasswordMail from "../Pages/PasswordMail/PasswordMail";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import CreateAccount from "../Pages/CreateAccount/CreateAccont";
import SigupLayout from "../layouts/signup-layout";
import FrameAndTradeInvest from "../components/SignupPaper";
import InputEmail from "../components/inputs/input-email";
import InputPassword from "../components/inputs/input-password";
import Button from "../components/buttons/Button";
import NameInput from "../components/inputs/input-name";
import PhoneInput from "../components/inputs/input-phone";
import CountryInput from "../components/inputs/country-input";

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
              <FrameAndTradeInvest />
            </SigupLayout>
          }
        />
      </Routes>
    </>
  );
};

export default RouterContainer;
