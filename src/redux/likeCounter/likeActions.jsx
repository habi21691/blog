import { LIKE_ITEM, DISLIKE_ITEM } from "./likeActionsType";

export function likeitem () {
    return {
        type: LIKE_ITEM,
    }
}
export function dislikeItem () {
    return {
        type: DISLIKE_ITEM
    }
}