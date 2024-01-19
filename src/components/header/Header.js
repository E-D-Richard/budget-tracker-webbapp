import SettingsMenu from "./settingsMenu/SettingsMenu";

const Header = () => {
  return (
    <header>
      <nav>
        <SettingsMenu />
      </nav>

      <h1>Budget Tracker</h1>
    </header>
  );
};

export default Header;
