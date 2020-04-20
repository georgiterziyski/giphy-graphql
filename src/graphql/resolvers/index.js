import {mergeResolvers} from "merge-graphql-schemas";
import User from "./User";
import Gif from "./Gif";

const resolvers = [User, Gif];

export default mergeResolvers(resolvers);