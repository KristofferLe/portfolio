import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./features/darkModeSlice";
import languageReducer from "./features/languageSlice";
import menuOpenReducer from "./features/menuOpenSlice";

const store = configureStore({
  reducer: {
    $darkMode: darkModeReducer,
    language: languageReducer,
    $menuOpen: menuOpenReducer,
  },
});

export default store;
