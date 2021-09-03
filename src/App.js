import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
      <Navbar title='TextUtils' aboutText='About' />
      <div className='container my-3'>
        {/* my-3 is bootstrap class means margin y = 30px */}
        <TextForm heading='Enter the text to analyze below' />
      </div>
    </div>
  );
}

export default App;
