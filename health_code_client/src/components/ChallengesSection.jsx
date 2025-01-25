import { useState } from "react";

const challenges = [
  {
    id: 1,
    icon: "src/assets/logos/test1.png",
    title: "Sort of description",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
  },
  {
    id: 2,
    icon: "src/assets/logos/test2.png",
    title: "Sort of description",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
  },
  {
    id: 3,
    icon: "src/assets/logos/test3.png",
    title: "Sort of description",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
  },
  {
    id: 4,
    icon: "src/assets/logos/test4.png",
    title: "Sort of description",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
  },
  {
    id: 5,
    icon: "src/assets/logos/test5.png",
    title: "Sort of description",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
  },
];

const ChallengesSection = () => {
  const [completedChallenges, setCompletedChallenges] = useState([]);

  const handleCheckboxChange = (id) => {
    setCompletedChallenges((prev) =>
      prev.includes(id)
        ? prev.filter((challengeId) => challengeId !== id)
        : [...prev, id]
    );
  };

  const progressPercentage = Math.round(
    (completedChallenges.length / challenges.length) * 100
  );

  return (
    <div className="mx-auto bg-[#659c907d] p-6 rounded-lg overflow-y-hidden">
      <div className="flex h-20 w-[80%] mx-auto justify-center bg-[#797d89] rounded-t-3xl items-center">
        <h1 className="text-center text-3xl font-inria font-bold text-white">
          Current challenges
        </h1>
      </div>
      <div className="w-[80%] mx-auto p-4 bg-[#EBEBEB] rounded-b-3xl shadow-lg max-h-[420px] overflow-y-auto">
        <div className="space-y-4">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="card card-side bg-[#ffffff] shadow-md p-4 rounded-lg flex items-center"
            >
              <img
                src={challenge.icon}
                alt="challenge icon"
                className="h-12 w-12 mr-4"
              />
              <div className="flex-1">
                <h2 className="card-title text-lg font-inria text-neutral">
                  {challenge.title}
                </h2>
                <p className="text-sm text-[#525252] font-light">
                  {challenge.description}
                </p>
              </div>
              <input
                type="checkbox"
                className="checkbox checkbox-black border-1 border-black"
                checked={completedChallenges.includes(challenge.id)}
                onChange={() => handleCheckboxChange(challenge.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[80%] mx-auto p-4 bg-[#EBEBEB] rounded-3xl shadow-lg max-h-[540px] mt-4">
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div
            className="bg-[#7FC849E8] h-4 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-center text-sm text-neutral mt-2">
          {progressPercentage}% completed
        </p>
      </div>
    </div>
  );
};

export default ChallengesSection;
