import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [selectedIcon, setSelectedIcon] = useState("");

  const headerIcons = [
    "src/assets/svg/interest-facts.svg",
    "src/assets/svg/food.svg",
    "src/assets/svg/sleep-and-water.svg",
    "src/assets/svg/trainings.svg",
    "src/assets/svg/routine.svg",
    "src/assets/logos/home.png",
  ];

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-[#797d89] text-white rounded-br-lg font-inria">
      <div className="flex flex-row">
        <Link to="/">
          <div className="w-12 h-12 rounded-md mr-4">
            <img
              src="src/assets/logos/main-logo.png"
              alt="GitHub"
              className="h-full w-full"
            />
          </div>
        </Link>
        <h1 className="text-[30px] items-center">HealthCode</h1>
        <input
          type="text"
          placeholder="Search"
          className="input rounded-full mx-8 w-[400px] text-[#000]"
        />
      </div>
      <div className="flex gap-2">
        {headerIcons.map((icon, index) =>
          index === headerIcons.length - 1 ? (
            <Link
              key={index}
              to="/"
              className="w-12 h-12 rounded-lg cursor-pointer flex items-center justify-center bg-[#c8c8c859] p-1 drop-shadow-md"
            >
              <img
                src={icon}
                alt="challenge icon"
                className="w-full h-full rounded-lg"
              />
            </Link>
          ) : (
            <img
              key={index}
              src={icon}
              alt="challenge icon"
              className={`w-12 h-12 rounded-lg cursor-pointer ${
                selectedIcon === icon ? "bg-[#3B712759] p-1 drop-shadow-md" : ""
              }`}
              onClick={() => setSelectedIcon(icon)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Header;
