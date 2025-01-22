import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sticky top-0 flex flex-col gap-4 p-4 bg-green-200 h-screen">
      <Link to="/profile">
        <div className="card bg-white p-4">Профіль користувача</div>
      </Link>
      <div className="card bg-white p-4">Друзі</div>
      <div className="card bg-white p-4">Збережені челенджі</div>
      <div className="card bg-white p-4">Збережені дієти</div>
      <Link to="/trainings">
        <div className="card bg-white p-4">Тренування</div>
      </Link>
    </div>
  );
};

export default SideBar;
