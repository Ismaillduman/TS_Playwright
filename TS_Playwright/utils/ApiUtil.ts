import { APIRequestContext } from "@playwright/test";

export class ApiUtil {

    apiContext: any;
    loginPayload:any;
 

constructor(apiContext: APIRequestContext,loginPayload: { 
    userEmail: string; userPassword: string;
    //network login headers take the request url and take from payload data
       
    }){
    
this.apiContext=apiContext;
this.loginPayload=loginPayload;


}

    async getToken(){

//network login headers take the request url and take from payload data
const loginPesponse= await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
{
data:this.loginPayload
})


//token come from network login response it is json object
const loginResponseJson= await loginPesponse.json();
 const token= loginResponseJson.token;
 //token is defined in a variable
 console.log(token);

 return token;


    }

async createOrder(orderPayload)

{

    let response = {};
       response.token = await this.getToken();
    //for new page new request
    const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
   {
//new data new request
data : orderPayload,
headers:{
            'Authorization' :response.token,
            'Content-Type'  : 'application/json'
        },

})

const orderResponseJson =await orderResponse.json();
console.log(orderResponseJson);

//we grab actuall orderid and storing in a variable
// orders json object got 3 object because of that we used []array and lookout orders[] not [order]
const orderId = orderResponseJson.orders[0];
   response.orderId = orderId;

   return response;
}

}