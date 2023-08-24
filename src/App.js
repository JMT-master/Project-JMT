import logo from './logo.svg';
import './App.css';
import './css/reset.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
