import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/sobre-nosotros" Component={About} />
          <Route path="/crear-anuncio" Component={CreatePost} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;