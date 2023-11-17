import "./App.css";
import Router from "./Router/Router";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="h-[1920px] w-[1080px] bg-main-background ">
      <Router />
      <Login />
    </div>
  );
}

export default App;
