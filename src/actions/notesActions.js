import { createNote } from '../services/noteApi';
import { createAction } from 'promise-middleware-redux';

export const [
  newNote,
  NEW_NOTE,
  NEW_NOTE_PENDING
] = createAction('NEW_NOTE', createNote);
