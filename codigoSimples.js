const alturasDosHomens = [0,2.00,1.95,2.70,1.82,3.00,1.75,1.60,3.10];
const alturaDasMulheres = [0,1.78,1.41,2.20,2.70,1.52];
let maioresAlturas = [0]


function buscaAltos(numeros){
    for(let i = 0;i < numeros.length;i = i + 1){
        let altura = numeros[i];
        
        if (altura > maioresAlturas[maioresAlturas.length-1]){
            maioresAlturas.push(altura)
        }
    }; 
    return maioresAlturas[maioresAlturas.length-1]
}
  /*  for(let i = 0;i < alturaDasMulheres.length;i = i + 1){
        let altura = alturaDasMulheres[i];
        
        if (altura > maioresAlturas[maioresAlturas.length-1]){
            maioresAlturas.push(altura)
        }
    };*/
let maiorAltura=buscaAltos(alturasDosHomens)
console.log(maiorAltura)
    //console.log(maioresAlturas[maioresAlturas.length-1]);
