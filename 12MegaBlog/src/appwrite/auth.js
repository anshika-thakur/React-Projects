// creating services with appwrite
import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";
export class AuthService{
 Client=new Client();
 account;
 constructor(){
  this.Client
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectID);
  this.account=new Account(this.Client)//used this.client and new to create account
 }
//  functionality of create account
 async createAccount({email,password,name}){
  try{
    const userAccount=await this.account.create(ID.unique(),email,password,name);
    if(userAccount){
      return this.login({email,password});
    }else{
      return userAccount;
    }
  }catch(error){
         throw error;
  }
 }
//  functionality of login
 async login({email,password}){
  try{
        return await this.account.createEmailSession(email,password);
  }catch(error){
    throw error;
  }
 }
//  to get the current user of home page
 async getCurrentUser(){
  try{
     return await this.account.get();
  }catch(error){
    throw error;
  }
  return null;
 }
//  functionality of logout or services of logout
async logout(){
  try{
    return await this.account.deleteSessions();
  }catch(error){
    console.log("Appwrite service::logout::error",error)
  }
}
}
const authService=new AuthService();
export default authService