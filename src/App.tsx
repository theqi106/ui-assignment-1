
import { useState } from 'react';
import './App.css'
import { IQuiz } from './constant/Question';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import CreateQuiz from './pages/CreateQuiz'
import EditQuiz from './pages/EditQuiz'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import EditQuestion from './pages/EditQuestion';
function App() {
  const [ newQuiz, setNewQuiz] = useState<IQuiz>();
  const  [quiz, setQuiz] = useState<IQuiz>();
  return (
      <div className="App">
         <Router>
      <Routes>
        <Route path="/" element={<Home  newQuiz={newQuiz}/>} />
        <Route path="/create" element={<CreateQuiz setNewQuiz={(quiz) => setNewQuiz(quiz)} />} />
        <Route path="/edit/:id" element={<EditQuiz/>} />
        <Route path="/edit/question/:id" element={<EditQuestion/>} />
      </Routes>
    </Router>
          {/* <h1>Ứng Dụng Quiz</h1>
          <QuizForm setNewQuiz={(quiz) => setNewQuiz(quiz)}/>
          <QuizList newQuiz={newQuiz} onSelectQuiz={(quiz) => setSelectedQuiz(quiz)} />
          {selectedQuiz && <QuizDetails q={selectedQuiz} />} */}
      </div>
  );
}

export default App
