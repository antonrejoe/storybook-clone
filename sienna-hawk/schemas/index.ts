import { createSchema } from "sanity"
import post from "./post"
import comment from "./comment"
import postedBy from "./postedBy"
import user from "./user"

export default createSchema({
    name: 'default',
    types: [post, comment, postedBy, user]
})