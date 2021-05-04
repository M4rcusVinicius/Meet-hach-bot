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
  const users = getUsers();
  storage.lastCheck = process(users)
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
    result[id] = user
  })
  console.log(result)
  return result
}

console.clear()
bot()
