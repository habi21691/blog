import { createStore, applyMiddleware } from "redux";
import { LikeReducers } from "./likeCounter/likeReducers";
import logger from "redux-logger";

const store = createStore(LikeReducers, applyMiddleware(logger));

export default store;
