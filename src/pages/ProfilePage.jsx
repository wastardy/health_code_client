import { useState } from "react";
import Header from "../components/Header";
import AddChallengeModal from "../components/AddChallengeModal";
import { usePostStore } from "../components/PostsSection";

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const posts = usePostStore((state) => state.posts);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col h-screen font-inria bg-[#77b7a97d]">
      <Header />
      <div className="card bg-[#EBEBEB] rounded-3xl drop-shadow-lg w-[80%] mx-auto my-8 overflow-auto">
        <div className="flex flex-col mx-auto">
          <div className="flex flex-row mx-auto">
            <div className="flex flex-col">
              <div className="w-[180px] h-[180px] rounded-full overflow-hidden mt-10 drop-shadow-lg">
                <img
                  src="https://playerstv.com/wp-content/uploads/2024/02/GetPaidStock.com-65d3b9d9dc21e.jpg"
                  alt="profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="mt-20 ml-10">
              <div className="flex flex-row gap-10">
                <h1 className="text-xl font-bold">Anthony Edwards</h1>
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <div className="flex flex-row gap-10">
                  <h2>Posts: {posts.length}</h2>
                  <h2>Followers: 378</h2>
                </div>
                <p className="max-w-[250px]">
                  Bio:
                  <p>
                    Professional athlete with 20 years of experience. Passionate
                    about pushing limits and achieving excellence on national
                    and international stages.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-[750px] mt-6">
            <button
              className="btn bg-[#7aa299b5] rounded-3xl drop-shadow-lg px-4 py-1"
              onClick={handleModalOpen}
            >
              Add a Challenge
            </button>

            <button className="btn bg-[#7aa299b5] rounded-3xl drop-shadow-lg px-4 py-1">
              Edit profile
            </button>

            <button className="btn bg-[#7aa299b5] rounded-3xl drop-shadow-lg px-4 py-1">
              Add extra information
            </button>
          </div>
        </div>
        <div className="w-[80%] border-2 border-[#A8A6AD] rounded-xl mx-auto my-6"></div>
        <h2 className="mx-auto font-bold text-lg mb-5">Your Posts:</h2>
        <div className="flex flex-row gap-4 mx-auto mb-10">
          <div className="grid grid-cols-3 gap-5">
            {posts.map((post) => (
              <div
                key={post.id}
                className="card flex flex-col bg-[#EBEBEB] p-5 drop-shadow-lg w-[250px] max-h-[250px] rounded-3xl overflow-auto"
              >
                <h2 className="text-sm font-semibold">{post.user}</h2>
                <p className="text-sm text-[#808080]">{post.time}</p>
                <p className="text-sm mt-2">{post.text}</p>
              </div>
            ))}
          </div>
        </div>
        {isModalOpen && <AddChallengeModal onClose={handleModalClose} />}
      </div>
    </div>
  );
};

export default ProfilePage;
