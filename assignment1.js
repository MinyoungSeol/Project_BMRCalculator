function impCal(gender, age, inch, pound, act){
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var inch = document.getElementById("inch").value;
    var pound = document.getElementById("pound").value;
    var act = document.getElementById("actLevelImp").value;
    
    var imperialBMR = (gender == 1) ? 66 + (13.76 * pound) + (12.7 * inch) - (6.76 * age):
                    655 + (4.35 * pound) + (4.7 * inch) - (4.7 * age);
    var imperialResult = (act == 1) ? (imperialBMR * 1.2):
                        (act == 2) ? (imperialBMR * 1.375):
                        (act == 3) ? (imperialBMR * 1.55):
                        (act == 4) ? (imperialBMR * 1.725):
                        imperialBMR * 1.9;
    document.getElementById("impresult").innerHTML = imperialResult.toFixed(2);
}

function metCal(gender, age, cm, kg, act){
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var cm = document.getElementById("cm").value;
    var kg = document.getElementById("kg").value;
    var act = document.getElementById("actLevelMet").value;


    var metricBMR = (gender == 1) ? 66.5 + (13.76 * kg) + (5.003 * cm) - (6.755 * age):
    655 + (9.563 * kg) + (1.850 * cm) - (4.676 * age);
    var metricResult = (act == 1) ? (metricBMR * 1.2):
                        (act == 2) ? (metricBMR * 1.375):
                        (act == 3) ? (metricBMR * 1.55):
                        (act == 4) ? (metricBMR * 1.725):
                        metricBMR * 1.9;
    document.getElementById("metresult").innerHTML = metricResult.toFixed(2);

}
