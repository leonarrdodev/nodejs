const postModel = require("../models/postModel")

const adminController = {
    //GET /admin
    index: (re, res) => {
        const posts = postModel.getAllPosts()
        res.render('admin', {posts})
    }
    //GET /admin/create

    //POST /admin/create

    //GET /admin/edit/:id

    //POST /admin/update/:id

    //POST /admin/delete/:id
}



module.exports = adminController