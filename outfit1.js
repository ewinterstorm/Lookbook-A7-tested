var itemData = [
  {'itemname': 'Dress', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/45466208_018_f?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':1, 'itemcost': '$40'},
  {'itemname': 'Bag', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47834106_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':2, 'itemcost': '$20'},
  {'itemname': 'Sunglasses', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/34643320_007_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':3, 'itemcost': '$10'}
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

  //ITEM1
  var item1size = localStorage.getItem('item1size');
  $('select[name=item1size]').val(item1size);

  $('select[name=item1size]').change(function() {
     localStorage.setItem('item1size', $(this).val());
  });

  var item1qty = localStorage.getItem('item1qty');
  $('select[name=item1qty]').val(item1qty);

  $('select[name=item1qty]').change(function() {
     localStorage.setItem('item1qty', $(this).val());
  });

  //ITEM2
  var item2size = localStorage.getItem('item2size');
  $('select[name=item2size]').val(item2size);

  $('select[name=item2size]').change(function() {
     localStorage.setItem('item2size', $(this).val());
  });

  var item2qty = localStorage.getItem('item2qty');
  $('select[name=item2qty]').val(item2qty);

  $('select[name=item2qty]').change(function() {
     localStorage.setItem('item2qty', $(this).val());
  });

  //ITEM3
  var item3size = localStorage.getItem('item3size');
  $('select[name=item3size]').val(item3size);

  $('select[name=item3size]').change(function() {
     localStorage.setItem('item3size', $(this).val());
  });

  var item3qty = localStorage.getItem('item3qty');
  $('select[name=item3qty]').val(item3qty);

  $('select[name=item3qty]').change(function() {
     localStorage.setItem('item3qty', $(this).val());
  });

  var cart = JSON.parse(localStorage.getItem(cart));



  $("#item1 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 1);
    if (find == -1){
      var item = {'itemsize': item1size, 'itemqty': item1qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/45466208_018_f?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'itemcost': '$40','shiptime': '2','index': 1};
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  $("#item2 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 2);
    if (find == -1){
    var item = {'itemsize': item2size, 'itemqty': item2qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47834106_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain','itemcost': '$20','shiptime': '1','index': 2};
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  });

  $("#item3 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 3);
    if (find == -1){
    var item = {'itemsize': item3size, 'itemqty': item3qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/34643320_007_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain','itemcost': '$10','shiptime': '2','index': 3};
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  /*-------------------POPUP FOR ADD TO CART-------------------*/
    $("#myPopup1").hide();
    $("#myPopup2").hide();
    $("#myPopup3").hide();
    $('#cartitem1').click(function(e){
      $("#myPopup1").fadeIn().fadeOut();
    });
    $('#cartitem2').click(function(e){
      $("#myPopup2").fadeIn().fadeOut();
    });
    $('#cartitem3').click(function(e){
      $("#myPopup3").fadeIn().fadeOut();
    });
}
