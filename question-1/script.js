/*
eslint-disable
*/
const checkLogin = () => {
  if (localStorage.getItem('logged-in') === 'true') return true;
  return false;
};

