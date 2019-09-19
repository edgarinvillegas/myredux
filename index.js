
function saveTeamNameApi(teamName) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if(Math.random() < 0.5)
            resolve(teamName + ' (R)')
         else
            reject()
      }, 2000)
   })
}

