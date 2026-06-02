import { Route, Routes } from "react-router-dom";
import Portfolio from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPageSample";
import CorporateWebsite from "./components/projects/CorporateWebsite";
import SaaSLanding from "./components/projects/SaaSLanding";
import RestaurantWebsite from "./components/projects/RestaurantWebsite";
import FashionStore from "./components/projects/FashionStore";
import TechMarketplace from "./components/projects/TechMarketplace";
import AnalyticsDashboard from "./components/projects/AnalyticsDashboard";
import MobileAppDashboard from "./components/projects/MobileAppDashboard";
import SalesDashboard from "./components/projects/SalesDashboard";
import NetflixClone from "./components/projects/NetflixClone";
import VideoStreaming from "./components/projects/VideoStreaming";
import BrandIdentity from "./components/projects/BrandIdentity";
import LogoDesigns from "./components/projects/LogoDesigns";
import SocialMediaGraphics from "./components/projects/SocialMediaGraphics";
import TaskManagement from "./components/projects/TaskManagement";
import CRMSystem from "./components/projects/CRMSystem";
import InventoryManagement from "./components/projects/InventoryManagement";
import DocumentationWebsite from "./components/projects/DocumentationWebsite";
import ProductMarketing from "./components/projects/ProductMarketing";
import EmailMarketing from "./components/projects/EmailMarketing";

const App = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Portfolio />}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/projects/corporate-website" element={<CorporateWebsite />} />
      <Route path="/projects/saas-landing" element={<SaaSLanding />} />
      <Route path="/projects/restaurant-website" element={<RestaurantWebsite />} />
      <Route path="/projects/fashion-store" element={<FashionStore />} />
      <Route path="/projects/tech-marketplace" element={<TechMarketplace />} />
      <Route path="/projects/analytics-dashboard" element={<AnalyticsDashboard />} />
      <Route path="/projects/mobile-app-dashboard" element={<MobileAppDashboard />} />
      <Route path="/projects/sales-dashboard" element={<SalesDashboard />} />
      <Route path="/projects/netflix-clone" element={<NetflixClone />} />
      <Route path="/projects/video-streaming" element={<VideoStreaming />} />
      <Route path="/projects/brand-identity" element={<BrandIdentity />} />
      <Route path="/projects/logo-designs" element={<LogoDesigns />} />
      <Route path="/projects/social-media-graphics" element={<SocialMediaGraphics />} />
      <Route path="/projects/task-management" element={<TaskManagement />} />
      <Route path="/projects/crm-system" element={<CRMSystem />} />
      <Route path="/projects/inventory-management" element={<InventoryManagement />} />
      <Route path="/projects/documentation-website" element={<DocumentationWebsite />} />
      <Route path="/projects/product-marketing" element={<ProductMarketing />} />
      <Route path="/projects/email-marketing" element={<EmailMarketing />} />
    </Routes>
   );
}
 
export default App;