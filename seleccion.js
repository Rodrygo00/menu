     //declaramos variables
     let servicio,forma,frecuente,costo;
     // capturamos datos y validar
alert("Servicios disponibles")
servicio=parseInt(prompt("Ingrese\n 1-alisado\n 2-Uñas\n 3-Tintes\n 4-Masajes\n 5-Maquillaje"))
while(servicio<1 || servicio>5)
{
 servicio=parseInt(prompt("Ingrese de manera correcta\n 1-Alisado\n 2-Uñas\n 3-Tintes\n 4-Masajes\n 5-Maquillaje"))
}

forma=parseInt(prompt("Ingrese la forma de pago\n 1-Credito\n 2-Efectivo"))
while(forma<1 || forma>2)
{
 forma=parseInt(prompt("Ingrese de manera correcta la forma de pago\n 1-Credito\n 2-Efectivo"))
}

frecuente=parseInt(prompt("Es cliente frecuente?\n 1-Si\n 2-No"))
while(frecuente<1 || frecuente>2)
{
 frecuente=parseInt(prompt("Es cliente frecuente?\n 1-Si\n 2-No"))

}
//procesos
switch(servicio)
{
 case 1:{
     costo=50;
     break;
 }
 case 2:{
     costo=25;
     break;
 }
case 3:{
     costo=35;
     break;
 }
 case 3:{
     costo=35;
     break;
 }
 case 4:{
     costo=70;
     break;
 }
 default :{
     costo=20;
     break;
 }
}//fin sw

//impresion

if(forma==1 && servicio==1)
{
 document.write("Usted se hizo un Alisado<br>");
 document.write("Usted a cancelado con tarjeta de crédito<br>");
 document.write("El costo es de "+costo+"<br>");
 document.write("Se le hará un recargo del 10% "+(costo*0.10)+"<br>");
 document.write("El pago total será de "+(costo*0.10));
}

else if(forma==1 && servicio==2)
{
 document.write("Usted se hizo las Uñas<br>");
 document.write("Usted a cancelado con tarjeta de crédito<br>");
 document.write("El costo es de "+costo+"<br>");
 document.write("Se le hará un recargo del 10% "+(costo*0.10)+"<br>");
 document.write("El pago total será de "+(costo*0.10));
}

else if(forma==1 && servicio==3)
{
 document.write("Usted se tiño el cabello<br>");
 document.write("Usted a cancelado con tarjeta de crédito<br>");
 document.write("El costo es de "+costo+"<br>");
 document.write("Se le hará un recargo del 10% "+(costo*0.10)+"<br>");
 document.write("El pago total será de "+(costo*0.10));
}

else if(forma==1 && servicio==4)
{
     document.write("Se le realizo un masaje<br>");
     document.write("Usted a cancelado con tarjeta de crédito<br>");
     document.write("El costo es de "+costo+"<br>");
     document.write("Se le hará un recargo del 10% "+(costo*0.10)+"<br>");
     document.write("El pago total será de "+(costo*0.10));
}

 else if(forma==1 && servicio==5)
{
         document.write("Usted solicito Maquillaje<br>");
         document.write("Usted a cancelado con tarjeta de crédito<br>");
         document.write("El costo es de "+costo+"<br>");
         document.write("Se le hará un recargo del 10% "+(costo*0.10)+"<br>");
         document.write("El pago total será de "+(costo*0.10));
}

else if(forma==2 && servicio==1)
{
 document.write("Usted se hizo un Alisado<br>");
 document.write("Usted a cancelado en efectivo<br>");
 document.write("El pago total será de "+(costo));
}

else if(forma==2 && servicio==2)
{
 document.write("Usted se hizo las Uñas<br>");
 document.write("Usted a cancelado en efectivo<br>");
 document.write("El pago total será de "+(costo)); 
}

else if(forma==2 && servicio==3)
{
 document.write("Usted se tiño el cabello<br>");
 document.write("Usted a cancelado en efectivo<br>");
 document.write("El pago total será de "+(costo));
}

else if(forma==2 && servicio==4)
{
     document.write("Usted se realizo un masaje<br>");
     document.write("Usted a cancelado en efectivo<br>");
     document.write("El pago total será de "+(costo));
}

