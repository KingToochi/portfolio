import { Route, Routes } from "react-router-dom";
import Portfolio from "./components/LandingPage";
import Dashboard from "./components/Dashboard";

const App = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Portfolio />}/>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
   );
}
 
export default App;