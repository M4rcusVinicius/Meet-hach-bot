// ================================================================================================= //
//                                              Storage                                              //
// ================================================================================================= //

var db = {
  history: [],
  lastCheck: {}
} 

// ================================================================================================= //
//                                             Listening                                             //
// ================================================================================================= //

function bot() {
  showUserList();
  const users = getUsers();
  process(users)
}

function getUsers() {
  const userList = document.getElementsByClassName("KV1GEc");
  return Object.values(userList).map((user) => {
    const name = user.querySelector(".ZjFb7c").innerText;
    const muted = !!user.querySelector(".FTMc0c");
    return { name: name, muted: muted };
  });
}

function process(users) {
  const result = new Object
  users.map(user => {
    const id = user.name.replace(/[^\w\s]/gi, '').replace(/\s/g, '-')
    console.log('ID:', id)
  })
}

console.clear()
bot()
