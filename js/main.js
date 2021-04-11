var toggler = document.querySelector('.toggler')
var navbar = document.querySelector('.navbar')
toggler.onclick = function () {
    navbar.classList.toggle('collapse')

}

//var id = null;
//toggler.onclick=function () {
//
//  var pos = 330;
//  clearInterval(id);
//  id = setInterval(frame, 1);
//  function frame() {
//    if (pos == 332) {
//      clearInterval(id);
//    } else {
//      pos= pos-5;
//      navbar.style.height = pos + 'px';
//    }
//  }
//}