import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../src/pages/login/LoginPage';
import Dashboard from '../src/pages/dashboard/DashboardPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
