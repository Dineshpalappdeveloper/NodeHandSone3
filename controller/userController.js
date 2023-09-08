
const login = (req, res) => {
    console.log("login");
    res.send([
        {
            "name": "Dinesh",
            "password": "2552251"
        }, {
            "status": "login fine"
        }
    ])
}

const signUp = (req, res) => {
    res.send([
        {
            "name": "Dinesh",
            "password": "2552251"
        }, {
            "status": "signup fine"
        }
    ])
}
const logout = (req, res) => {
    res.send([
        {
            "name": "Dinesh",
            "password": "2552251"
        }, {
            "status": "logout fine"
        }
    ])
    console.log("login");
}
const forgot = (req, res) => {
    res.send([
        {
            "name": "Dinesh",
            "password": "2552251"
        }, {
            "status": "forgot fine"
        }
    ])
    console.log("login");
}
module.exports = { login, signUp, forgot, logout }