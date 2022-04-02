import DashboardHome from "./components/Dashboard/DashboardHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientList from './components/Dashboard/PatientList';
function App() {
  return (
    <div sx={{ background: "#F2F5F9 !important" }}>
      <Router>

        <Routes>
          <Route exact path="/" element={<DashboardHome />} >
            <Route path="/patientList" element={<PatientList />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;