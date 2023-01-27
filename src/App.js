
import React from 'react'
import FirstHilight from './Components/FirstHilight/FirstHilight';
import FivthHilighter from './Components/FivthHilighter/FivthHilighter';
import Footer from './Components/Footer/Footer';
import FourthHilighter from './Components/FourthHilighter/FourthHilighter';
import Header from './Components/Header/Header';
import SecondHilight from './Components/SecondHilight/SecondHilight';
import SixHilighter from './Components/SixHilighter/SixHilighter';
import SlideHilighter from './Components/SlideHilighter/SlideHilighter';
import ThirdHilight from './Components/ThirdHilight/ThirdHilight';

// import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
  <Header />
  <FirstHilight/>
  <SecondHilight />
  <ThirdHilight />
  <FourthHilighter />
  <FivthHilighter />
  <SixHilighter />
  <SlideHilighter/>
  <Footer />

    </>
  );
}

export default App;
