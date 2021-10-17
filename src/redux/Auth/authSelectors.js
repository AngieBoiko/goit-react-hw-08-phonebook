const isLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserToken = state => state.auth.token;
const isFetchingUser = state => state.auth.isFetchingUser;

const authSelectors = {
  isLoggedIn,
  getUserName,
  getUserToken,
  isFetchingUser,
};
export default authSelectors;
