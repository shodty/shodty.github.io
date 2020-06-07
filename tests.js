$("[data-tag=font-36]").parentNode.style.fontSize = '36px';
$("[data-tag=purple-bg").parentNode.style.backgroundColor = 'rgba(157, 55, 235, 0.55)';

var greens = $$("[data-tag=orange-text]");
   for (each in greens) {
        greens[each].parentNode.style.color = 'orange';
   }
var fonts = $$("[data-tag=font-36]");
   for (each in fonts) {
    fonts[each].parentNode.style.fontSize = '36px';
    fonts[each].parentNode.style.lineHeight = '46px';
   }

var blues = $$("[data-tag=blue-bg");
   for (each in blues) {
    blues[each].parentNode.style.backgroundColor = 'rgba(52, 73, 229, 0.55)';
    blues[each].style.backgroundColor = 'red !important';
}

var monos = $$("[data-tag=monospaced");
   for (each in monos) {
    monos[each].parentNode.style.fontFamily = 'Courier New';
}
