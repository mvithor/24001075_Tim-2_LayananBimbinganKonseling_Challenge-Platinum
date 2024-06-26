import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import CustomizerReducer from './customizer/CustomizerSlice';
import ChatsReducer from './apps/chat/ChatSlice';
import NotesReducer from './apps/notes/NotesSlice';
import TicketReducer from './apps/tickets/TicketSlice';
import UserProfileReducer from './apps/userProfile/UserProfileSlice';
import sidebarReducer from './apps/sidebar/sidebarSlice';
<<<<<<< HEAD
import userReducer from './apps/user/userSlice';
import studentReducer from './apps/students/studentSlice';
=======
import userReducer from './apps/user/userSlice'; 
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0

// Gabungkan reducer
const rootReducer = combineReducers({
  user: userReducer,
<<<<<<< HEAD
  student: studentReducer,
=======
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
  customizer: CustomizerReducer,
  chat: ChatsReducer,
  notes: NotesReducer,
  ticket: TicketReducer,
  userProfile: UserProfileReducer,
  sidebar: sidebarReducer,
});

// Konfigurasi persistensi
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
