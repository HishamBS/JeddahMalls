const mongoose = require("mongoose");
const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require('admin-bro-mongoose')
AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
    databases: [mongoose],
    rootPath: '/admin',

  })

router=AdminBroExpress.buildRouter(adminBro);

module.exports = router