import React from 'react';
import Content from './index';
import { withRouter } from 'react-router';

const RoutedSingleCategoryContent = (props) => (
    <Content categoryId={props.match.params.id} />
);

export default withRouter(RoutedSingleCategoryContent);
