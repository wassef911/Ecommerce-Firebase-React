const properDocTitle = (location) => {
  let pathName = location;
  if (pathName === "/") pathName = "home";

  let locationName = pathName.split("/").join(" ");
  locationName = locationName.split(" ");

  return locationName[locationName.length - 1].toUpperCase();
};

export { properDocTitle };
