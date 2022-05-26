export const selectFeedPosts = (reduxState) => reduxState.feed.posts;

export const getToken = (reduxState) => reduxState.auth.accessToken;

export const getProfile = (reduxState) => reduxState.auth.me;

export const isLoggedIn = (reduxState) => {
  if(reduxState.auth.accessToken) return true;
}