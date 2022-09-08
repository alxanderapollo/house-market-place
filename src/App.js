import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/" element={<Offers />} />
          <Route path="/" element={<Profile />} />
          <Route path="/" element={<Signin />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
