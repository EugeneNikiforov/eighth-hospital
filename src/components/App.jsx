import css from "./App.module.scss";
import HospLogo from "./HospLogo/HospLogo";

function App() {
  return (
    <div className={css.app}>
      <header className={css.appHeader}>
        <HospLogo />
        <p>Тяжело в лечении - легко в раю.</p>
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
