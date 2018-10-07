import React from 'react';
import Content from './content';
import SingleCategoryContent from './content/single-category';
import NavigationPane from './navigation-pane';
import CategoryManager from './category-manager';
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router';
import Login from './login';
import { Pane } from 'evergreen-ui';

const App = ({ match }) => (
    <Pane minHeight="100%" display="flex" flexDirection="column">
        <NavigationPane />
        <Pane display="flex" flexGrow={1}>
            <Switch>
                <Route exact path="/" component={Content} />
                <Route exact path="/categories" component={CategoryManager} />
                <Route path="/categories/:id" component={SingleCategoryContent} />
                <Route render={() => (<div>Miss</div>)} />
            </Switch>
            <Login />
        </Pane>
    </Pane>
)

export default withRouter(App);
