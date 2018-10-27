import { isAuthenticated } from "../auth/selectors";

export const createFirebaseResourceMiddleware = ({
    fetchAction,
    addAction,
    updateAction,
    removeAction,
    initialiseActionCreator,

    resourceIdsSelector,
    resourcesByIdSelector,

    firebaseResoureRef,
}) => (store) => (next) => (action) => {
    const state = store.getState();

    if (!isAuthenticated(state)) {
        return next(action);
    }

    switch(action.type) {
        case fetchAction:
            firebaseResoureRef.child(state.auth.user.uid).once("value", (snapshot) => {
                const storedResources = snapshot.val();
        
                if (!storedResources) {
                    return;
                }
        
                const { ids, byId } = Object.keys(storedResources)
                    .reduce((prev, curr) => ({
                        ids: [
                            ...prev.ids,
                            curr
                        ],
                        byId: {
                            ...prev.byId,
                            [curr]: storedResources[curr]
                        }
                    }), { ids: [], byId: {} });

                // filter resources that have already been stored locally
                const filteredFirebaseIds = ids.filter((id) => state.todos.ids.indexOf(id) === -1);
                const filteredFirebaseById = filteredFirebaseIds.reduce((previousById, currentId) => ({
                    ...previousById,
                    [currentId]: byId[currentId]
                }), {});

                const resourceIds = resourceIdsSelector(state);
                const resourcesById = resourcesByIdSelector(state);
                // get recently created resources
                const newResourceIds = resourceIds.filter((id) => ids.indexOf(id) === -1);
                const newResourcesById = newResourceIds.reduce((previousById, currentId) => ({
                    ...previousById,
                    [currentId]: resourcesById[currentId]
                }), {});

                newResourceIds.forEach((item) => {
                    firebaseResoureRef
                        .child(state.auth.user.uid)
                        .child(item)
                        .set(newResourcesById[item]);
                });

                const allIds = [ ...resourceIdsSelector(state), ...filteredFirebaseIds ];
                const allById = { ...resourcesByIdSelector(state), ...filteredFirebaseById };

                store.dispatch(initialiseActionCreator({
                    ids: allIds,
                    byId: allById
                }));
            });

            break;
        case addAction:
            firebaseResoureRef
                .child(state.auth.user.uid)
                .child(action.payload.id)
                .set(action.payload);

            break;
        case removeAction:
            firebaseResoureRef
                .child(state.auth.user.uid)
                .child(action.payload.id)
                .remove();

            break;
        case updateAction:
            firebaseResoureRef
                .child(state.auth.user.uid)
                .child(action.payload.id)
                .update(action.payload);

            break;
        default:
            break;
    }

    return next(action);
};