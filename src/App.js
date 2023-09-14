import './App.css';
import Navbar from './navbar';
import Shop from './shop';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Shop/>
      </div>
    </>
  );
}

export default App;
