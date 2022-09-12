import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

//TODO: import reducers and add them to combine root reducers

const persistConfig = {
    key: 'root',
    storage,
    // list of store keys which needed to be persisted
    whitelist:[]
}

const rootReducer = combineReducers({
    // key: reducer
    // user: userReducer
})

export default persistReducer(persistConfig, rootReducer);