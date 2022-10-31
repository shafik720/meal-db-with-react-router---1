import logo from './logo.svg';
import './App.css';
import Header from './Componets/Header/Header';
import { Route, Routes } from 'react-router';
import Food from './Componets/Food/Food';
import About from './Componets/About/About';
import Contact from './Componets/Contact/Contact';
import Error from './Componets/Error/Error'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Food></Food>}></Route>
        <Route path='/food' element={<Food></Food>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
