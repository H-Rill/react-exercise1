import { comments as data } from "../data/comments";
import { generateId } from "../utils";

//private
let comments = [...data];

export function getCommentById(id) {
  //get comment by id
  return comments.filter(comments => comments.id === id)
}

export function getCommentsByPostId(postId) {
  //get comments by post id
  return comments.filter(comments =>  comments.postId === postId)
}

export function updateCommentBody(id, body) {
  //update comment body
  const updatedComments = comments.map((comment) => {
    if(comment.id === id){
      return{
        ...comment,
        body
      };
    }
    return comment;
  })
  return updatedComments
}

export function deleteCommentById(id) {
  //delete comment by id
  return comments = comments.filter(comment => comment.id !== id)
   
}

export function addComment(comment) {
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
  const commentId = generateId(comments);
  comments.push({ ...comment,  id: commentId });
}

export function getAllComment(){
  return [...comments]
}