else if(forma==2 && servicio==5)
{
     document.write("Usted solicito maquillaje<br>");
     document.write("Usted a cancelado en efectivo<br>");
     document.write("El pago total será de "+(costo));
}
//Descuento
if(forma==1 && servicio==1 && frecuente==1)
 {
     document.write("Usted se hizo un Alisado<br>");
     document.write("Usted a cancelado con tarjeta de crédito<br>");
     document.write("El costo es de "+costo+"<br>");
     document.write("Se le hará un recargo del 10% "+(costo*0.10)+"<br>");
     document.write("Gracias por ser un cliente frecuente se le hara un descuento del 25%<br>")
     document.write("El pago total será de "+(costo*0.10)+" Pero con el descuento seria de "+(costo-0.25));
 }
  
 else if(forma==1 && servicio==2 && frecuente==1)
 {
     document.write("Usted se hizo las Uñas<br>");
     document.write("Usted a cancelado con tarjeta de crédito<br>");
     document.write("El costo es de "+costo+"<br>");
     document.write("Se le hará un recargo del 10% "+(costo*0.10)+"<br>");
     document.write("Gracias por ser un cliente frecuente se le hara un descuento del 25%<br>")
     document.write("El pago total será de "+(costo*0.10)+" Pero con el descuento seria de "+(costo-0.25));

 }
 
 else if(forma==1 && servicio==3 && frecuente==1)
 {
     document.write("Usted se tiño el cabello<br>");
     document.write("Usted a cancelado con tarjeta de crédito<br>");
     document.write("El costo es de "+costo+"<br>");
     document.write("Se le hará un recargo del 10% "+(costo*0.10)+"<br>");
     document.write("Gracias por ser un cliente frecuente se le hara un descuento del 25%<br>")
     document.write("El pago total será de "+(costo*0.10)+" Pero con el descuento seria de "+(costo-0.25));
 }
 
 else if(forma==1 && servicio==4 &&frecuente==1)
 {
         document.write("Se le realizo un masaje<br>");
         document.write("Usted a cancelado con tarjeta de crédito<br>");
         document.write("El costo es de "+costo+"<br>");
         document.write("Se le hará un recargo del 10% "+(costo*0.10)+"<br>");
         document.write("Gracias por ser un cliente frecuente se le hara un descuento del 25%<br>")
         document.write("El pago total será de "+(costo*0.10)+" Pero con el descuento seria de "+(costo-0.25));

 }
 
     else if(forma==1 && servicio==5 && frecuente==1)
 {
             document.write("Usted solicito Maquillaje<br>");
             document.write("Usted a cancelado con tarjeta de crédito<br>");
             document.write("El costo es de "+costo+"<br>");
             document.write("Se le hará un recargo del 10% "+(costo*0.10)+"<br>");
             document.write("Gracias por ser un cliente frecuente se le hara un descuento del 25%<br>");
             document.write("El pago total será de "+(costo*0.10)+" Pero con el descuento seria de "+(costo-0.25));
 }
 //Descuento en efectivo
 else if(forma==2 && servicio==1 && frecuente==1)
     {
         document.write("Usted se hizo un Alisado<br>");
         document.write("Usted a cancelado en efectivo<br>");
         document.write("El pago total será de "+(costo)+" Pero por ser cliente frecuente se le hara un descuento del 25, por lo que pagaria "+(costo-0.25));
     }
     
     else if(forma==2 && servicio==2 && frecuente==1)
     {
         document.write("Usted se hizo las Uñas<br>");
         document.write("Usted a cancelado en efectivo<br>");
         document.write("El pago total será de "+(costo)+" Pero por ser cliente frecuente se le hara un descuento del 25, por lo que pagaria "+(costo-0.25));
     }
     
     else if(forma==2 && servicio==3 && frecuente==1)
     {
         document.write("Usted se tiño el cabello<br>");
         document.write("Usted a cancelado en efectivo<br>");
         document.write("El pago total será de "+(costo)+" Pero por ser cliente frecuente se le hara un descuento del 25, por lo que pagaria "+(costo-0.25));
     }
       
     else if(forma==2 && servicio==4 && frecuente==1)
     {
             document.write("Usted se realizo un masaje<br>");
             document.write("Usted a cancelado en efectivo<br>");
             document.write("El pago total será de "+(costo)+" Pero por ser cliente frecuente se le hara un descuento del 25, por lo que pagaria "+(costo-0.25));
     }
     
     else if( servicio==5 && forma==2 &&frecuente==1)
     {
             document.write("Usted solicito maquillaje<br>");
             document.write("Usted a cancelado en efectivo<br>");
             document.write("El pago total será de "+(costo)+" Pero por ser cliente frecuente se le hara un descuento del 25, por lo que pagaria "+(costo-1.25));
     }