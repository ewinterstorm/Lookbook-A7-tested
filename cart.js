
$(document).ready(function() {
  initializePage();
})

function initializePage() {
  /*-------------------CHECK LOGIN-------------------*/
  var loginstatus = localStorage.getItem('loggedin');
  if (loginstatus == 1){
    $('#loggedin').html("<div class='navbtn hvr-grow' id='navlogin'>Profile</div>");
    $('#loggedin').attr("href", "profile.html");
  }
  else{
    $('#loggedin').html("<div class='navbtn hvr-grow' id='navlogin'>Login</div>");
    $('#loggedin').attr("href", "login.html");
  }

  /*-------------------CART TEMPLATE-------------------*/
    var newcart = JSON.parse(localStorage.getItem('cart'));
    var checkcart = JSON.parse(localStorage.getItem('checkoutcart'));
    if (checkcart == null){
      checkcart == [];
    }

    if (newcart == null) {
      newcart = [];
    }
    console.log(newcart);
    for (var i = 0; i < newcart.length; i++){
      var num = newcart[i].index;
      var size = localStorage.getItem("item"+num+"size");
      var qty = localStorage.getItem("item"+num+"qty");
      newcart[i].itemsize = size;
      newcart[i].itemqty = qty;
    }

    if (newcart.length == 0){
      $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
      $("#checkoutbtn").hide();
    }

    var length = newcart.length;

    //var recentcartData = JSON.parse(recentcart);
    var source = $("#cart-template").html();
    var template = Handlebars.compile(source);

    var parentDiv = $("#templatedCart");

    // now iterate through the complexData list and keep appending:
    for (var i = 0; i < length; i++) {
      var curData = newcart[i];
      var curHtml= template(curData);
      parentDiv.append(curHtml);
    };

    $('#item2size').hide();
    $('#item3size').hide();
    $('#item6size').hide();
    $('#item12size').hide();
    $('#item15size').hide();
    $('#item18size').hide();


    /*-------------------DELETE ITEMS FROM CART-------------------*/
    $('#deleteitem1').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 1;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item1").hide();
    });

    $('#deleteitem2').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 2;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item2").hide();
    });

    $('#deleteitem3').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 3;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item3").hide();
    });

    $('#deleteitem4').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 4;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item4").hide();
    });

    $('#deleteitem5').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 5;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item5").hide();
    });

    $('#deleteitem6').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 6;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item6").hide();
    });

    $('#deleteitem7').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 7;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item7").hide();
    });

    $('#deleteitem8').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 8;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item8").hide();
    });

    $('#deleteitem9').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 9;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item9").hide();
    });

    $('#deleteitem10').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 10;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item10").hide();
    });

    $('#deleteitem11').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 11;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item11").hide();
    });

    $('#deleteitem12').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 12;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item12").hide();
    });

    $('#deleteitem13').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 13;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item13").hide();
    });

    $('#deleteitem14').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 14;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item14").hide();
    });

    $('#deleteitem15').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 15;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item15").hide();
    });

    $('#deleteitem16').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 16;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item16").hide();
    });

    $('#deleteitem17').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 17;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item17").hide();
    });

    $('#deleteitem18').click(function(e){
      var delcart = JSON.parse(localStorage.getItem('cart'));
      delcart = $.grep(delcart, function(e){
        return e.index != 18;
      })
      if (delcart.length == 0){
        $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
        $("#checkoutbtn").hide();
      }
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item18").hide();
    });

    $('#delall').click(function(e){
      var delcart = [];
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item1").hide();
      $("#item2").hide();
      $("#item3").hide();
      $("#item4").hide();
      $("#item5").hide();
      $("#item6").hide();
      $("#item7").hide();
      $("#item8").hide();
      $("#item9").hide();
      $("#item10").hide();
      $("#item11").hide();
      $("#item12").hide();
      $("#item13").hide();
      $("#item14").hide();
      $("#item15").hide();
      $("#item16").hide();
      $("#item17").hide();
      $("#item18").hide();
      $("#templatedCart").html("<span style='font-size: 30px'>Your cart is empty! <br> <a href='index.html' id='shopnow'> Shop now </a></span>");
      $("#checkoutbtn").hide();
    });

    /*-----------CHECKOUT DELETE CART ITEMS---------------*/
    $('#checkoutbtn').click(function(e){
      //var cart = JSON.parse(localStorage.getItem(cart));
      //localStorage.setItem('checkoutcart', JSON.stringify(cart));
      var empty = [];
      localStorage.setItem('cart', JSON.stringify(empty));
    });

}
