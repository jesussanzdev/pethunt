import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import CreateForm from './components/CreateForm';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/sobre-nosotros" Component={About} />
          <Route path="/crear-anuncio" Component={CreateForm} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;