import React from 'react';
import Content from './content';
import SingleCategoryContent from './content/single-category';
import Sidenav from './sidenav';
import CategoryManager from './category-manager';
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router';

const App = ({ match }) => (
    <div className="mih100p df fxdr">
        <Sidenav />
        <div className="fxg1">
            <div className="bg-primary phm pvm c-white fzl tac">
                <span>A dull pencil is better than the sharpest mind</span>
            </div>
            <Switch>
                <Route exact path="/" component={Content} />
                <Route exact path="/categories" component={CategoryManager} />
                <Route path="/categories/:id" component={SingleCategoryContent} />
                <Route render={() => (<div>Miss</div>)} />
            </Switch>
        </div>
    </div>
)

export default withRouter(App);
