import { Route, Routes } from "react-router-dom";
import Portfolio from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPageSample";

const App = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Portfolio />}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/landingpage" element={<LandingPage />} />
    </Routes>
   );
}
 
export default App;