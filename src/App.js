import './App.css';
import illustration from './illustration.svg'
import avatar from './avatar.webp'

function App() {
  return (
    <div className="App">
      <div>
        <img src={illustration} alt="Illustration article" className='illustration'/>
      </div>
      <div>
        <button className='button-el'>Learning</button>
        <p className='para'>Published 21 Dec 2023</p>
        <h1>HTML & CSS foundations</h1>
        <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
      </div>
      <div className='footer'>
        <img src={avatar} alt="avatar" className='avatar' />
        <small>Greg Hooper</small>
      </div>
    </div>
  );
}

export default App;
