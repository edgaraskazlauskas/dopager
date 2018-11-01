import { CREATE_NOTE, REMOVE_NOTE, FETCH_NOTES } from "./constants";
import { notesRef } from '../../config/firebase';
import { initialiseNotes } from "./actions";
import { createFirebaseResourceMiddleware } from "../firebase/firebaseResourceMiddleware";

const notesApiMiddleware = createFirebaseResourceMiddleware({
    fetchAction: FETCH_NOTES,
    addAction: CREATE_NOTE,
    removeAction: REMOVE_NOTE,

    initialiseActionCreator: initialiseNotes,
    resourceIdsSelector: (state) => state.notes.notes.ids,
    resourcesByIdSelector: (state) => state.notes.notes.byId,

    firebaseResoureRef: notesRef
});
  
export default notesApiMiddleware;
