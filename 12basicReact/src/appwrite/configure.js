import conf from "../config/config";
import { Client,Account,ID, Databases, Storage } from "appwrite";   

export class Service{
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwrite_url)
        .setProject(conf.appwrite_project_id);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImg, status, userId}){
        try {
            return await this.database.createDocument(
                conf.appwrite_database_id,
                conf.appwrite_collection_id,
                slug,
                {
                    Title: title,
                    Content: content,
                    Img: featuredImg,
                    Status: status,
                    User_id: userId
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async updatePost(slug, {title, content, featuredImg, status}){
        try {
            return await this.database.updateDocument(
                conf.appwrite_database_id,
                conf.appwrite_collection_id,
                slug,
                {
                    Title: title,
                    Content: content,
                    Img: featuredImg,
                    Status: status,
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwrite_database_id,
                conf.appwrite_collection_id,
                slug
            )
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwrite_database_id,
                conf.appwrite_collection_id,
                slug
            )
        } catch (error) {
            console.log(error);
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.database.getDocument(
                conf.appwrite_database_id,
                conf.appwrite_collection_id,
                queries
            )
        } catch (error) {
            console.log(error);
        }
    }

    // file upload 
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwrite_bucked_id,
                ID.unique(),
                file,
            ) 
        } catch (error) {
            console.log(error);
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwrite_bucked_id,
                fileId,
            )
            return true; 
        } catch (error) {
            console.log(error);
        }
    }

    getFileView(Img){
        try {
            return this.bucket.getFileView(
                conf.appwrite_bucked_id,
                Img,
            ) 
        } catch (error) {
            console.log(error);
        }
    }
}

const service = new Service();
export default service; 