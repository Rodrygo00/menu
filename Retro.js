var si, i, d, sf, n, descuento, rol;
var totalSalarios = 0;
var totalDescuentos = 0;
var totalDescuentosUniforme = 0;
var cGerentes = 0;
var cOtros = 0;

document.write('<b>PLANILLA DE EMPLEADOS</b><br><br>');
document.write('<table border=1>');
document.write('<tr><td>Número obrero</td><td>Nombre Obrero</td><td>Rol</td><td>Salario inicial</td><td>Descuento</td><td>Descuento Uniforme</td><td>Salario final</td></tr>');

for (i = 1; i <= 3; i++) {
    n = prompt('Digite el nombre del obrero número ' + i + '');
    si = parseFloat(prompt('Digite el salario inicial del empleado', ''));
    
    while (si <= 365) {
        si = parseFloat(prompt("Ingrese la cantidad de dolares arriba de 365"));
    }

    rol = prompt('Digite el rol del empleado (1 para gerente, 2 para otro)');
    
    d = si * 0.05;
    
    if (rol == '1') {
        descuento = 50;
        rol = 'Gerente';
        cGerentes++;
    } else if (rol=='2') {
        descuento = 25;
        rol = 'Otro';
        cOtros++;
    }

    sf = (si - d) - (descuento);

    totalSalarios += si;
    totalDescuentos += d;
    totalDescuentosUniforme += descuento;

    document.write('<tr><td>' + i + '</td><td>' + n + '</td><td>' + rol + '</td><td>$' + si.toFixed(2) + '</td><td>$' + d.toFixed(2) + '</td><td>$' + descuento.toFixed(2) + '</td><td>$' + sf.toFixed(2) + '</td></tr>');
}
document.write('</table>');

document.write('<br><b>Monto total pagado en concepto de salarios:</b> $' + totalSalarios.toFixed(2));
document.write('<br><b>Monto total en concepto de descuento:</b> $' + totalDescuentos.toFixed(2));
document.write('<br><b>Monto total en concepto de descuentos por uniforme:</b> $' + totalDescuentosUniforme.toFixed(2));
document.write('<br><b>Cantidad de gerentes que tiene la empresa:</b> ' + cGerentes);
document.write('<br><b>Cantidad de otro tipo de empleados:</b> ' + cOtros);
