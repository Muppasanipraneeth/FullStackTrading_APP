import NavBar from "./NavBar";
import Landingimg from "./Home/Hero";
import SignUp from "./Home/SignupLand";
import Trust from "./Home/Trust";
import PressLogo from "./Home/PressLogo";
import Unbeatable from "./Home/Unbeatable";
import Varsity from "./Home/Varsity";
import OpenAccount from "./Home/AccountOpen";
import Footer from "./Footer";
import Award from "./Home/Award";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Add padding to avoid content overlap with fixed navbar */}
      <div className="pt-20">
        {location.pathname === "/" && (
          <>
            <Landingimg />
            <SignUp />
            <Award />
            <Trust />
            <PressLogo />
            <Unbeatable />
            <Varsity />
            <OpenAccount />
          </>
        )}
        {/* Outlet for child routes */}
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
