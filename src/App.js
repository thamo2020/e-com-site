
import './App.css';
import Footer from './component/Footer/Footer';
import Intro from './component/intro/intro';
import Navbar from './component/Navbar/Navbar';
import PicGrid from './component/PicGrid/PicGrid';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <PicGrid />
      <Footer />
    </div>
  );
}

export default App;
