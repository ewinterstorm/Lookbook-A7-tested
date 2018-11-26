var itemData = [
  {'itemname': 'Sweater', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/46726451_030_d?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':13, 'itemcost': '$40'},
  {'itemname': 'Skirt', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/43113000_015_e?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':14, 'itemcost': '$20'},
  {'itemname': 'Bag', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/44873198_001_d?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':15, 'itemcost': '$10'}
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
  var item13size = localStorage.getItem('item13size');
  $('select[name=item13size]').val(item13size);

  $('select[name=item13size]').change(function() {
     localStorage.setItem('item13size', $(this).val());
  });

  var item13qty = localStorage.getItem('item13qty');
  $('select[name=item13qty]').val(item13qty);

  $('select[name=item13qty]').change(function() {
     localStorage.setItem('item13qty', $(this).val());
  });

  //ITEM2
  var item14size = localStorage.getItem('item14size');
  $('select[name=item14size]').val(item14size);

  $('select[name=item14size]').change(function() {
     localStorage.setItem('item14size', $(this).val());
  });

  var item14qty = localStorage.getItem('item14qty');
  $('select[name=item14qty]').val(item14qty);

  $('select[name=item14qty]').change(function() {
     localStorage.setItem('item14qty', $(this).val());
  });

  //ITEM3
  var item15size = localStorage.getItem('item15size');
  $('select[name=item15size]').val(item15size);

  $('select[name=item15size]').change(function() {
     localStorage.setItem('item15size', $(this).val());
  });

  var item15qty = localStorage.getItem('item15qty');
  $('select[name=item15qty]').val(item15qty);

  $('select[name=item15qty]').change(function() {
     localStorage.setItem('item15qty', $(this).val());
  });

  var cart = JSON.parse(localStorage.getItem(cart));



  $("#item13 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 13);
    if (find == -1){
      var item = {'itemsize': item13size, 'itemqty': item13qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/46726451_030_d?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'itemcost': '$40','shiptime': '2','index': 13};
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  $("#item14 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 14);
    if (find == -1){
    var item = {'itemsize': item14size, 'itemqty': item14qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/43113000_015_e?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain','itemcost': '$20','shiptime': '1','index': 14};
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  });

  $("#item15 .addcart").click(function () {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    var find = cart.findIndex(cart => cart.index === 15);
    if (find == -1){
    var item = {'itemsize': item15size, 'itemqty': item15qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/44873198_001_d?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain','itemcost': '$10','shiptime': '2','index': 15};
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  /*-------------------POPUP FOR ADD TO CART-------------------*/
    $("#myPopup13").hide();
    $("#myPopup14").hide();
    $("#myPopup15").hide();
    $('#cartitem13').click(function(e){
      $("#myPopup13").fadeIn().fadeOut();
    });
    $('#cartitem14').click(function(e){
      $("#myPopup14").fadeIn().fadeOut();
    });
    $('#cartitem15').click(function(e){
      $("#myPopup15").fadeIn().fadeOut();
    });
}
