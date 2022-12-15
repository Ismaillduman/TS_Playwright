import  {test as clientApp} from "@playwright/test";



type dataFolder= {
    username:string,
    password:string,
    productName:string
    
}
  const clientData=clientApp.extend<dataFolder>(
{

    username : "busrayusuf@gmail.com",
    password : "HKNclb8318.",
    productName:"iphone 13 pro"
    }



)
 export const customtest = clientData;