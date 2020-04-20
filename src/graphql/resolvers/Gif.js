import Gif from "../../models/Gif";
import { response } from "express";

export default {
    Query: {
        gif: (root, args) => {
            return new Promise((resolve, reject) => {
                Gif.findOne(args).exec((error, response)=> {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        gifs: () => {
            return new Promise((resolve, reject) => {
                Gif.find({}).populate().exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    },
    Mutation: {
        addGif: (root, {title, imageUrl}) => {
            const newGif = new Gif({title, imageUrl});
            return new Promise((resolve, reject) => {
                newGif.save((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        deleteGif: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                Gif.findByIdAndRemove({_id}).exec((error, response) => {
                    error ? reject(error): resolve(response);
                })
            })
        },
        editGif: (root, {_id, title, imageUrl}) => {
            return new Promise((resolve, reject) => {
                Gif.findByIdAndUpdate({_id}, {$set: {title, imageUrl}}, {new: true}).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    }
}