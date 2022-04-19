$(document).ready(function(){
   
   $('#authenticated').click(function(){
       localStorage.setItem('jwt','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFzaGlzaCBTaW5naCIsImlhdCI6MTUxNjIzOTAyMn0.VOSSZLN54DZwTow2yeiXCal91TZXQrHejTFyAnsLh0E')
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

    function getAuthToken() {
        return localStorage.getItem('jwt');
    }

  });