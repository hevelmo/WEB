$(document).ready(function(){
	var modelo, precio, enganche, plazo, plazo;

    modelo = $('h3#funding_result_data').text();
        $('input.fr_data').val(modelo);
    precio = $('p#funding_result_price').text();
        $('input.fr_price').val(precio);
    enganche = $('p#funding_result_engagement').text();
        $('input.fr_engagement').val(enganche);
    mensualidad = $('p#funding_result_monthly_payment').text();
        $('input.fr_monthly_payment').val(mensualidad);
    plazo = $('p#funding_result_months').text();
        $('input.fr_months').val(plazo);
});
