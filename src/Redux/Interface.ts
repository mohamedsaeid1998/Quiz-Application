export interface UserData{
    accessToken:string;
    refreshToken:string;
    profile:{
        _id:string,
        first_name:string,
        last_name:string,
        email:string,
        status:string,
        role:string
    }
    
}