import css from "./App.module.scss";

function App() {
  return (
    <div className={css.app}>
      <header className={css.appHeader}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={css.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
