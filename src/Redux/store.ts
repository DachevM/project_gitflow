import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { searchReducer } from "./reducers/searchReducer";
import { productsReducer } from "./reducers/productsReducer";
import { clientsReducer } from "./reducers/clientsReducer";
import { subcategoriesReducer } from "./reducers/subcategoryReducer";
import { categoriesReducer } from "./reducers/categoryReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  product: productsReducer,
  clients: clientsReducer,
  subcategory: subcategoriesReducer,
  category: categoriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, type RootState, type AppDispatch };
