if (typeof (tq84) == 'undefined') {
  tq84 = {};
}

tq84.SVGinHTML = function(svgID) {

  this.svg = document.getElementById(svgID);

  if (! this.svg) {
    alert('tq84.SVGinHTML: svgID ' + svgID + ' not found');
    return;
  }

}
