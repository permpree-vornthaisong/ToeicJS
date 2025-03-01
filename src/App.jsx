// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/1_Home";
import Listening from "./pages/About/2_Listening";
import ListeningPhoto from "./pages/About/2_1_ListeningPhotos";
import ListeningConver from "./pages/About/2_3_ListeningConvers";
import ListeningTalking from "./pages/About/2_4_ListeningTalking";
import ListeningQuestions from "./pages/About/2_2_ListeningQuestions";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes >
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="listening" element={<Listening />} />
            <Route path="listeningPhotos" element={<ListeningPhoto />} />
            <Route path="listeningQuestions" element={<ListeningQuestions />} />
            <Route path="listeningConvers" element={<ListeningConver />} />
            <Route path="listeningTalkings" element={<ListeningTalking />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
