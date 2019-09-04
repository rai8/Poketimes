const initState = {
  posts: [
    { id: "1", title: "Brida", body: "seven minutes in hell" },
    {
      id: "2",
      title: "We should all be feminists",
      body: "ndhvhj gd vdgfjdsj uyg cby l"
    },
    {
      id: "3",
      title: "Savannah",
      body: "manginisefb jcjzbmabcshv u uscfjgavbxhvovn"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });

    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
