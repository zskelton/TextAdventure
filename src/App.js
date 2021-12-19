import { Main } from "./Game/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Unnamed Adventure</p>
      </header>
      <hr />
      <Main />
      <hr />
      <footer>
        <span>
          <a
            className="App-link"
            href="https://www.skeltonnetworks.com/"
            target="_blank"
            rel="noreferrer"
          >
            Skelton Networks
          </a>
          &nbsp;&nbsp;&copy; 2021
        </span>
      </footer>
    </div>
  );
}

export default App;
