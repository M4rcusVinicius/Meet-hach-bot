// ================================================================================================= //
//                                              Storage                                              //
// ================================================================================================= //

var storage = {
  previous: [],
  prevMuted: []
};

// ================================================================================================= //
//                                             Listening                                             //
// ================================================================================================= //

function bot() {
  showUserList();
  const users = getUsers();
  const userName = users.map((user) => user.name);
  const mutedUser = users
    .filter((user) => user.muted && user.name)
    .map((user) => user.name);
  const result = prosses(userName, mutedUser);

  storage.previous = userName;
  storage.prevMuted = mutedUser;
}

function getUsers() {
  const userList = document.getElementsByClassName("KV1GEc");
  return Object.values(userList).map((user) => {
    const name = user.querySelector(".ZjFb7c").innerText;
    const muted = !!user.querySelector(".FTMc0c");
    return { name: name, muted: muted };
  });
}

function prosses(userName, mutedUser) {
  const arrive = userName.filter(
    (user) => storage.previous.indexOf(user) === -1
  );
  const leave = storage.previous.filter(
    (user) => userName.indexOf(user) === -1
  );
  const muted = mutedUser.filter(
    (user) => storage.prevMuted.indexOf(user) === -1
  );
  const unmuted = storage.prevMuted.filter(
    (user) => mutedUser.indexOf(user) === -1
  );
  console.log("Arrive:", arrive);
  console.log("Leave:", leave);
  console.log("Muted:", muted);
  console.log("Unmuted:", unmuted);
}

// ================================================================================================= //
//                                              Assets                                               //
// ================================================================================================= //

function showUserList() {
  const userList = document.querySelector(".NzPR9b > div");
  userList.click();
}
