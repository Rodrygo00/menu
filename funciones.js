//*craer una fuuncion que imprima 10 veces una frace
//*los valores de 10000 hasta 100000, en rangos de 1000*/


var inicio=10000;
var fin=100000;
function serie()
{
    for (let index = inicio; index<=fin; index=index+1000) {
      document.write(index,"<br>");
    }
}


var texto="buenos dias" ;

var k=1;
function frase()
{
    while(k<=10)
    {
        document.write(texto,"<br>");
        k++;
    }      
}//fin while

var dias=["lunes","martes","miercoles","jueves","Viernes","sabado","domingo"]
function semanita()
{
for (let index = 0; index < dias.length; index++) {
     document.write(dias[index],"<br>");  





}



}




