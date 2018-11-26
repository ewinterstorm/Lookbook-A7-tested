
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

    /*-------------------DELETE ITEMS FROM CART-------------------*/
    $('#deleteitem1').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 1;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item1").hide();
    });

    $('#deleteitem2').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 2;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item2").hide();
    });

    $('#deleteitem3').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 3;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item3").hide();
    });

    $('#deleteitem4').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 4;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item4").hide();
    });

    $('#deleteitem5').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 5;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item5").hide();
    });

    $('#deleteitem6').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 6;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item6").hide();
    });

    $('#deleteitem7').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 7;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item7").hide();
    });

    $('#deleteitem8').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 8;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item8").hide();
    });

    $('#deleteitem9').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 9;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item9").hide();
    });

    $('#deleteitem10').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 10;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item10").hide();
    });

    $('#deleteitem11').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 11;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item11").hide();
    });

    $('#deleteitem12').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 12;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item12").hide();
    });

    $('#deleteitem13').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 13;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item13").hide();
    });

    $('#deleteitem14').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 14;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item14").hide();
    });

    $('#deleteitem15').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 15;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item15").hide();
    });

    $('#deleteitem16').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 16;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item16").hide();
    });

    $('#deleteitem17').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 17;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item17").hide();
    });

    $('#deleteitem18').click(function(e){
      var delcart = $.grep(newcart, function(e){
        return e.index != 18;
      })
      localStorage.setItem('cart', JSON.stringify(delcart));
      $("#item18").hide();
    });

    /*-----------CHECKOUT DELETE CART ITEMS---------------*/
    $('#checkoutbtn').click(function(e){
      var empty = [];
      localStorage.setItem('cart', JSON.stringify(empty));
    });

    console.log(JSON.parse(localStorage.getItem('cart')));
}
