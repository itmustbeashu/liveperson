$(document).ready(function(){
   console.log('V1 Loaded')
    let pageTitle = 'Shop Online';
    let cartTotal = 1099;
    lpTag.identities = [];
    appendData();
   
   $('#authenticated').click(function(){
       localStorage.setItem('jwt','eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3IiOiJsb2ExIiwiaXNzIjoiQXNodSIsInN1YiI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9obiBEb2UiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTE2MjM5MDIyfQ.PRuvImCr0kL9qLiyvhrkn1oKQ8Z4-E6jxF6n1ePSRde8aSJQNp2we8Bdob-jYjD-1ki_7TaSoGCo1l9vecbq0cRP5eLG7rEb5OyOMK1SBBWE-b1EA0iMYPl3hPzlIguC6a-hj0kojBctFzvbyBFFgbYwMCUlUAch3h8ORsC0VmodEq321hyf5ggpKCBum8pd-LxFB9sMc2ShmkkGlfkiTlm60lFwBVpY3DD2sm6ntMLUkt4jzzGqYEDWgEmdT_150DjaxLn8R9LpaB2bkU8f6r6MAM0sfHamCZLijlWi8-DkugaQznLf4dWOI4pGSxmuhEkuWUbneAQGXiSwmrQnjg&publicKey=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu1SU1LfVLPHCozMxH2Mo%0A4lgOEePzNm0tRgeLezV6ffAt0gunVTLw7onLRnrq0%2FIzW7yWR7QkrmBL7jTKEn5u%0A%2BqKhbwKfBstIs%2BbMY2Zkp18gnTxKLxoS2tFczGkPLPgizskuemMghRniWaoLcyeh%0Akd3qqGElvW%2FVDL5AaWTg0nLVkjRo9z%2B40RQzuVaE8AkAFmxZzow3x%2BVJYKdjykkJ%0A0iT9wCS0DRTXu269V264Vf%2F3jvredZiKRkgwlL9xNAwxXFg0x%2FXFw005UWVRIkdg%0AcKWTjpBP2dPwVZ4WWC%2B9aGVd%2BGyn1o0CLelf4rEjGoXbAAEgAqeGUxrcIlbjXfbc%0AmwIDAQAB%0A')
       window.location.href = 'authenticated.html';
    })

    $('#unauthenticated').click(function(){
        localStorage.clear();
        window.location.href = 'unauthenticated.html';
    })

    $('.home').click(function(){
        localStorage.clear();
        window.location.href = 'index.html';
    })


    function appendData() {
        $('#cartTotal').val(cartTotal);
        $('#pageTitle').text(pageTitle)
    }

    function getAuthToken(callback) {
      console.log("Called");
      let jwt = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3IiOiJsb2ExIiwiaXNzIjoiQXNodSIsInN1YiI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9obiBEb2UiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTE2MjM5MDIyfQ.PRuvImCr0kL9qLiyvhrkn1oKQ8Z4-E6jxF6n1ePSRde8aSJQNp2we8Bdob-jYjD-1ki_7TaSoGCo1l9vecbq0cRP5eLG7rEb5OyOMK1SBBWE-b1EA0iMYPl3hPzlIguC6a-hj0kojBctFzvbyBFFgbYwMCUlUAch3h8ORsC0VmodEq321hyf5ggpKCBum8pd-LxFB9sMc2ShmkkGlfkiTlm60lFwBVpY3DD2sm6ntMLUkt4jzzGqYEDWgEmdT_150DjaxLn8R9LpaB2bkU8f6r6MAM0sfHamCZLijlWi8-DkugaQznLf4dWOI4pGSxmuhEkuWUbneAQGXiSwmrQnjg";
      callback(jwt);
    }



  
    function identityFn(callback) {
        callback({
            iss: "https://jarakkal.github.io",
            acr: "loa1",
            sub: "16723672"
        });
    } 

      lpTag.identities.push(identityFn);

    lpTag.sdes.push(
        {
          "type": "prodView", //MANDATORY
          "products": [{ //ARRAY OF PRODUCTS
            "product": {
              "name": pageTitle,  
              "price": cartTotal, 
              "category": " ",
              "sku": " ", 
            }
          }]
        }
      );
      

  });

