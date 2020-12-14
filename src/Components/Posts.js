// import React, {Component} from 'react';
// import PostsService from "../Services/PostsService";
// import Post from "./Post";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     withRouter
// } from "react-router-dom";
// import FullPost from "./FullPost";
//
// class Posts extends Component {
//     PostsService = new PostsService()
//     state = {posts:[]}
//
//     async componentDidMount() {
//         const posts =  await this.PostsService.posts()
//       return this.setState({posts})
//     }
//
//     render() {
//         let {posts}= this.state
//         let {match:{url}}=this.props
//         return (
//             <div>
//                 {
//                     posts.map(value => <Post item={value} key={value.id}/> )
//                 }
//                 <hr/>
//                 <Switch>
//                     <Route path={url + '/:id'} render={(props) => {
//                         const {match:{params:{id}}} = props;
//                         return <FullPost postId={id} key={id}/>
//                     }}/>
//
//
//                 </Switch>
//                 <hr/>
//
//             </div>
//         );
//     }
// }
//
// export default withRouter(Posts);