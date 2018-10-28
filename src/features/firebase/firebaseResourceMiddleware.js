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
        
                const { ids: firebaseResourceIds, byId: firebaseResourcesById } = Object.keys(storedResources)
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

                const resourceIds = resourceIdsSelector(state);
                const resourcesById = resourcesByIdSelector(state);

                // get firebase resources that have not been stored locally
                const filteredFirebaseIds = firebaseResourceIds.filter((id) => resourceIds.indexOf(id) === -1);
                const filteredFirebaseById = filteredFirebaseIds.reduce((previousById, currentId) => ({
                    ...previousById,
                    [currentId]: firebaseResourcesById[currentId]
                }), {});

                // get recently created resources (that are not stored in firebase)
                const newResourceIds = resourceIds.filter((id) => filteredFirebaseIds.indexOf(id) === -1);
                const newResourcesById = newResourceIds.reduce((previousById, currentId) => ({
                    ...previousById,
                    [currentId]: resourcesById[currentId]
                }), {});

                // store new resources
                newResourceIds.forEach((item) => {
                    firebaseResoureRef
                        .child(state.auth.user.uid)
                        .child(item)
                        .set(newResourcesById[item]);
                });

                // stored todos, local new todos, local updated todos
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