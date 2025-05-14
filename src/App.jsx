import headerLogo from "./assets/img/uFestivalLogo.png";
import homeIcon from "./assets/icons/home.png";
import infoIcon from "./assets/icons/info.png";
import musicIcon from "./assets/icons/wave-sound.png";
import locationIcon from "./assets/icons/location.png";
import "./App.css";

function App() {
  return (
    <>
      <header className="flex flex-row justify-around items-center shadow-sm h-12">
        <img src={headerLogo} alt="headerlogo" className="w-12 h-auto"/>
      </header>
      <main>
        <h1>test</h1>
      </main>
      <div id="nav-bar" className="fixed bottom-0 h-14 w-full bg-white shadow-2xl">
        <div id="buttons-container" className="flex flex-row justify-around items-center h-full">
          <img src={homeIcon} alt="" className="w-7"/>
          <img src={infoIcon} alt="" className="w-7"/>
          <img src={musicIcon} alt="" className="w-7"/>
          <img src={locationIcon} alt="" className="w-7"/>
        </div>
      </div>
    </>
  );
}

export default App;