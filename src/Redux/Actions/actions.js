import { ADD_BLOG } from "../Types/types"

export const addBlog = (data) => {
    return {
        type: ADD_BLOG,
        payload: data
    }
}
