const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const PostController = require('../controllers/posts');


// get post by status
router.get('/accept', checkAuth, PostController.posts_get_post_accept);

router.get('/reject', checkAuth, PostController.posts_get_post_reject);

router.get('/waiting', checkAuth, PostController.posts_get_post_waiting);
//

router.get('/', PostController.posts_get_all);

router.post('/', checkAuth, PostController.posts_create_post);

router.get('/:postId', PostController.posts_get_post);

router.patch('/:postId', checkAuth, PostController.posts_update_post);

router.delete('/:postId', checkAuth, PostController.posts_delete_post);

//access post
router.patch('/accept/:postId', checkAuth, PostController.accept_post);

//reject post
router.patch('/reject/:postId', checkAuth, PostController.reject_post);


// Filter

router.get('/user/:userId', checkAuth, PostController.posts_get_post_by_user);

router.get('/category/:categoryId', PostController.posts_get_post_by_category);

router.get('/classify/:classifyId', PostController.posts_get_post_by_classify);

router.get('/producer/:producerId', PostController.posts_get_post_by_producer);


module.exports = router;