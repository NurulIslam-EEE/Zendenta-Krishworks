import DashboardHome from "./components/Dashboard/DashboardHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientList from './components/Dashboard/PatientList';
import Others from "./components/Dashboard/Others";
function App() {
  return (
    <div sx={{ background: "#F2F5F9 !important" }}>
      <Router>

        <Routes>
          <Route exact path="/" element={<DashboardHome />} >
            <Route path="/" element={<PatientList />} />
            <Route path="/overview" element={<Others />} />
            <Route path="/calendar" element={<Others />} />
            <Route path="/messages" element={<Others />} />
            <Route path="/paymentInfo" element={<Others />} />
            <Route path="/settings" element={<Others />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;