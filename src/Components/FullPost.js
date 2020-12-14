// import React, {Component} from 'react';
// import PostsService from "../Services/PostsService";
// import Posts from "./Posts";
//
// class FullPost extends Component {
//     state ={post:{}}
//     PostsService = new PostsService()
//
//   async  componentDidMount() {
//         const {postId}=this.props
//        const post = await this.PostsService.post(postId)
//       this.setState({post})
//
//
//     }
//
//     render() {
//         const {post}=this.props
//         const {postId}=this.props
//         return (
//             <div>
//                 {post && <div>{post.id} {post.title} {post.body}</div>}
//             </div>
//         );
//     }
// }
//
// export default FullPost;