const Header = () => {
  const headerIcons = [
    { id: 1, src: "src/assets/svg/interest-facts.svg" },
    { id: 2, src: "src/assets/svg/food.svg" },
    { id: 3, src: "src/assets/svg/sleep-and-water.svg" },
    { id: 4, src: "src/assets/svg/trainings.svg" },
    { id: 5, src: "src/assets/svg/routine.svg" },
  ];

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-[#797d89] text-white rounded-br-lg">
      <div className="flex flex-row">
        <div className="w-12 h-12 rounded-md mr-4">
          <img
            src="src/assets/logos/main-logo.png"
            alt="GitHub"
            className="h-full w-full"
          />
        </div>
        <h1 className="text-[30px] items-center">HealthCode</h1>
        <input
          type="text"
          placeholder="Search"
          className="input rounded-full mx-8 w-[400px]"
        />
      </div>
      <div className="flex gap-2">
        {headerIcons.map(({ id, src }) => (
          <img key={id} src={src} alt="" className="h-12 w-10" />
        ))}
      </div>
    </div>
  );
};

export default Header;
