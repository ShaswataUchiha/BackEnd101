const post = require('../modules/comment.modules')

exports.createComment =  async (req, res) => {

    try {
        const {comment, image, author} = req.body

        const newComment = await post.create({comment, image, author})

        res.status(201).json({
            success: true,
            data: newComment,
            message: 'Comment created successfully'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            data : "did not create", 
            message : error.message
        })
    }
    
}