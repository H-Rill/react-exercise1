import { posts as data } from "../data/posts";
import { generateId } from "../utils";

//private
let posts = [...data];

export function getPosts() {
  //get all posts
  return  [...posts];
}

export function getPostsByUser(userId) {
  //get all posts by userId
  return posts.filter(posts => posts.userId === userId)
}


export function getPostById(id) {
  //get a single post by id
  return posts.filter(posts => posts.id === id)
}

export function addPost(post) {
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.
  const postId = generateId(posts);
  posts.push({ ...post,  id: postId });
}

export function updatePostTitle(id, title) {
  //update post title
  const updatedPosts = posts.map((posts) => {
    if(posts.id === id){
      return{
        ...posts,
        title
      };
    }
    return posts
  })
  return updatedPosts
}

export function updatePostBody(id, body) {
  //update post body
  const updatePostBody = posts.map((posts) => {
    if(posts.id === id){
      return{
        ...posts,
        body
      };
    }
    return posts;
  })
  return updatePostBody
}

export function updatePost(id, post) {
  const updatedPost = posts.map((posts) => {
   if(posts.id === id){
     return{
       ...posts,
       ...post
     };
   }
   return post;
 })
 return updatedPost;
}

export function deletePostById(id) {
  //delete post by id
  return posts = posts.filter(posts => posts.id !== id)
}

export function deletePostsByUserId(userId) {
  //delete all posts of a user by given userId
  return posts = posts.filter(posts => posts.userId !== userId)
}