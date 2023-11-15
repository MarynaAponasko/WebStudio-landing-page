import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Projects from './section/Projects';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="portfolio" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
