// ================================================================================================= //
//                                              Storage                                              //
// ================================================================================================= //

var db = {
  history: [],
  prev: new Object,
} 

// ================================================================================================= //
//                                             Listening                                             //
// ================================================================================================= //

function bot() {
  const users = getUsers();
  db.prev = process(users)
}

function getUsers() {
  const userList = document.getElementsByClassName("KV1GEc");
  return Object.values(userList).map((user) => {
    const name = user.querySelector(".ZjFb7c").innerText;
    const muted = !!user.querySelector(".FTMc0c");
    return { name: name, muted: muted, att: [] };
  });
}

function process(users) {
  const result = new Object
  users.map(user => {
    const id = user.name.replace(/[^\w\s]/gi, '').replace(/\s/g, '-')
    if (!(id in db.prev)) {
      { !(user.muted) && user.att.push('unmuted') }
      user.att.push('new')
    }
    else if(db.prev[id].muted !== user.muted) {
      if(user.muted) { user.att.push('muted') }
      else { user.att.push('unmuted') }
    };
    delete db.prev[id]
    console.log(user.name, ':', ...user.att)
    result[id] = user
  })

  console.log(db.prev)
  return result
}

console.clear()
bot()
bot()
