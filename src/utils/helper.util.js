function stringAvatar(name) {
  return {
    // sx: {
    //   bgcolor: stringToColor(name),
    // },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export { stringAvatar };
