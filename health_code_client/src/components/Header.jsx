const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-[#797d89] text-white">
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
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-8 h-8 bg-gray-200 rounded-md"></div>
        ))}
      </div>
    </div>
  );
};

export default Header;
