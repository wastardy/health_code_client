import { useState } from "react";
import Header from "../components/Header";
import AddChallengeModal from "../components/AddChallengeModal";

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col h-screen font-inria bg-[#77b7a97d]">
      <Header />
      <div className="card bg-[#EBEBEB] rounded-3xl drop-shadow-lg w-[70%] h-full mx-auto my-8">
        <div className="flex flex-row mx-auto">
          <div className="flex flex-col">
            <div className="w-[180px] h-[180px] rounded-full overflow-hidden mt-10 drop-shadow-lg">
              <img
                src="src/assets/images/profilePic.png"
                alt="profile"
                className="object-cover w-full h-full "
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                className="btn bg-[#7aa299b5] rounded-3xl drop-shadow-lg px-4 py-1"
                onClick={handleModalOpen}
              >
                Add a Challenge
              </button>
            </div>
          </div>

          <div className="mt-20 ml-10">
            <div className="flex flex-row gap-10">
              <h1 className="text-xl font-bold">Viktor Mandziak</h1>
              <div className="btn bg-[#7aa299b5] rounded-3xl drop-shadow-lg px-4 py-1">
                Edit Profile
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <div className="flex flex-row gap-10">
                <h2>Posts:{}</h2>
                <h2>Followers: 378</h2>
              </div>
              <p className="max-w-[250px]">
                Bio:
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <AddChallengeModal onClose={handleModalClose} />}
    </div>
  );
};

export default ProfilePage;
