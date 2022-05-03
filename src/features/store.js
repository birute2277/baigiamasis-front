import {createSlice} from "@reduxjs/toolkit";

export const storeSlice = createSlice({
    name: "style",
    initialState: {
        value: {
            users: [],
            messages: []
        }
    },
    reducers: {
        addUser: ({value}, {payload}) => {
            value.users.push(payload)
        },
        setUsers: ({value}, {payload}) => {
            value.users = payload
        },
        addMessage: ({value}, {payload}) => {
            value.messages.push(payload)
        },
    }
})

export const {addUser, setUsers, addMessage} = storeSlice.actions;

export default storeSlice.reducer