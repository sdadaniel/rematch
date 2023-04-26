export const auth = {
  state: true, // initial state
  reducers: {
    // handle state changes with pure functions
    changeAuth(state, payload) {
      return !state;
    },
    login(state, payload) {
      return false;
    },
    logout(state, payload) {
      return false;
    },
  },
};
