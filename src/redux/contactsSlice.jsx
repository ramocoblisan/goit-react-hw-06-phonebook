import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = {
    contacts: [],
  };
  
  const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
      addContacts: {
        reducer(state, action) {
          state.contacts.push(action.payload);
        },
    },
      deleteContacts(state, action) {
        state.contacts = state.contacts.filter(item => item.id !== action.payload);
      },
    },
  });
  
  export const { addContacts, deleteContacts } = contactsSlice.actions;
  export const contactsReducer = contactsSlice.reducer;