const mongoose = require('mongoose')

const likeSchema = mongoose.Schema(
    {
        like : {
            type : Boolean,
            default: false
        },
        likedBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        },
        commentId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    }, {timestamps : true}
)

module.exports = mongoose.model('Like', likeSchema)