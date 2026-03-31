const bicho = document.getElementById("bicho");
const btn = document.getElementById("btn");
    
const estados = {
    normal: "b_n.png.png",
    puto: "b_p.png",
    morto: "b_m.png",
    comendo: "b_c.png",
    alimentado: "b_f.png",
}

let contador = 0;
let intervalo = null;
let time_Click = null;
let time_out = null;



function init_cont (){
    if(intervalo) clearInterval(intervalo);

    intervalo - setInterval(()=>{
        contador = contador + 1
        console.log("Tempo :", contador);

        if (contador == 10) {
            bicho.src = estados.puto;
        }

        if (contador ==20) {
            bicho.src = estados.morto;
        }

    }, 1000)
}

function alimentar (){
    bicho.src = estados.comendo;
    contador = 0;
    console.log("comendo");

    if(time_Click) clearInterval(time_Click);

        time_Click = setTimeout(()=> {
            bicho.src = estados.alimentado;

            time_out = setTimeout(()=>{
                bicho.src = estados.normal;
            }, 2000);
        }, 1000);

}

init_cont();
