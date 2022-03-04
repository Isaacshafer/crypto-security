const bcryptjs = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username){
          console.log(users[i])
            const realPassword = bcryptjs.compareSync(password, users[i].password)
            if(realPassword){
              let returnedUser = {...users[i]}
              delete returnedUser.passwordHash
              res.status(200).send(returnedUser)
            }else{
              res.status(400).send("User not found.")
            }
        }
      }
      
    },
    register: (req, res) => {
        console.log('Registering User')
        const{password} = req.body
        const passwordHash = bcryptjs.hashSync(password)
        req.body.password = passwordHash
        let registerObj = req.body
        let secureObj = {...registerObj}
        delete secureObj.password
        // console.log(registerObj)
        users.push(registerObj)
        // console.log(secureObj)
        
        res.status(200).send(secureObj)
    }
}
