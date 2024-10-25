import './i18n';
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import { Route, Routes } from 'react-router-dom';
import AddTask from './pages/AddTask';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function App() {
  const theme = useSelector(state => state.theme.theme);
  const language = useSelector(state => state.language.language); 
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    i18n.changeLanguage(language); 
  }, [language]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addtask' element={<AddTask />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
