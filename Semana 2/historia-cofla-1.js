dineroCofla = prompt("Cuánto dinero tiene Cofla?")
dineroRoberto = prompt("Cuánto dinero tiene Roberto?")
dineroPedro = prompt("Cuánto dinero tiene Pedro?")

dineroCofla = parseInt(dineroCofla);


if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("cofla, comprate el helado de agua");
    alert("y te sobran " + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("cofla, comprate el helado de crema");
    alert("y te sobran " + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("cofla, comprate el bombon helado marca heladix");
    alert("y te sobran " + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("cofla, comprate el bombon helado marca heladovich");
    alert("y te sobran " + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("cofla, comprate el bombon helado marca helardo");
    alert("y te sobran " + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("cofla, comprate el potecito de helado con confites o el pote de 1/4kgs");
    alert("y te sobran " + (dineroCofla - 2.9));
} else {
    alert("lo siento cofla, no te alcanza para ninguno")
}



if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("roberto, comprate el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("roberto, comprate el helado de crema");
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("roberto, comprate el bombon helado marca heladix");
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("roberto, comprate el bombon helado marca heladovich");
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("roberto, comprate el bombon helado marca helardo");
}

else if (dineroRoberto >= 2.9) {
    alert("roberto, comprate el potecito de helado con confites o el pote de 1/4kgs");
} else {
    alert("lo siento roberto, no te alcanza para ninguno")
}



if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("pedro, comprate el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("pedro, comprate el helado de crema");
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("pedro, comprate el bombon helado marca heladix");
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("pedro, comprate el bombon helado marca heladovich");
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("pedro, comprate el bombon helado marca helardo");
}

else if (dineroPedro >= 2.9) {
    alert("pedro, comprate el potecito de helado con confites o el pote de 1/4kgs");
} else {
    alert("lo siento pedro, no te alcanza para ninguno")
}

