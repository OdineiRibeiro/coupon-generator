function coupon_please() {
  var qtd = parseInt(document.getElementById("char").value);
  var coupon = gimme_my_coupon(qtd);
  debugger;
  document.getElementById("coupon").innerHTML = "Generated coupon: " + coupon;
}


function gimme_my_coupon(char_qtd) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < char_qtd; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
