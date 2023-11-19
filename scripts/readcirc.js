// onload="cargar ()"
function cargar() {
    const circ = fetch("../assets/dt/votodos.json")

    circ.then(res => res.json())
        .then(datos => {
            iniciar(datos);
            console.log(datos);
        });
}
        
function iniciar(datos) {    
    var subtit = document.getElementById("p-seleccionado");
    
   /* $.each(datos, function (numcir, nombresc) {
        $sltEsc.append('<option value=' + datos.numcir + '>' + datos.nombresc + '</option>');
    });*/
    for (let valor of datos) {

        if (v_esc == valor.nombresc) {
        
        subtit.textContent=` N° ${valor.numesc} - ${valor.nombresc}`;
        }
    }
}

$(document).ready(function(){
        
});
function selecCirc() {
    const circ = fetch("../assets/dt/votodos.json");
   
    circ.then(resul => resul.json())
        .then(datos => {
            valCir(datos)
            console.log(datos);
        });
    }
function valCir(datos) {  
    var v_cir = document.getElementById("sltCirc").value;
    var spnc=document.getElementById("sp-nci");
    for (let valor of datos) {
        if (v_cir == valor.circuito) {
            
            spnc.textContent=`- ${valor.circuito} -`;
            
            contTask2.innerHTML = `
            
                <img class="log-par" src="../assets/logos/000134.png" alt="logo_agrupacion">
                <br><hr><p class="sp-votos"><b><span id="tpd-1">${valor.pres_1}</b> votos</span></p>
                `;
            contTask3.innerHTML = `
                <img class="log-par" src="../assets/logos/000135.png" alt="logo_agrupacion">
                <br><hr><p class="sp-votos"><b><span  id="tpd-2">${valor.pres_2}</b></span> votos</p>
                `;  
            contParla.innerHTML = `
            <div>
            <span>Nulos</span><br>
            <span id="spnul">${valor.vtnul}</span>
        </div>
        <div>
            <span>Recurridos</span><br>
            <span id="sprec">${valor.vtrec}</span>
        </div>
        <div>
            <span>Impugnados</span><br>
            <span id="spimp">${valor.vtimp}</span>
        </div>
        <div>
            <span>Comando</span><br>
            <span id="spcom">${valor.vtcom}</span>
        </div>
        <div>
            <span>Blancos</span><br>
            <span id="spbla">${valor.vtbla}</span>
        </div>
        </div>  
        `; 
        }
    }
    
}