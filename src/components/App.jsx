import HospLogo from "./HospLogo/HospLogo";
import navitems from "../data/nav-item.json";
import NavPanel from "./NavPanel/NavPanel";
import ContactList from "./ContactList/ContactList";
import TitleSection from "./TitleSection/TitleSection";
import DescSection from "./DescSection/DescSection";
import Stats from "./Stats/Stats";
import css from "./App.module.scss";

function App() {
  return (
    <div className={css.app}>
      <header className={css.appHeader}>
        <HospLogo />
        <NavPanel items={navitems} />
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
      <main>
        <TitleSection />
        <DescSection />
        <Stats />
      </main>
    </div>
  );
}

export default App;
