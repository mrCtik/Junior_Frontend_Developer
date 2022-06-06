const users = [
    {
      username: 'David',
      status: 'online',
      lastActivity: 10
    },
    {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    },
    {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }
  ];


function getUser(user, status = 'online') {
  const usersOnlineNames = users
    .filter(({ status }) => status === 'online')
    .map(({username}) => username);
    // alert(`Сейчас в онлайн ${usersOnlineNames.length ?
    //   `следующие пользователи: ${usersOnlineNames.join(', ')}` 
    //   : 'нет пользователей'}`);
    if (usersOnlineNames.length) {
      alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames.join(', ')}`);
    } else {
      alert('нет пользователей');

    }
    // const usersArray = [];
    // for (let i = 0; i < user.length; i += 1) {
    //     if((user[i].status) === 'online') {
    //         usersArray.push(users[i]);
    //     };
    // }
    // return usersArray;
}

const onlineUsers = getUser(users);
//console.log(`Сейчас в онлайн следующие пользователи: ${onlineUsers[0].username}, ${onlineUsers[1].username}`);

