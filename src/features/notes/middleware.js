import { CREATE_NOTE, REMOVE_NOTE, FETCH_NOTES } from "./constants";
import { notesRef } from '../../config/firebase';
import { initialiseNotes } from "./actions";
import { createFirebaseResourceMiddleware } from "../firebase/firebaseResourceMiddleware";
import { getNoteIds } from "./selectors";

const notesApiMiddleware = createFirebaseResourceMiddleware({
    fetchAction: FETCH_NOTES,
    addAction: CREATE_NOTE,
    removeAction: REMOVE_NOTE,

    initialiseActionCreator: initialiseNotes,
    resourceIdsSelector: getNoteIds,
    resourcesByIdSelector: (state) => state.notes.byId,

    firebaseResoureRef: notesRef
});
  
export default notesApiMiddleware;
