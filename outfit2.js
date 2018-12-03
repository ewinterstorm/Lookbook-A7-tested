var itemData = [
  {'itemname': 'Top', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48181853_004_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':4, 'itemcost': '$30'},
  {'itemname': 'Pants', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47310701_026_f?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':5, 'itemcost': '$45'},
  {'itemname': 'Bag', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47833561_060_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':6, 'itemcost': '$25'}
]

$(document).ready(function() {
  initializePage();
})

function initializePage() {

  /*-------------------LOGIN STATUS-------------------*/
  var loginstatus = localStorage.getItem('loggedin');
  if (loginstatus == 1){
    $('#loggedin').html("<div class='navbtn hvr-grow' id='navlogin'>Profile</div>");
    $('#loggedin').attr("href", "profile.html");
  }
  else{
    $('#loggedin').html("<div class='navbtn hvr-grow' id='navlogin'>Login</div>");
    $('#loggedin').attr("href", "login.html");
  }

  /*-------------------ITEM TEMPLATE-------------------*/
  var source2 = $("#item-template").html();
  var template2 = Handlebars.compile(source2);

  var parentDiv2 = $("#templatedItems");

  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < itemData.length; i++) {
    var curData2 = itemData[i];
    var curHtml2= template2(curData2);
    parentDiv2.append(curHtml2);
  };


  /*-------------------ADD TO CART-------------------*/

  //ITEM4
  var item4size = localStorage.getItem('item4size');
  if (item4size == null) {
    item4size = 'XS';
    localStorage.setItem('item4size', item4size);
  }
  $('select[name=item4size]').val(item4size);

  $('select[name=item4size]').change(function() {
     localStorage.setItem('item4size', $(this).val());
  });

  var item4qty = localStorage.getItem('item4qty');
  if (item4qty == null) {
    item4qty = '1';
    localStorage.setItem('item4qty', item4qty);
  }
  $('select[name=item4qty]').val(item4qty);

  $('select[name=item4qty]').change(function() {
     localStorage.setItem('item4qty', $(this).val());
  });

  //ITEM5
  var item5size = localStorage.getItem('item5size');
  if (item5size == null) {
    item5size = 'XS';
    localStorage.setItem('item5size', item5size);
  }
  $('select[name=item5size]').val(item5size);

  $('select[name=item5size]').change(function() {
     localStorage.setItem('item5size', $(this).val());
  });

  var item5qty = localStorage.getItem('item5qty');
  if (item5qty == null) {
    item5qty = '1';
    localStorage.setItem('item5qty', item5qty);
  }
  $('select[name=item5qty]').val(item5qty);

  $('select[name=item5qty]').change(function() {
     localStorage.setItem('item5qty', $(this).val());
  });

  //ITEM6
  var item6size = localStorage.getItem('item6size');
  if (item6size == null) {
    item6size = 'XS';
    localStorage.setItem('item6size', item6size);
  }
  $('select[name=item6size]').val(item6size);

  $('select[name=item6size]').change(function() {
     localStorage.setItem('item6size', $(this).val());
  });

  /*var item6qty = localStorage.getItem('item6qty');
  if (item6qty == null) {
    item6qty = '1';
    localStorage.setItem('item6qty', item6qty);
  }
  $('select[name=item6qty]').val(item6qty);

  $('select[name=item6qty]').change(function() {
     localStorage.setItem('item6qty', $(this).val());
  });*/
  $('#item6size').hide();

  /*------------------ADD TO CART BUTTON-----------*/
  var cart = JSON.parse(localStorage.getItem(cart));

  $("#item4 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 4);
    if (find == -1){
    var item = {'itemsize': item4size, 'itemqty': item4qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48181853_004_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'itemcost': '$30','shiptime': '2','index': 4};
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  $("#item5 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 5);
    if (find == -1){
    var item = {'itemsize': item5size, 'itemqty': item5qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47310701_026_f?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain','itemcost': '$45','shiptime': '3','index': 5};
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  $("#item6 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 6);
    if (find == -1){
    var item = {'itemsize': item6size, 'itemqty': item6qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47833561_060_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain','itemcost': '$25','shiptime': '2','index': 6};
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  /*-------------------POPUP FOR ADD TO CART-------------------*/
    $("#myPopup4").hide();
    $("#myPopup5").hide();
    $("#myPopup6").hide();
    $('#cartitem4').click(function(e){
      $("#myPopup4").fadeIn().fadeOut();
    });
    $('#cartitem5').click(function(e){
      $("#myPopup5").fadeIn().fadeOut();
    });
    $('#cartitem6').click(function(e){
      $("#myPopup6").fadeIn().fadeOut();
    });
}
