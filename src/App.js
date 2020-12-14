import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Comments from "./Components/Comments";


class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <ul>
                    {/*<li>*/}
                    {/*    <Link to={'/posts'}>to posts page</Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link to={'/comments'}>to comments page</Link>
                    </li>
                </ul>
                <div>
                <Switch>
                {/*<Route path={'/posts'} render={(props)=> { return <Posts/>*/}
                {/*}}>*/}
                {/*</Route>*/}
                    <Route path={'/comments'} render={(props)=>{return <Comments/>}}>
                    </Route>
                </Switch>
                </div>

            </div>
            </Router>
        );

    }
}

export default App;
