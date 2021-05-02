// ================================================================================================= //
//                                              Storage                                              //
// ================================================================================================= //

var storage = {
  previous: []
};

// ================================================================================================= //
//                                             Listening                                             //
// ================================================================================================= //

function bot() {
  showUserList();
  const users = getUsers();
  const result = prosses(users);
  storage.previous = users.map((user) => user.name);
}

function getUsers() {
  const userList = document.getElementsByClassName("KV1GEc");
  return Object.values(userList).map((user) => {
    const name = user.querySelector(".ZjFb7c").innerText;
    const muted = !!user.querySelector(".FTMc0c");
    return { name: name, muted: muted };
  });
}

function prosses(users) {
  const arrive = users.filter(
    (user) => storage.previous.indexOf(user.name) === -1
  );
  console.log("Arrive:", arrive);
}

// ================================================================================================= //
//                                              Assets                                               //
// ================================================================================================= //

function showUserList() {
  const userList = document.querySelector(".NzPR9b > div");
  userList.click();
}
