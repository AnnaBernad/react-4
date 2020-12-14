import React, {Component} from 'react';
import CommentsService from "../Services/PostsService";
import Comments from "./Comments";
import Comment from "./Comment";

class FullComment extends Component {
    state ={comment:{}}
    CommentsService = new CommentsService()

  async  componentDidMount() {
        const {comId}=this.props
       const comment = await this.CommentsService.comment(comId)
      this.setState({comment})


    }

    render() {
        const {comment}=this.props
        const {comId}=this.props
        return (
            <div>
                {comment && <div>{comment.id} {comment.title} {comment.body}</div>}
            </div>
        );
    }
}

export default FullComment;