
const requiredUser = require('../middleWare/requireUser')
const PostController = require('../Controllers/postController');
const router = require('express').Router();

// router.post('/',requiredUser,PostController.createPostController);
router.post('/like',requiredUser,PostController.likeAndUnlikePost);
router.put('/',requiredUser,PostController.updatePostController);
router.delete('/',requiredUser,PostController.deletePost)
router.get('/all',requiredUser,PostController.getallPost)
module.exports = router;