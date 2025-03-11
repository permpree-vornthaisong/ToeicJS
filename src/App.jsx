// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Layout from "./components/layout";
import Home from "./pages/1_Home";
import Listening from "./pages/About/2_0_Listening";
import ListeningPhoto from "./pages/About/2_1_ListeningPhotos";
import ListeningConver from "./pages/About/2_3_ListeningConvers";
import ListeningTalking from "./pages/About/2_4_ListeningTalking";
import ListeningQuestions from "./pages/About/2_2_ListeningQuestions";
import Reading from "./pages/About/3_1_Reading";
import ReadingIncompleteSentences from "./pages/About/3_2_ReadingIncompleteSentences";
import FindIncorrectWords from "./pages/About/3_3_FindIncorrectWords";
import ReadingPassages from "./pages/About/3_4_ReadingPassages";
import ListeningNew from "./pages/About/2_1_ListeningNew";
import NavbarComponent from "./components/NavbarComponent";
import Abouttoeic from "./pages/About/abouttoeic";
import Vocab from "./pages/About/vocab";
import Contracts from "./pages/vocabs_page/Contracts";
import Marketing from "./pages/vocabs_page/Marketing";

// ✅ รองรับ Routing ทุกหมวด
const vocabComponents = {
  "contracts": Contracts,
  "marketing": Marketing
};

const VocabPage = () => {
  const { word } = useParams();
  const formattedWord = word.toLowerCase(); // ✅ เปลี่ยนให้เป็นตัวพิมพ์เล็ก
  const Component = vocabComponents[formattedWord] || Contracts;
  return <Component />;
};

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="listeningNew" element={<ProtectedRoute><ListeningNew /></ProtectedRoute>} />
            <Route path="listeningPhotos" element={<ProtectedRoute><ListeningPhoto /></ProtectedRoute>} />
            <Route path="listeningQuestions" element={<ProtectedRoute><ListeningQuestions /></ProtectedRoute>} />
            <Route path="listeningConvers" element={<ProtectedRoute><ListeningConver /></ProtectedRoute>} />
            <Route path="listeningTalkings" element={<ProtectedRoute><ListeningTalking /></ProtectedRoute>} />
            <Route path="reading" element={<ProtectedRoute><Reading /></ProtectedRoute>} />
            <Route path="readingIncompleteSentences" element={<ProtectedRoute><ReadingIncompleteSentences /></ProtectedRoute>} />
            <Route path="findIncorrectWords" element={<ProtectedRoute><FindIncorrectWords /></ProtectedRoute>} />
            <Route path="readingPassages" element={<ProtectedRoute><ReadingPassages /></ProtectedRoute>} />
            <Route path="abouttoeic" element={<ProtectedRoute><Abouttoeic /></ProtectedRoute>} />
            <Route path="Vocab" element={<ProtectedRoute><Vocab /></ProtectedRoute>} />
            <Route path="/vocab/:word" element={<ProtectedRoute><VocabPage /></ProtectedRoute>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
