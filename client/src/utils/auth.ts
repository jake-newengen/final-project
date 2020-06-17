const isAuthenticated = (): boolean => {
  const token = window.localStorage.getItem("s-tk");
  return token ? true : false;
};

export { isAuthenticated };
