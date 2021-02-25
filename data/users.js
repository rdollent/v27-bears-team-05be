const bcrypt = require("bcryptjs");

const users = [
    {
        username: "user1",
        email: "admin@email.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        username: "john2",
        email: "john@email.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        username: "jane3",
        email: "jane@email.com",
        password: bcrypt.hashSync("123456", 10),
    },
];

module.exports = users;
