import HospLogo from "./HospLogo/HospLogo";
import NavPanel from "./NavPanel/NavPanel";
import ContactList from "./ContactList/ContactList";
import css from "./App.module.scss";

function App() {
  return (
    <div className={css.app}>
      <header className={css.appHeader}>
        <HospLogo />
        <NavPanel />
        <ContactList />
        <p>Тяжело в лечении - легко в раю.</p>
        <a
          className={css.appLink}
          href="https://kmkl8.com.ua"
          target="_blank"
          rel="noopener noreferrer"
          title="Тринадцятий ліфт для VIP-клієнтів"
        >
          КМКЛ №8
        </a>
      </header>
    </div>
  );
}

export default App;
