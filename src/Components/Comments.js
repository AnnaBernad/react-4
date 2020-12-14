import React, {Component} from 'react';
import CommentsService from "./CommentsService";
import Comment from "./Comment";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import FullComment from "./FullComment";

class Comments extends Component {
    CommentsService = new CommentsService()
    state = {comments:[]}

    async componentDidMount() {
        const comments =  await this.CommentsService.comments()
      return this.setState({comments})
    }

    render() {
        let {comments}= this.state
        let {match:{url}}=this.props
        return (
            <div>
                {
                    comments.map(value => <Comment item={value} key={value.id}/> )
                }
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                        const {match:{params:{id}}} = props;
                        return <FullComment comId={id} key={id}/>
                    }}/>


                </Switch>
                <hr/>

            </div>
        );
    }
}

export default withRouter(Comments);