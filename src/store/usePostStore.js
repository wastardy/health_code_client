import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePostStore = create(
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

export default usePostStore;
