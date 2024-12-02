import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/register";
import StartSurvey from "./pages/start-survey";
import Footer from "./components/footer";
import AdminLogin from "./adminLogin";
import { useAppContext } from "./AppContext/useAppContext";
import AdminDashboard from "./pages/adminDashboard";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import TermsService from "./pages/TermsService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import LeadDashboard from "./pages/LeadDashboard";
import FeedbackSurvey from "./pages/FeedbackSurvey";
import SurveySummary from "./pages/SurveySummary";


function App() {
  const { state } = useAppContext();

  return (
    <BrowserRouter>
      {!state?.status && <Header  />}
      <Routes>
        <>
          {/* Public Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-of-service" element={<TermsService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/lead-dashboard" element={<LeadDashboard />} />
          <Route path="/feedback-survey" element={<FeedbackSurvey />} />
          <Route path="/survey-summary" element={<SurveySummary />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/start-survey" element={<StartSurvey />} />
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/start-survey" element={<StartSurvey />} />
        </>
        {state?.status && (
          <>
            {/* Authenticated Routes */}
            <Route path="/dashboard" element={<AdminDashboard />}>
              <Route index element={<Navigate to="registration" />} />
              <Route path="registration" element={<Register />} />
              <Route path="*" element={<Navigate to="registration" />} />
            </Route>
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        )}
      </Routes>
      {!state?.status && <Footer />}
    </BrowserRouter>
  );
}

export default App;