const promise=function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { username: 'mahesh', email: 'kammarimahesh1@gmail.com' },
          { username: 'veeresh', email: 'veeresh1@gmail.com' },
        ]);
      }, 1000);
    });
  }
  
  
  //const promise = getUsers();
  promise().then(get=>{
    console.log(get)
  });