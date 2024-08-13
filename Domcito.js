
function calcular()
{
    let nombre=document.getElementById('name1').value;
    let edad=parseInt(document.getElementById('edad1').value);
    //obteniendo el genero
    var genero= document.querySelector('input[name="sexo"]:checked').value;
    let aumento;
    aumento=edad+10;
    alert("Su edad aumentada es "+aumento);
    //Imprrimiendo la edad de acuerdo al genero
    if(genero=="masculino")
    {
        alert("Exelente caballero, su edad aumentada es "+aumento);
    }
    else{
        alert("Exelente senorita, su edad aumentada es"+aumento);

    }

    
}//fin calcular