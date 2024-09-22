import conf from '../conf.js';
import { Client, ID,Databases,Storage,Query} from "appwrite";
export class Service{
  // these three are variables
  client = new client();
  databases;
  bucket;//or storage

  constructor(){
    this.client
    .setEndPoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectID)
    this.databases=new databases(this.client);
    this.bucket=new bucket(this.client);
  }
  // create post
  async createPost({title,slug,content,featuredImage,status,userID}){
    try {
      return await this.databases.createDocument(//read documentation
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userID
        }
      )
      
    } catch (error) {
      console.log("Appwrite Service::createPost::error",error)
    }
  }
  // update post
  async updatePost(slug,{title,content,featuredImage,status}){
    // in featuredImage the file id will be pass from delete file
    try {
       return await this.databases.updateDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
       )
    } catch (error) {
      console.log("Appwrite Service::updatePost::error",error);
    }

  }
  // delete post
  async deletePost(slug){
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        slug,
        
      )
      return true;
    } catch (error) {
       console.log("Appwrite Service::deletePost::error",error);
       return false;
    }
  }
  // if we want to get the one post
  async getPost(slug){
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        slug
      )
    } catch (error) {
      console.log("Appwrite Service::getPost::error",error)
      return false;
    }
  }
  // want only those post or values whose status is active using query
  // for making query you have make indexes otherwise you can't make queries
  // [Query.equal("status","active")] that how you create query
  async getPosts(queries=[Query.equal("status","active")]){
    try {
      return await this.databases.listDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        queries,
      )
    } catch (error) {
      console.log("Appwrite Service::getPosts::error",error);
      return false
    }
  }
  // file upload services
  async uploadFile(file){
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketID,
        ID.unique(),//file id will be generate from here when file will be uploaded
        file
      )
    } catch (error) {
      console.log("Appwrite Service::uploadFile::error",error)
      return false
    }
  }
  // delete file service
  async deleteFile(fileID){
    try {
      return await this.bucket.deleteFile(
        conf.appwriteBucketID,
        fileID
      )
      // if file gets deleted then return true
      return true;
    } catch (error) {
      console.log("Appwrite Service ::deleteFile::error",error)
      return false
    }
  }
  // get file preview service
  // for file preview we don't need to create asyn await because getfilepreview method is fast enough
  getFilePreview(fileID){
    return this.bucket.getFilePreview(
      conf.appwriteBucketID,
      fileID
    )
  }

}
const service = new service();
export default service;
