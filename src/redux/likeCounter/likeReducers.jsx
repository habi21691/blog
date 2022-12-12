import { LIKE_ITEM, DISLIKE_ITEM } from "./likeActionsType"


const initialState = {
    numberOfLike:0,
   
}

export function LikeReducers ( state = initialState, actions) {
       switch (actions.type){
        case LIKE_ITEM:
            return {
                numberOfLike: state.numberOfLike + 1
            }
        case DISLIKE_ITEM:
            return {
                numberOfLike: state.numberOfLike - 1
            }
        default:
            return state;
       }

}