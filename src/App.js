import logo from './logo.svg';
import './css/App.css';
import HeaderCarrent from "./js/HeaderCarrent";
import FooterCarrent from "./js/FooterCarrent";
import LandingPage from "./js/LandingPage";



function App() {
  return (
      <div className="App">
              <HeaderCarrent/>
              <LandingPage/>

              <FooterCarrent/>
      </div>
  )
}

export default App;
