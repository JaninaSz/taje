var v_mes = document.getElementById("sltMes").value;

function selecMes() {    
    const mes = fetch("../assets/dt/votodos.json");

    mes.then(resul => resul.json())
        .then(datos => {
            valMes(datos)
            console.log(datos);
        });
}

function valMes(datos) {
    var v_mes = document.getElementById("sltMes").value;
    var subtit = document.getElementById("p-seleccionado");
    var spnc=document.getElementById("sp-nci");

    for (let valor of datos) {
        
        //Por escu
        if (v_mes == valor.numesa) {
            spnc.textContent=`- ${valor.circuito} -`;
            subtit.textContent=`N° ${valor.numesc} - ${valor.nombresc} - Mesa:  ${valor.numesa}  `;
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
                `
        }
    }
}
