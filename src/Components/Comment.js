import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
    withRouter,
} from "react-router-dom";
import FullComment from "./FullComment";

class Comment extends Component {
    render() {
        const {item, match:{url}}=this.props
        return (
            <div>
                {item.id} {item.body}  <Link to={url + '/' +item.id}>show details</Link>
            </div>
        );
    }
}

export default withRouter(Comment);