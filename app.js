function coupon_please() {
  var qtd = parseInt(document.getElementById("char").value);
  var prefix = document.getElementById("prefix").value.trim();

  if (qtd < 5) qtd = 2;
  
  var coupon = gimme_my_coupon(qtd);
  document.getElementById("coupon").innerHTML = prefix + coupon;
}


function gimme_my_coupon(char_qtd) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < char_qtd; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
