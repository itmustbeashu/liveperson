lpTag.identities = [];
        
        
function identityFn(callback) {
    callback({
        iss: "Ashu",
        acr: "loa1",
        sub: "16723672"
    });
} 

lpTag.identities.push(identityFn);
  
lpTag.sdes = lpTag.sdes||[];
 var data = [{
    "type": "cart",
    "total": 1099, 
    "currency": "USD", 
    "numItems": 1, 
    "products": [{
      "product": {
      "name": "Shop Online", 
      "category": " ", 
      "price": " " 
      }
}]
}]

lpTag.sdes.push(data);

function getAuthToken(callback) {
    console.log('Authentication token requested by Liveperson 2');
    let token = localStorage.getItem('token')
    callback(token);            
  }
  