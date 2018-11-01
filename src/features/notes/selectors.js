export const isNoteSidebarOpen = (state) => state.router.location.state ? state.router.location.state.isNoteSidebarOpen : false;

export const getNoteById = (state, id) => state.notes.byId[id] || null;

export const getNoteIds = (state) => state.notes.ids || [];
