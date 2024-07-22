const Like = require('../modules/likes.modules');
const Comment = require('../modules/comment.modules');

exports.likeComment = async (req, res) => {
    try {
        const { commentId, userId } = req.body;
        
        const existingLike = await Like.findOne({ commentId, likedBy: userId });

        if (existingLike) {
            existingLike.like = !existingLike.like;
            await existingLike.save();

            return res.status(200).json({
                success: true,
                data: existingLike,
                message: 'Like status updated successfully',
            });
        } else {
            const newLike = new Like({
                like: true,
                likedBy: userId,
                commentId,
            });
            await newLike.save();

            await Comment.findByIdAndUpdate(commentId, {
                $inc: { likes: 1 }
            });

            return res.status(201).json({
                success: true,
                data: newLike,
                message: 'Comment liked successfully',
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
