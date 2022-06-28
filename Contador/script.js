var p$ = document.getElementById("contador")

let contador = 0;

p$.innerHTML = contador;

alert('So conto até 10 e não conto numeros negativos!')

function somar() {
    p$.innerHTML = ++contador;
    if(contador > 10){
        p$.innerHTML = --contador;
        alert("So conto até 10")
    }
}

function subtrair() {
    p$.innerHTML = --contador;
    if(contador  < 0){
        p$.innerHTML = ++contador;
        alert("Não conto numeros negativos")
    }
}

