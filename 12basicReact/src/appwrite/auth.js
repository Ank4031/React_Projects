import { use } from "react";
import conf from "../config/config.js";
import { Client, Account, ID} from 'appwrite';


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwrite_url)
        .setProject(conf.appwrite_project_id);
        this.account = new Account(this.client);
    }

    async createAccount({email,name,password}){
        try{
            let userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount){
                //direct login after account creation
                return this.login({email,password})
            }else{
                return userAccount;
            }
        }catch(error){
            console.error("Error creating account:", error);
            throw error;
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password);
        }catch(error){
            throw(error)
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) { 
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;