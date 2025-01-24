import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sticky top-0 flex flex-col gap-3 p-4 bg-[#7aa299b5] h-screen max-w-[300px]">
      <Link to="/profile">
        <div className="card bg-[#EBEBEB] rounded-3xl drop-shadow-lg">
          <img
            src="src/assets/images/background.png"
            alt="background"
            className="w-full h-[90px]"
          />
          <div className="w-[110px] h-[110px] rounded-full overflow-hidden absolute mt-11 ml-5">
            <img
              src="src/assets/images/profilePic.png"
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-row items-center gap-3 mt-[70px] ml-5">
            <h2 className="mt-4 text-xl">Viktor Mandziak</h2>
            <h3 className="mt-4 text-gray-500">he/him</h3>
          </div>
          <div className="flex flex-col mt-4 gap-[5px] text-sm text-gray-500 mb-6 ml-5">
            <p>City: Lviv</p>
            <p>Age: 37</p>
            <p>Weight: 78kg</p>
            <p>Height: 182cm</p>
          </div>
        </div>
      </Link>

      <div className="card flex flex-row bg-[#EBEBEB] p-3 drop-shadow-lg items-center gap-10">
        <img
          src="src/assets/logos/friends.png"
          alt="profile"
          className="w-10 h-10"
        />
        <h3 className="text-[17px]">Your friends</h3>
      </div>
      <div className="card flex flex-row bg-[#EBEBEB] p-3 drop-shadow-lg items-center gap-10">
        <img
          src="src/assets/logos/recipes.png"
          alt="profile"
          className="w-10 h-10"
        />
        <h3 className="text-[17px]">Saved recipes</h3>
      </div>
      <div className="card flex flex-row bg-[#EBEBEB] p-3 drop-shadow-lg items-center gap-8">
        <img
          src="src/assets/logos/challenges.png"
          alt="profile"
          className="w-10 h-10"
        />
        <h3 className="text-[17px]">Saved challenges</h3>
      </div>

      <div className="flex flex-col mx-auto">
        <h2 className="text-center">Follow us on</h2>
        <div className="flex flex-row gap-5">
          <img
            src="src/assets/logos/insta.png"
            alt="Instagram"
            className="h-5 w-5"
          />
          <img src="src/assets/logos/x.png" alt="X" className="h-5 w-5" />
          <img
            src="src/assets/logos/github.png"
            alt="GitHub"
            className="h-5 w-5"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
