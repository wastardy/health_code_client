const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-green-400 text-white">
      <div className="flex flex-row">
        <div className="w-12 h-12 bg-gray-200 rounded-md mr-4"></div>
        <input
          type="text"
          placeholder="Пошук"
          className="input input-bordered mr-4 w-[300px]"
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
