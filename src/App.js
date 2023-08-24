import logo from './logo.svg';
import './App.css';
import Header from './angwanghyeon/sections/Header';
import Main from './angwanghyeon/sections/Main';
import Footer from './angwanghyeon/sections/Footer';
import { Link, Route, Routes } from 'react-router-dom';
import './reset.css'

function App() {
  return (
    <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
  );
}

export default App;
