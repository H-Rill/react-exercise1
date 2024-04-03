//Call all functions inside services and log updated value/s
import * as commentService from "./services/comments";
import * as postService from "./services/posts";
import { updateUser, getAllUsers } from "./services/users";

// updateUser(1, { email: "roger@77.com" });
// console.log(getAllUsers());

// commentService.addComment({postId: 1, name: "harries" , email: "asdasd@gmail.com", body: "asdasdasd"})
// console.log(commentService.getAllComment())

// console.log(commentService.getCommentById(501))
// console.log(commentService.getCommentsByPostId(1))
// console.log(commentService.updateCommentBody(501, "Rill"))
// console.log(commentService.deleteCommentById(501))

// post
console.log(postService.getPostsByUser(2));
console.log(postService.getPostById(1));

const newPost = {
    userId: 1,
    title: "asdasdasd",
    body: "asdasdf asjdhfg asjdkf asdhjf"
  };

  postService.addPost(newPost)
console.log(postService.getPosts())

console.log(postService.updatePostTitle(101, "Harries"))

console.log(postService.updatePostBody(101, "Rill"))

const updatedPostData = {
    title: "Jen",
    body: "uh"
  };

  console.log(postService.updatePost(101, updatedPostData))

  console.log(postService.deletePostById(1))
  console.log(postService.deletePostsByUserId(1))