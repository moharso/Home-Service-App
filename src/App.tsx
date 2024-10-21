
import { Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchCategory from './pages/SearchCategory';

const App: React.FC = () => {
  return (
    <div>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search/:category" element={<SearchCategory />} />
      </Routes>
    </div>
  );
};

export default App;
