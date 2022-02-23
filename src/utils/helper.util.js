function stringAvatar(name) {
  //  * If user name is single word
  if (name.indexOf(" ") === -1) {
    return { children: `${name[0]}` };
  }

  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export { stringAvatar };
