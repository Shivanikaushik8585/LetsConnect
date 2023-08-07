const Post = require("../models/Post");
const User = require("../models/User");
const{success,error}= require('../Utils/responseWrapper');

 const likeAndUnlikePost = async (req,res) =>{
    try{
const {postId} =req.body;
const curUserId = req._id;
const post = await Post.findById(postId).populate('owner');
if(!post){
    return res.send(error(404,'post not found'));

}
if(post.likes.includes(curUserId)){
    const index= post.likes.indexOf(curUserId);
    post.likes.splice(index,1);
}else{
    post.likes.push(curUserId);
}
await post.save();
return res.send(success(200,'post is liked'));
    }catch(error){
        return res.send(error(500,e.message))
    }
 }
 const  updatePostController = async (req,res)=>{
    try{
        const {postId,caption}= req.body;
        const curUserId = req._id;
        const post = await Post.findById(postId);
        if(!post){
            return res.send(error(404,'post not found'));
        }
        if(post.owner.toString()!==curUserId){
            return res.send(error(403,"only owner can update their posts"));
        }
        if(caption){
            post.caption = caption;
        }
        await post.save();
        return res.send(success(200,{post}));

    }catch(e){
        return res.send(error(500,e.message))
    }
 }
 const deletePost = async (req,res) =>{
    try {
        const { postId } = req.body;
        const curUserId = req._id;

        const post = await Post.findById(postId);
        const curUser = await User.findById(curUserId);
        if (!post) {
            return res.send(error(404, "Post not found"));
        }

        if (post.owner.toString() !== curUserId) {
            return res.send(error(403, "Only owners can delete their posts"));
        }

        const index = curUser.posts.indexOf(postId);
        curUser.posts.splice(index, 1);
        await curUser.save();
        await post.remove();

        return res.send(success(200, "post deleted successfully"));
    } catch (e) {
        return res.send(error(500, e.message));
    }
 }
 const getallPost = async(req,res) =>{
    console.log("all post");
 }
 module.exports = {
    getallPost,
    
    deletePost,
    updatePostController,
    likeAndUnlikePost
 }