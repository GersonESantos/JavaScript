let fruta = "banana";
alert(fruta); // banana
fruta = "maçã";
alert(fruta); // maçã
let frutas = ["banana", "maçã", "laranja", "pera"];
alert(frutas); // banana,maçã,laranja,pera
alert(frutas.indexOf("banana")); // 0  
alert(frutas.indexOf("maçã")); // 1
alert(frutas[2]); // laranja
alert(frutas[5]); // undefined
alert(frutas.length); // 4
frutas.push("uva");
alert(frutas); // banana,maçã,laranja,pera,uva