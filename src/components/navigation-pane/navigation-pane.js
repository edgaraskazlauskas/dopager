import React from 'react';
import { Pane, Heading } from 'evergreen-ui';
import TodosLink from './open-todos-container';
import CategoriesLink from './open-categories-container';
import ToggleTodosViewButton from './toggle-todos-view';

const NavigationPane = () => (
	<React.Fragment>
		<Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
			<Pane padding={16} borderBottom="muted">
				<Heading size={600}>DoPager</Heading>
			</Pane>
			<Pane display="flex" padding={8}>
				<TodosLink />
				<CategoriesLink />
				<ToggleTodosViewButton />
			</Pane>
		</Pane>
	</React.Fragment>
);

export default NavigationPane;
