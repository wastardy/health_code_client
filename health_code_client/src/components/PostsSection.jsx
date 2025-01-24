const PostsSection = () => {
  return (
    <div className="p-4 bg-[#659c907d] rounded-lg flex flex-col gap-4">
      <div className="card flex flex-row bg-[#EBEBEB] p-3 drop-shadow-lg items-center gap-10">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden ml-5 border-2 border-[#808080]">
          <img
            src="src/assets/images/profilePic.png"
            alt="profile"
            className="object-cover w-full h-full"
          />
        </div>
        <input
          type="text"
          placeholder="What is happening?"
          className="input rounded-full border-2 border-[#808080] drop-shadow-lg w-[300px]"
        />
        <button
          type="submit"
          className="rounded-full border-2 border-[#808080] drop-shadow-lg p-3 bg-[#9a9ba1] text-white"
        >
          Post
        </button>
      </div>

      <div className="card flex flex-row bg-[#EBEBEB] p-5 drop-shadow-lg items-center gap-10">
        <div className="flex flex-col">
          <div className="flex flex-row gap-5">
            <div className="w-[60px] h-[60px] rounded-full ml-5 border-2 border-[#808080]">
              <img
                src="src/assets/images/profilePic.png"
                alt="profile"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col my-auto">
              <h2 className="text-xl">Viktor Mandziak</h2>
              <p className="text-xs text-[#808080]">14 min ago</p>
            </div>
          </div>
          <div className="mx-auto mt-3">
            <p className="text-lg">Morning workout{">>>"}</p>
            <img
              src="src/assets/images/test.png"
              alt="Photo"
              className="drop-shadow-lg mt-3"
            />
          </div>
          <div className="flex justify-between mt-5">
            <img
              src="src/assets/logos/heart.png"
              alt="like"
              className="h-6 w-6"
            />
            <img
              src="src/assets/logos/chat.png"
              alt="comment"
              className="h-6 w-6"
            />
            <img
              src="src/assets/logos/share.png"
              alt="shake"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>
      <div className="card flex flex-row bg-[#EBEBEB] p-5 drop-shadow-lg items-center gap-10">
        <div className="flex flex-col">
          <div className="flex flex-row gap-5">
            <div className="w-[60px] h-[60px] rounded-full ml-5 border-2 border-[#808080]">
              <img
                src="src/assets/images/profilePic.png"
                alt="profile"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col my-auto">
              <h2 className="text-xl">Viktor Mandziak</h2>
              <p className="text-xs text-[#808080]">14 min ago</p>
            </div>
          </div>
          <div className="mx-auto mt-3">
            <p className="text-lg">Morning workout{">>>"}</p>
            <img
              src="src/assets/images/test.png"
              alt="Photo"
              className="drop-shadow-lg mt-3"
            />
          </div>
          <div className="flex justify-between mt-5">
            <img
              src="src/assets/logos/heart.png"
              alt="like"
              className="h-6 w-6"
            />
            <img
              src="src/assets/logos/chat.png"
              alt="comment"
              className="h-6 w-6"
            />
            <img
              src="src/assets/logos/share.png"
              alt="shake"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
