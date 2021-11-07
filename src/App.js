import React, { useState } from 'react';
import sideHustleLogo from './sidehustle-logo.png';
import appDot from './google-show-apps-icon.png'

function App() {

    const [textSearch, setSearch] = useState("");

    const handleSearch = (event) => {
      setSearch(event.target.value);
  }
  
  return (
    <div className="App">
      <ul>
        <div className="one">
          <li>About</li>
          <li>Store</li>
        </div>
        <div className="two">
          <li>Gmail</li>
          <li>Images</li>
          <li><button id="sign">Sign in</button></li>
        </div>
      </ul>

      <div className="three">
      {textSearch ? <p>{textSearch}</p> : <img src={sideHustleLogo} alt="Side Hustle Logo" />}
        <input type="text" onChange={handleSearch} />
      </div>
      <div className="four">
        <button id="gS">Google Search</button>
        <button id="feeling">I'm Feeling Lucky</button>
      </div>

      <ul className="last-div">
        <div className="five">
          <li>Advertising</li>
          <li>Business</li>
          <li>How Search works</li>
        </div>
        <div className="six">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Settings</li>
        </div>
      </ul>
    </div>
  );
}

export default App;
