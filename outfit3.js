var itemData = [
  {'itemname': 'Shirt', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/43306216_024_e?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':7, 'itemcost': '$25'},
  {'itemname': 'Jeans', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47677273_002_g?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':8, 'itemcost': '$35'},
  {'itemname': 'Shoes', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/46493821_001_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':9, 'itemcost': '$60'}
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

  //item7
  var item7size = localStorage.getItem('item7size');
  $('select[name=item7size]').val(item7size);

  $('select[name=item7size]').change(function() {
     localStorage.setItem('item7size', $(this).val());
  });

  var item7qty = localStorage.getItem('item7qty');
  $('select[name=item7qty]').val(item7qty);

  $('select[name=item7qty]').change(function() {
     localStorage.setItem('item7qty', $(this).val());
  });

  //item8
  var item8size = localStorage.getItem('item8size');
  $('select[name=item8size]').val(item8size);

  $('select[name=item8size]').change(function() {
     localStorage.setItem('item8size', $(this).val());
  });

  var item8qty = localStorage.getItem('item8qty');
  $('select[name=item8qty]').val(item8qty);

  $('select[name=item8qty]').change(function() {
     localStorage.setItem('item8qty', $(this).val());
  });

  //item9
  var item9size = localStorage.getItem('item9size');
  $('select[name=item9size]').val(item9size);

  $('select[name=item9size]').change(function() {
     localStorage.setItem('item9size', $(this).val());
  });

  var item9qty = localStorage.getItem('item9qty');
  $('select[name=item9qty]').val(item9qty);

  $('select[name=item9qty]').change(function() {
     localStorage.setItem('item9qty', $(this).val());
  });

  var cart = JSON.parse(localStorage.getItem(cart));



  $("#item7 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 7);
    if (find == -1){
      var item = {'itemsize': item7size, 'itemqty': item7qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/43306216_024_e?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'itemcost': '$25','shiptime': '2','index': 7};
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  $("#item8 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 8);
    if (find == -1){
    var item = {'itemsize': item8size, 'itemqty': item8qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47677273_002_g?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain','itemcost': '$35','shiptime': '1','index': 8};
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  });

  $("#item9 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 9);
    if (find == -1){
    var item = {'itemsize': item9size, 'itemqty': item9qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/46493821_001_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain','itemcost': '$60','shiptime': '2','index': 9};
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  /*-------------------POPUP FOR ADD TO CART-------------------*/
    $("#myPopup7").hide();
    $("#myPopup8").hide();
    $("#myPopup9").hide();
    $('#cartitem7').click(function(e){
      $("#myPopup7").fadeIn().fadeOut();
    });
    $('#cartitem8').click(function(e){
      $("#myPopup8").fadeIn().fadeOut();
    });
    $('#cartitem9').click(function(e){
      $("#myPopup9").fadeIn().fadeOut();
    });
}
