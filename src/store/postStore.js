import { create } from "zustand";

const usePostStore = create((set) => ({
  posts: [],
  createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  deletePost: (id) =>
    set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
  setPosts: (posts) => set({ posts }),
  setLike: (postId, uid) =>
    set((state) => ({
      posts: state.posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes: post.likes.includes(uid)
              ? post.likes.filter((like) => like !== uid)
              : [...post.likes, uid],
          };
        }
        return post;
      }),
    })),
  addComment: (postId, comment) =>
    set((state) => ({
      posts: state.posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, comment],
          };
        }
        return post;
      }),
    })),
}));

export default usePostStore;
