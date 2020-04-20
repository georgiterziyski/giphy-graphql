import {mergeTypes} from "merge-graphql-schemas";
import User from "./User";
import Gif from "./Gif";

const typeDefs = [User, Gif];

export default mergeTypes(typeDefs, {all: true});