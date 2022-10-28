
import './App.css';
import Intro from './component/intro/intro';
import Navbar from './component/Navbar/Navbar';
import PicGrid from './component/PicGrid/PicGrid';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <PicGrid />
    </div>
  );
}

export default App;
