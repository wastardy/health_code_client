import useStore from "../store/useChallengesStore";

const ChallengesSection = () => {
  const { challenges, completedChallenges, removeChallenge, toggleChallengeCompletion } = useStore();
  
  const progressPercentage = Math.round(
    (completedChallenges.length / challenges.length) * 100
  );

  const handleCheckboxChange = (id) => {
    toggleChallengeCompletion(id);
  };

  // const handleAddChallenge = () => {
  //   const newChallenge = {
  //     id: Date.now(),
  //     icon: "src/assets/logos/test6.png",
  //     title: "New Challenge",
  //     description: "A newly added challenge description",
  //   };
  //   addChallenge(newChallenge);
  // };

  const handleRemoveChallenge = (id) => {
    removeChallenge(id);
  };

  return (
    <div className="mx-auto p-6 rounded-lg overflow-y-hidden bg-[#7aa299b5]">
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
              <button
                className="ml-2 text-red-600"
                onClick={() => handleRemoveChallenge(challenge.id)}
              >
                <img src="../src/assets/logos/trash.png" alt="" className="h-7 w-7"/>
              </button>
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
      {/* <div className="flex justify-center mt-4">
        <button
          className="btn btn-primary"
          onClick={handleAddChallenge}
        >
          +
        </button>
      </div> */}
    </div>
  );
};

export default ChallengesSection;
