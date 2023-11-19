
/*Presidente
var entTpd1 = document.getElementById("e-tpd1").value;
var entTpd2 = document.getElementById("e-tpd1").value;*/

function cargaEst() {
      const circ = fetch("../assets/dt/votodos.json");

      circ.then(resul => resul.json())
            .then(data => {
                  est(data)
                  console.log(data);
            });
}

function est(data) {

      alert(entEscrut)
      for (let valor of data) {
            var entTvot=+ sum +`$(valor.cantivo)`;
            var entTpd1 =+ sum(valor.pres_1);
            var entTpd2 =+ sum(valor.pres_2)
      }
      document.getElementById("tpd-1").textContent = entTpd1;
      document.getElementById("tpd-2").textContent = entTpd2;
      
return entTvot;
      
}

//Calcular porcentajes
//votos/total*100
totalpersonas = 34064
votaron = 25600
/*
function porcentajes(entTvot) {
      calPd1 = (entTpd1 / entTvot) * 100;
      calPd2 = (entTpd2 / entTvot) * 100;

      var numero = 1.77777777;
      numero = Number(numero.toFixed(2));
      console.log(numero); // Muestra 1.78
      porPd1 = Number(calPd1.toFixed(2));
      porPd2 = Number(calPd2.toFixed(2));

      /*porPd1=Math.round(calPd1);
      porPd2=Math.round(calPd2);
      porPd3=Math.round(calPd3);
      porPd4=Math.round(calPd4);
      porPd5=Math.round(calPd5);
      alert(porPd1);
      alert(porPd2);
      alert(porPd3);
      alert(porPd4);
      alert(porPd5);**-/
      document.getElementById("p-porPd1").textContent = porPd1;

      document.getElementById("p-porPd2").textContent = porPd2;
}*/