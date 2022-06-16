import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/Home/HomePage';
import SectionsPage from './pages/Sections/SectionsPage'
import VocabularyPage from './pages/Vocabulary/VocabularyPage'
import AboutPage from './pages/About/AboutPage'
import ContactPage from './pages/Contact/ContactPage'


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />}/>

          <Route path='/sections' element={<SectionsPage />}/>

          <Route path='/vocabulary' element={<VocabularyPage />}/>

          <Route path='/about' element={<AboutPage />}/>

          <Route path='/contact' element={<ContactPage />}/>

        </Routes>
      </Router>
      <footer className='footer'>
        <p>&copy; Robert Behring 2022</p>
      </footer>
    </div>
  );
}

export default App;
