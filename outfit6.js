var itemData = [
  {'itemname': 'Jacket', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47941026_031_f?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':16, 'itemcost': '$55'},
  {'itemname': 'Pants', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48753792_031_f?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':17, 'itemcost': '$35'},
  {'itemname': 'Hoops', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47921903_070_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':18, 'itemcost': '$10'}
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

  //ITEM16
  var item16size = localStorage.getItem('item16size');
  if (item16size == null) {
    item16size = 'XS';
    localStorage.setItem('item16size', item16size);
  }
  $('select[name=item16size]').val(item16size);

  $('select[name=item16size]').change(function() {
     localStorage.setItem('item16size', $(this).val());
  });

  var item16qty = localStorage.getItem('item16qty');
  if (item16qty == null) {
    item16qty = '1';
    localStorage.setItem('item16qty', item16qty);
  }
  $('select[name=item16qty]').val(item16qty);

  $('select[name=item16qty]').change(function() {
     localStorage.setItem('item16qty', $(this).val());
  });

  //ITEM17
  var item17size = localStorage.getItem('item17size');
  if (item17size == null) {
    item17size = 'XS';
    localStorage.setItem('item17size', item17size);
  }
  $('select[name=item17size]').val(item17size);

  $('select[name=item17size]').change(function() {
     localStorage.setItem('item17size', $(this).val());
  });

  var item17qty = localStorage.getItem('item17qty');
  if (item17qty == null) {
    item17qty = '1';
    localStorage.setItem('item17qty', item17qty);
  }
  $('select[name=item17qty]').val(item17qty);

  $('select[name=item17qty]').change(function() {
     localStorage.setItem('item17qty', $(this).val());
  });

  //ITEM18
  /*var item18size = localStorage.getItem('item18size');
  if (item18size == null) {
    item18size = 'XS';
    localStorage.setItem('item18size', item18size);
  }
  $('select[name=item18size]').val(item18size);

  $('select[name=item18size]').change(function() {
     localStorage.setItem('item18size', $(this).val());
  });*/
  $('#item18size').hide();

  var item18qty = localStorage.getItem('item18qty');
  if (item18qty == null) {
    item18qty = '1';
    localStorage.setItem('item18qty', item18qty);
  }
  $('select[name=item18qty]').val(item18qty);

  $('select[name=item18qty]').change(function() {
     localStorage.setItem('item18qty', $(this).val());
  });



  var cart = JSON.parse(localStorage.getItem(cart));

  $("#item16 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 16);
    if (find == -1){
      var item = {'itemsize': item16size, 'itemqty': item16qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47941026_031_f?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'itemcost': '$55','shiptime': '2','index': 16};
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  $("#item17 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 17);
    if (find == -1){
    var item = {'itemsize': item17size, 'itemqty': item17qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48753792_031_f?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain','itemcost': '$35','shiptime': '1','index': 17};
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  });

  $("#item18 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 18);
    if (find == -1){
    var item = {'itemsize': item18size, 'itemqty': item18qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47921903_070_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain','itemcost': '$10','shiptime': '2','index': 18};
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  /*-------------------POPUP FOR ADD TO CART-------------------*/
    $("#myPopup16").hide();
    $("#myPopup17").hide();
    $("#myPopup18").hide();
    $('#cartitem16').click(function(e){
      $("#myPopup16").fadeIn().fadeOut();
    });
    $('#cartitem17').click(function(e){
      $("#myPopup17").fadeIn().fadeOut();
    });
    $('#cartitem18').click(function(e){
      $("#myPopup18").fadeIn().fadeOut();
    });
}
