import { useState } from "react";
import "./App.css";
import HomePage from "./components/0.HomePage/js/HomePage";
import SearchComponent from "./components/SearchComponent/js/SearchComponent";

function App() {
  const [showSearchComponent, setShowSearchComponent] = useState(false);

  const toggleSearchComponent = () => {
    setShowSearchComponent((prev) => !prev);
  };

  return (
    <div className="relative">
      <HomePage setShowSearchComponent={setShowSearchComponent} />

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#d4d0cf] z-[60] transition-transform duration-300 ${
          showSearchComponent ? "show" : "hide "
        }`}
      >
        <SearchComponent
          showSearchComponent={showSearchComponent}
          toggleSearchComponent={toggleSearchComponent}
        />
      </div>
    </div>
  );
}

export default App;
