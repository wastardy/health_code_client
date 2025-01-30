import { useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faShare } from "@fortawesome/free-solid-svg-icons";

export const usePostStore = create(
  persist(
    (set) => ({
      posts: [],
      likedPosts: {},
      addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
      toggleLike: (postId) =>
        set((state) => {
          const isLiked = state.likedPosts[postId]?.liked;
          const newLikeCount = isLiked
            ? state.likedPosts[postId].count - 1
            : (state.likedPosts[postId]?.count || 0) + 1;
          return {
            likedPosts: {
              ...state.likedPosts,
              [postId]: { liked: !isLiked, count: newLikeCount },
            },
          };
        }),
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
  const likedPosts = usePostStore((state) => state.likedPosts);
  const toggleLike = usePostStore((state) => state.toggleLike);

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
        user: "Anthony Edwards",
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
              <div className="flex justify-between mt-5">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`h-6 w-6 cursor-pointer ${
                      likedPosts[post.id]?.liked
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => toggleLike(post.id)}
                  />
                  <span className="ml-2 text-sm">
                    {likedPosts[post.id]?.count || 0}{" "}
                    {/* Display the like count */}
                  </span>
                </div>
                <FontAwesomeIcon
                  icon={faComment}
                  className="h-6 w-6 cursor-pointer text-gray-500"
                />
                <FontAwesomeIcon
                  icon={faShare}
                  className="h-6 w-6 cursor-pointer text-gray-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
