var itemData = [
  {'itemname': 'Top', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48249775_053_f?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':10, 'itemcost': '$20'},
  {'itemname': 'Skirt', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/46063418_015_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':11, 'itemcost': '$25'},
  {'itemname': 'Jewlery', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48249064_070_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':12, 'itemcost': '$8'}
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

  //item10
  var item10size = localStorage.getItem('item10size');
  $('select[name=item10size]').val(item10size);

  $('select[name=item10size]').change(function() {
     localStorage.setItem('item10size', $(this).val());
  });

  var item10qty = localStorage.getItem('item10qty');
  $('select[name=item10qty]').val(item10qty);

  $('select[name=item10qty]').change(function() {
     localStorage.setItem('item10qty', $(this).val());
  });

  //item11
  var item11size = localStorage.getItem('item11size');
  $('select[name=item11size]').val(item11size);

  $('select[name=item11size]').change(function() {
     localStorage.setItem('item11size', $(this).val());
  });

  var item11qty = localStorage.getItem('item11qty');
  $('select[name=item11qty]').val(item11qty);

  $('select[name=item11qty]').change(function() {
     localStorage.setItem('item11qty', $(this).val());
  });

  //item12
  var item12size = localStorage.getItem('item12size');
  $('select[name=item12size]').val(item12size);

  $('select[name=item12size]').change(function() {
     localStorage.setItem('item12size', $(this).val());
  });

  var item12qty = localStorage.getItem('item12qty');
  $('select[name=item12qty]').val(item12qty);

  $('select[name=item12qty]').change(function() {
     localStorage.setItem('item12qty', $(this).val());
  });

  var cart = JSON.parse(localStorage.getItem(cart));



  $("#item10 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 10);
    if (find == -1){
      var item = {'itemsize': item10size, 'itemqty': item10qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48249775_053_f?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'itemcost': '$20','shiptime': '2','index': 10};
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  $("#item11 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 11);
    if (find == -1){
    var item = {'itemsize': item11size, 'itemqty': item11qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/46063418_015_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain','itemcost': '$25','shiptime': '1','index': 11};
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  });

  $("#item12 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 12);
    if (find == -1){
    var item = {'itemsize': item12size, 'itemqty': item12qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48249064_070_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain','itemcost': '$8','shiptime': '2','index': 12};
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  /*-------------------POPUP FOR ADD TO CART-------------------*/
    $("#myPopup10").hide();
    $("#myPopup11").hide();
    $("#myPopup12").hide();
    $('#cartitem10').click(function(e){
      $("#myPopup10").fadeIn().fadeOut();
    });
    $('#cartitem11').click(function(e){
      $("#myPopup11").fadeIn().fadeOut();
    });
    $('#cartitem12').click(function(e){
      $("#myPopup12").fadeIn().fadeOut();
    });
}
