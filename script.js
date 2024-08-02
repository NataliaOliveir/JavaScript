function exemploVar() {
    var idade = 30;
    if (true) {
        var idade = 25; // redeclara a variável no mesmo escopo
        console.log(idade); // 25
    }
    console.log(idade); // 25, pois `var` tem escopo de função  
    }
       exemploVar(); 

       


function somar(a,b) {
    return a+b;
}
console.log(somar(5,3)); 