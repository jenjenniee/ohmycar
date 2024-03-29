import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './common/components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import View from './pages/View';

function App() {
  const url = window.location.href
  return (
    <div className="App">
      <Header url={`${url}`} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/View" element={<View/>} />

        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
