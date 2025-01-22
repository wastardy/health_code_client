import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import TrainingsPage from "./pages/TrainingsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/trainings" element={<TrainingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
