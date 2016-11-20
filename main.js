/**
 * Created by siver on 20.11.2016.
 */
var arofvalrus = ["","один","два","три","четыре","пять","шесть","семь","восемь","девять","десять",
    "одинадцать","двенадцать","тринадцать","четырнадцать","пятнадцать","шестнадцать","семнадцать","восемнадцать","девятнадцать","двадцать",
    "тридцать","сорок","пятьдесят","шестьдесят","семьдесят","восемьдесят","девяносто","сто","двести","триста"];
var arofvalukr = ["","один","два","три","чотири","п'ять","шість","сім","вісім","дев'ять","десять",
    "одинадцять","дванадцять","тринадцять","чотирнадцять","п'ятнадцять","шістнадцять","сімнадцять","вісімнадцять","дев'ятнадцять","двадцять",
    "тридцять","сорок","п'ятдесят","шістдесят","сімдесят","вісімдесят","дев'яносто","сто","двісті","триста"];
function createNumberButs(elem,arofval,max){
    for (var i = 1;i<=max; i++){
        var btn = document.createElement('input');
        btn.type = 'button';
        btn.value = i;
        btn.setAttribute('class', "btn");
        var numbstr = String(i);
        while(numbstr.length<3){
            numbstr = "0" + numbstr;
        }
        var numbar=numbstr.split('');
        var retar = [];
        if(numbar[0]!=0){
            retar[0] = arofval[27+Number(numbar[0])];
        }
        if(numbar[1]>1){
            retar[1] = arofval[18+Number(numbar[1])];
        }
        if(numbar[1]=="1"){
            retar[2]= arofval[10+Number(numbar[2])];
        }else if(numbar[2]!=0){
            retar[2]= arofval[numbar[2]];
        }
        btn.setAttribute('aria-label', retar.join(' ').replace(/ {1,}/g," ").trim());
        elem.appendChild(btn);
        if(i%10==0){
            var newbr = document.createElement('br');
            elem.appendChild(newbr);
        }
    }
}
createNumberButs(document.getElementById("ukr"),arofvalukr,300);
createNumberButs(document.getElementById("rus"),arofvalrus,300);
new Clipboard('.btn', {
    text: function(trigger) {
        return trigger.getAttribute('aria-label');
    }
});