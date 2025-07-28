const postModel = require("../models/postModel")
const { post } = require("../routes")

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
    },
    //GET /admin/edit/:id
    edit: (req, res) => {
        const id = req.params.id
        const post = postModel.getPostById(id)
        res.render('editPostForm', {post})
    },

    //POST /admin/update/:id
    update: (req, res) => {
        const id = req.params.id
        const {title, content} = req.body
        postModel.updatePost(id, {title, content})
        res.redirect('/admin')
    },

    //POST /admin/delete/:id
    delete: (req, res) => {
        const id = req.params.id
        postModel.deletePost(id)
        res.redirect('/admin')
    }
}



module.exports = adminController