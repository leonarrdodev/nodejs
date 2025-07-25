const postModel = require("../models/postModel")

const adminController = {
    //GET /admin
    index: (re, res) => {
        const posts = postModel.getAllPosts()
        res.render('admin', {posts})
    },
    //GET /admin/create
    create: (req, res) =>{
        res.render('newPostForm')
    },

    //POST /admin/create
    createPost: (req, res) => {
        const {title, content} = req.body
        const post = postModel.createPost(title, content)

        postModel.savePost(post)    
        res.redirect('/admin')
    }
    //GET /admin/edit/:id

    //POST /admin/update/:id

    //POST /admin/delete/:id
}



module.exports = adminController