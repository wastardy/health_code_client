const ChallengesSection = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg flex flex-col gap-4 text-center">
      <div className="card bg-white p-4">Актуальні челленджі</div>
      {[...Array(10)].map((_, index) => (
        <div key={index} className="card bg-white p-4 h-[70px]">
          №{index}
        </div>
      ))}
    </div>
  );
};

export default ChallengesSection;
