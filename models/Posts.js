
const Sequelize = require("sequelize")
const sequelize = require("../config/db")

const posts = sequelize.define("posts",{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    postText:{
        type: Sequelize.STRING,
        allowNull: false
    },
    username:{
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = posts