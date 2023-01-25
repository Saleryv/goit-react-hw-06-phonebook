import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], 
  filter: '',
 },
  reducers: {
    addContact:{
        reducer(state, action) {
        state.items.unshift(action.payload);
      },
        prepare(newNumber) {
        return {payload: {...newNumber, id:nanoid()}}
        },
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    contactDelete: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    }
  },
});

export const { addContact, setFilter, contactDelete } = contactsSlice.actions;

export default contactsSlice.reducer;


// reducers: {
//     addTask: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             text,
//             id: nanoid(),
//             completed: false,
//           },
//         };
//       },
//     },
