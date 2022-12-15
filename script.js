//Adultos comem 350gr de carne por hora e bebem 1050ml de cerveja por hora;
//Crianças consomem metade da comida dos adultos e bebem 600ml de refrigerante por hora;
//O total de pessoas (adultos + crianças) consomem 500ml de agua por hora;

let adultos = document.querySelector('#adultos');
let crianças = document.querySelector('#crianças');
let duração = document.querySelector('#duração');

let resultado = document.querySelector('#resultado');

function medidaAgua(num) {
    if (num == 1) {
        return (num + ' Litro de água ou suco.')
    } else {
        return (num + ' Litros de água ou suco.')
    }
}

function medidaRefri(num) {
    if (num <= 1) {
        return (num + ' Litro de Refrigerante;')
    } else {
        return (num + ' Litros de Refrigerante;')
    }
}

function hora(num) {
    if (num == 1) {
        return (num + ' hora');
    } else {
        return (num + ' horas');
    }
}

function peso(num) {
    if (num >= 1000) {
        return (num / 1000 + ' Kg');
    } else {
        return (num + ' Gramas');
    }
}

function calc() {
    let carneAdultos = 350 * adultos.value * duração.value;
    let carneCrianças = 200 * crianças.value * duração.value;
    let totalCarne = carneAdultos + carneCrianças;
    let cerveja = (1050 * adultos.value * duração.value) / 350;
    let cervejaTotal = Math.ceil(cerveja);
    let refrigerante = 600 * crianças.value * duração.value / 1000;
    let refrigeranteTotal = Math.ceil(refrigerante);
    let agua = (parseInt(adultos.value) + parseInt(crianças.value)) * 250 * parseInt(duração.value) / 1000;
    let aguaTotal = Math.ceil(agua);
    if (adultos.value === '' || crianças.value === '' || duração.value === '') {
        alert('Por favor, insira um número mesmo que seja 0 e tente novamente!')
    } else {
        resultado.innerHTML = 'Para um churrasco com duração de ' + hora(duração.value) +
            ' serão necessários os seguintes itens: <br>' + ' &#127830 ' + peso(totalCarne) + ' de carne; <br>' +
            ' &#127866 ' + cervejaTotal + ' Latas de cerveja; <br>' + ' &#129380 ' + medidaRefri(refrigeranteTotal) +
             '<br>' + ' &#128688 ' + medidaAgua(aguaTotal);
    }
}