import { ADD_BLOG } from "../Types/types"

export const reducers = (state = [], action) => {
    switch (action.type) {
        case ADD_BLOG:
            return {
                ...state,
                blogDetails: [...state.blogDetails, action.payload]
            }
        default: return state
    }

}