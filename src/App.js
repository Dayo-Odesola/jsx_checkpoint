import logo from './logo.svg';
import imageInSrc from './imageInSrc.png'
import './App.css';
import './style.css'

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className='title red'>Ayra Star</h1>

        <div className="images">
          <img src={imageInSrc} style={{width: "703px"}} alt="imageinsrc" />
          <img src="/imageInPublic.jpeg" alt="imageinpublic" />
        </div>
        
      </div>
    </div>
  );
}

export default App;
