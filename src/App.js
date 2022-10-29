
import './App.css';
import Footer from './component/Footer/Footer';
import Genres from './component/Genres/Genres';
import Intro from './component/intro/intro';
import Navbar from './component/Navbar/Navbar';
import PicGrid from './component/PicGrid/PicGrid';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Genres />
      <PicGrid />
      <Footer />
    </div>
  );
}

export default App;
