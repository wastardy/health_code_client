import { Link } from "react-router-dom";
import {
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
  return (
    <div className="sticky top-0 flex flex-col gap-3 p-4 bg-[#7aa299b5] h-screen max-w-[300px]">
      <Link to="/profile">
        <div className="card bg-[#EBEBEB] rounded-3xl drop-shadow-lg">
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20240522/pngtree-above-the-clouds-and-above-minneapolis-minnesota-from-airplane-image_15682301.jpg"
            alt="background"
            className="w-full h-[90px] rounded-t-3xl drop-shadow-lg"
          />
          <div className="w-[110px] h-[110px] rounded-full overflow-hidden absolute mt-11 ml-5 drop-shadow-lg">
            <img
              src="https://playerstv.com/wp-content/uploads/2024/02/GetPaidStock.com-65d3b9d9dc21e.jpg"
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-row items-center gap-3 mt-[70px] ml-5">
            <h2 className="mt-4 text-xl">Anthony Edwards</h2>
            <h3 className="mt-4 mr-4 text-gray-500">he/him</h3>
          </div>
          <div className="flex flex-col mt-4 gap-[5px] text-sm text-gray-500 mb-6 ml-5">
            <p>Atlanta, GA</p>
            <p>Age: 23</p>
            <p>Weight: 78kg</p>
            <p>Height: 192cm</p>
          </div>
        </div>
      </Link>

      <div className="card flex flex-row bg-[#EBEBEB] p-3 drop-shadow-lg items-center gap-10">
        <img
          src="./assets/logos/friends.png"
          alt="profile"
          className="w-10 h-8"
        />
        <h3 className="text-[17px]">Your friends</h3>
      </div>
      <div className="card flex flex-row bg-[#EBEBEB] p-3 drop-shadow-lg items-center gap-10">
        <img
          src="./assets/logos/recipes.png"
          alt="profile"
          className="w-10 h-8"
        />
        <h3 className="text-[17px]">Saved recipes</h3>
      </div>
      <div className="card flex flex-row bg-[#EBEBEB] p-3 drop-shadow-lg items-center gap-8">
        <img
          src="./assets/logos/challenges.png"
          alt="profile"
          className="w-10 h-8"
        />
        <h3 className="text-[17px]">Saved challenges</h3>
      </div>

      <div className="flex flex-col mx-auto">
        <h2 className="text-center">Follow us on</h2>
        <div className="flex flex-row gap-5 my-2">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-black hover:text-gray-700 cursor-pointer h-7 w-7"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className="text-black hover:text-gray-700 cursor-pointer h-7 w-7"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="text-black hover:text-gray-700 cursor-pointer h-7 w-7"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
