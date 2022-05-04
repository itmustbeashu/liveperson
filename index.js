
$(document).ready(async function () {

  let pageTitle = 'Shop Online';
  let cartTotal = 1099;
  let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBc2h1IiwiYWNyIjoibG9hMSIsInN1YiI6IjE2NzIzNjcyIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTQ0NjExMTc1MiwiZXhwIjoxNzE0MTg1NTgwLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJBc2hpc2hTaW5naCIsInBob25lX251bWJlciI6IisxLTEwLTM0NC0zNzY1MzMzIn0.JK4QnBb8XNraDFhWTu4_8vITpUt4-o1uPxd5UBxw_XGv698IquZBtXpbnh56uDelokoy4E3ZSpOT0VPxQQOu8iIQFpHT_Fkc6jjZ7RPF9abB3Ooj5HHvhg_-VHPszPkkinOQC4HImHKpDxuSVbfjR0dxSCQliLsB0DGyicvhBlIteOXR_rYUw8QKO4SZlMh200B2TnM3csQtJUb4ueBFXzM5ljtbFn6nwX9w8XvGqADnjaZDWy7aU7gdB-J3mTlkNe-5N-abN9P8ZfV1-Ebl2j2pD5gfX0JcMe7rBlYC_-oS6UO7gBU--dSr79fZFyuylZbfHW__dNDWbhtmDtTGtQ'
  appendData();


  $('.home').click(function () {
    localStorage.clear();
    window.location.href = 'index.html';
  })

  $('#authenticated').click(function () {

    localStorage.setItem('token',token)
    window.location.href = 'authenticated.html';

  })
  $('#unauthenticated').click(function () {

    localStorage.clear();
    window.location.href = 'unauthenticated.html';

  })


  function appendData() {
    $('#cartTotal').val(cartTotal);
    $('#pageTitle').text(pageTitle)
  }



});

