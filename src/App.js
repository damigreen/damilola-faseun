import Header from "./components/header/"
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Damilola Faseun</h1>
        <h1>Full Stack Developer</h1>
        <ul>
          <li>
            home
          </li>
          <li>
            portfolio
          </li>
          <li>
            resume
          </li>
        </ul>
        <p></p>
        <Header />
      </header>
    </div>
  );
}

export default App;
