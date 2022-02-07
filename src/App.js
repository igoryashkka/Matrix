import s from'./App.module.css';
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import Sponsors from './components/Sponsors/Sponsors';
import SectionDigitInform from './components/SectionDigitInform/SectionDigitInform'
function App() {
  return (
    <div className={s.container }>
     <Header />
     <Home />
     <Sponsors />
     <SectionDigitInform />
    </div>
  );
}

export default App;
