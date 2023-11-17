import "./App.css";
import Router from "./Router/Router";
import Login from "./Pages/Login/Login";
import Forgot_password from "./Pages/ForgotPassword/ForgotPassword";
import CreateAccount from "./Pages/CreateAccount/CreateAccont";
import SigupLayout from "./layouts/signup-layout";
import PasswordMail from "./Pages/PasswordMail/PasswordMail";
import FrameAndTradeInvest from "./Components/FrameAndTradeInvest";

function App() {
  return (
    <div>
      <Router />
      <SigupLayout>
        {/* <Login /> */}
        {/* <Forgot_password /> */}
        {/* <CreateAccount /> */}
        {/* <PasswordMail />  */}
        <FrameAndTradeInvest />
      </SigupLayout>
    </div>
  );
}

export default App;
