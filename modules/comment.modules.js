const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema(
    {
        comment : {
            type : String,
            required : true,
            maxlength : 200,
        },
        image : {
            type : String,
            required : true,
        },
        author : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required : true,
        },
        like : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    }, {timestamps: true}
)

module.exports = mongoose.model('Comment', commentsSchema)