export const defaultNormalisedObjectsState = {
    ids: [],
    byId: {}
};

export const removeById = (state = defaultNormalisedObjectsState, action) => {
    // eslint-disable-next-line
    const { [action.payload.id]: _omit, ...byId } = state.byId;

    return {
        ids: state.ids.filter((id) => id !== action.payload.id),
        byId
    };
};

export const addWithId = (state = defaultNormalisedObjectsState, action) => ({
    ...state,
    ids: [
        ...state.ids,
        action.payload.id
    ],
    byId: {
        ...state.byId,
        [action.payload.id]: action.payload
    }
});

export const initialiseNormalised = (state = defaultNormalisedObjectsState, action) => ({
    ...state,
    ids: action.payload.ids,
    byId: action.payload.byId
});

export const updateById = (state = defaultNormalisedObjectsState, action) => {
    const { id } = action.payload;

    return {
        ...state,
        byId: {
            ...state.byId,
            [id]: {
                ...state.byId[id],
                ...action.payload
            }
        }
    };
};
