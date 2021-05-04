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
    const [ result, display ] = process(users)
    console.log('Users to display:', display)
    console.log('Result:', result)
    db.prev = result
  }

  function getUsers() {
    const userList = document.getElementsByClassName("KV1GEc");
    if(userList.length === 0) { error("Can't find any user") }
    return Object.values(userList).map((user) => {
      const name = user.querySelector(".ZjFb7c").innerText;
      const muted = !!user.querySelector(".FTMc0c");
      return { name: name, muted: muted, att: [] };
    });
  }

  function process(users) {
    const result = new Object
    const display = new Array

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
      if(user.att.length > 0) { display.push(user) }
      result[id] = user
    })

    for (const [key, user] of Object.entries(db.prev)) {
      user.att.push('leave')
      console.log(user.name, ':', ...user.att)
      display.push(user)
      result[key] = user
    }

    return [ result, display ]
  }

  // ================================================================================================= //
  //                                               Error                                               //
  // ================================================================================================= //

  function error(msg, err) {
    console.warn('Error message:', msg)
    if(err) { console.warn(err) }
  }

  console.clear()
  bot()
  bot()
