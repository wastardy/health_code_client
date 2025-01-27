import { useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePostStore = create(
  persist(
    (set) => ({
      posts: [],
      addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
    }),
    {
      name: "post-storage",
    }
  )
);

const PostsSection = () => {
  const [inputText, setInputText] = useState("");
  const addPost = usePostStore((state) => state.addPost);
  const posts = usePostStore((state) => state.posts);

  const handlePost = () => {
    if (inputText.trim() !== "") {
      const now = new Date();
      const formattedDate = now
        .toLocaleDateString("eng")
        .split(".")
        .map((num) => num.padStart(2, "0"))
        .join(".");
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      
      const newPost = {
        id: Date.now(),
        user: "Current User",
        time: `${formattedDate} ${formattedTime}`,
        text: inputText,
      };
      addPost(newPost);
      setInputText("");
    }
  };

  return (
    <div>
      <div className="p-4 rounded-lg flex flex-col gap-4">
        <div className="flex flex-row bg-[#7aa299b5] p-5 drop-shadow-lg items-center gap-10 fixed z-50 w-[537px] rounded-3xl">
          <input
            type="text"
            placeholder="What is happening?"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="input rounded-full border-2 border-[#808080] drop-shadow-lg w-[400px] p-2"
          />
          <button
            type="submit"
            onClick={handlePost}
            className="rounded-full border-2 border-[#808080] drop-shadow-lg p-3 bg-[#9a9ba1] text-white"
          >
            Post
          </button>
        </div>

        <div className="flex flex-col mt-[100px] gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="card flex flex-col bg-[#EBEBEB] p-4 drop-shadow-lg max-w-[537px] rounded-3xl"
            >
              <h2 className="text-xl font-semibold">{post.user}</h2>
              <p className="text-xs text-[#808080]">{post.time}</p>
              <p className="text-lg mt-2">{post.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
