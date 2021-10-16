const isLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserToken = state => state.auth.token;

const authSelectors = {
  isLoggedIn,
  getUserName,
  getUserToken,
};
export default authSelectors;
