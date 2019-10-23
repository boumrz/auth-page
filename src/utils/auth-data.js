export const authData = {
  checkToken() {
    //parse Json, check expire (> Date.now()); if <, reset token from localStorage - this.clearToken()
    const returnObj = JSON.parse(localStorage.getItem('token'));
    const returnTime = returnObj.expires;

    if ((returnTime - Date.now()) <= 0) {
      localStorage.removeItem('token');

      return false;
    }

    return true;
  },
};
