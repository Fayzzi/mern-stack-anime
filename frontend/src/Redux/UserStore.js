// Store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserReducer/Reducer";
import AdminReducer from "./AdminReducer/AdminReducer";
import AlluserReducers from "../ProfileAllUserRedux/Reducers/AlluserReducers";
import allvideos from "./VideoReducer/VideoReducer";
import allcharacter from "./../Pages/Character/CharacterReducer/CharReducers";
const Store = configureStore({
  reducer: {
    user: userReducer,
    admin: AdminReducer,
    alluser: AlluserReducers,
    allvideo: allvideos,
    allchar: allcharacter,
  },
});

export default Store;
