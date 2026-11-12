const paises = [
    { "name": "Africa do Sul", "population": 63000000, "area": 1221037, "continent": "Africa", "hasCoast": true },
    { "name": "Angola", "population": 36700000, "area": 1246700, "continent": "Africa", "hasCoast": true },
    { "name": "Argelia", "population": 46000000, "area": 2381741, "continent": "Africa", "hasCoast": true },
    { "name": "Benim", "population": 14000000, "area": 114763, "continent": "Africa", "hasCoast": true },
    { "name": "Botsuana", "population": 2500000, "area": 581730, "continent": "Africa", "hasCoast": false },
    { "name": "Burquina Faso", "population": 23000000, "area": 272967, "continent": "Africa", "hasCoast": false },
    { "name": "Burundi", "population": 13200000, "area": 27834, "continent": "Africa", "hasCoast": false },
    { "name": "Cabo Verde", "population": 525000, "area": 4033, "continent": "Africa", "hasCoast": true },
    { "name": "Camarões", "population": 28600000, "area": 475440, "continent": "Africa", "hasCoast": true },
    { "name": "Chade", "population": 18300000, "area": 1284000, "continent": "Africa", "hasCoast": false },
    { "name": "Comores", "population": 850000, "area": 2235, "continent": "Africa", "hasCoast": true },
    { "name": "Congo", "population": 6100000, "area": 342000, "continent": "Africa", "hasCoast": true },
    { "name": "Costa do Marfim", "population": 31900000, "area": 322463, "continent": "Africa", "hasCoast": true },
    { "name": "Djibuti", "population": 1150000, "area": 23200, "continent": "Africa", "hasCoast": true },
    { "name": "Egito", "population": 114500000, "area": 1002450, "continent": "Africa", "hasCoast": true },
    { "name": "Eritreia", "population": 3500000, "area": 117600, "continent": "Africa", "hasCoast": true },
    { "name": "Essuatíni", "population": 1210000, "area": 17364, "continent": "Africa", "hasCoast": false },
    { "name": "Etiópia", "population": 128000000, "area": 1104300, "continent": "Africa", "hasCoast": false },
    { "name": "Gabao", "population": 2400000, "area": 267668, "continent": "Africa", "hasCoast": true },
    { "name": "Gambia", "population": 2800000, "area": 11295, "continent": "Africa", "hasCoast": true },
    { "name": "Gana", "population": 34100000, "area": 238533, "continent": "Africa", "hasCoast": true },
    { "name": "Guine", "population": 14200000, "area": 245857, "continent": "Africa", "hasCoast": true },
    { "name": "Guine-Bissau", "population": 2200000, "area": 36125, "continent": "Africa", "hasCoast": true },
    { "name": "Guine Equatorial", "population": 1800000, "area": 28051, "continent": "Africa", "hasCoast": true },
    { "name": "Lesoto", "population": 2300000, "area": 30355, "continent": "Africa", "hasCoast": false },
    { "name": "Liberia", "population": 5500000, "area": 111369, "continent": "Africa", "hasCoast": true },
    { "name": "Líbia", "population": 7000000, "area": 1759540, "continent": "Africa", "hasCoast": true },
    { "name": "Madagascar", "population": 30300000, "area": 587041, "continent": "Africa", "hasCoast": true },
    { "name": "Malaui", "population": 21100000, "area": 118484, "continent": "Africa", "hasCoast": false },
    { "name": "Mali", "population": 23300000, "area": 1240192, "continent": "Africa", "hasCoast": false },
    { "name": "Marrocos", "population": 37800000, "area": 446550, "continent": "Africa", "hasCoast": true },
    { "name": "Maurício", "population": 1260000, "area": 2040, "continent": "Africa", "hasCoast": true },
    { "name": "Mauritania", "population": 4900000, "area": 1030700, "continent": "Africa", "hasCoast": true },
    { "name": "Moçambique", "population": 34600000, "area": 801590, "continent": "Africa", "hasCoast": true },
    { "name": "Namíbia", "population": 3000000, "area": 825615, "continent": "Africa", "hasCoast": true },
    { "name": "Níger", "population": 27000000, "area": 1267000, "continent": "Africa", "hasCoast": false },
    { "name": "Nigeria", "population": 227000000, "area": 923768, "continent": "Africa", "hasCoast": true },
    { "name": "Quênia", "population": 55100000, "area": 580367, "continent": "Africa", "hasCoast": true },
    { "name": "República Centro-Africana", "population": 5300000, "area": 622984, "continent": "Africa", "hasCoast": false },
    { "name": "República Democratica do Congo", "population": 105000000, "area": 2344858, "continent": "Africa", "hasCoast": true },
    { "name": "Ruanda", "population": 14300000, "area": 26338, "continent": "Africa", "hasCoast": false },
    { "name": "Sao Tome e Príncipe", "population": 235000, "area": 964, "continent": "Africa", "hasCoast": true },
    { "name": "Senegal", "population": 17800000, "area": 196722, "continent": "Africa", "hasCoast": true },
    { "name": "Seicheles", "population": 100000, "area": 455, "continent": "Africa", "hasCoast": true },
    { "name": "Serra Leoa", "population": 8600000, "area": 71740, "continent": "Africa", "hasCoast": true },
    { "name": "Somalia", "population": 18100000, "area": 637657, "continent": "Africa", "hasCoast": true },
    { "name": "Sudao", "population": 48100000, "area": 1861484, "continent": "Africa", "hasCoast": true },
    { "name": "Sudao do Sul", "population": 11400000, "area": 644329, "continent": "Africa", "hasCoast": false },
    { "name": "Tanzania", "population": 67400000, "area": 945087, "continent": "Africa", "hasCoast": true },
    { "name": "Togo", "population": 9300000, "area": 56785, "continent": "Africa", "hasCoast": true },
    { "name": "Tunísia", "population": 12300000, "area": 163610, "continent": "Africa", "hasCoast": true },
    { "name": "Uganda", "population": 49000000, "area": 241550, "continent": "Africa", "hasCoast": false },
    { "name": "Zambia", "population": 20200000, "area": 752618, "continent": "Africa", "hasCoast": false },
    { "name": "Zimbabue", "population": 16300000, "area": 390757, "continent": "Africa", "hasCoast": false },

    { "name": "Afeganistao", "population": 42000000, "area": 652230, "continent": "Asia", "hasCoast": false },
    { "name": "Arabia Saudita", "population": 33000000, "area": 2149690, "continent": "Asia", "hasCoast": true },
    { "name": "Armênia", "population": 2950000, "area": 29743, "continent": "Asia", "hasCoast": false },
    { "name": "Azerbaijao", "population": 10400000, "area": 86600, "continent": "Asia", "hasCoast": false },
    { "name": "Bahrein", "population": 1500000, "area": 778, "continent": "Asia", "hasCoast": true },
    { "name": "Bangladesh", "population": 173000000, "area": 147570, "continent": "Asia", "hasCoast": true },
    { "name": "Brunei", "population": 450000, "area": 5765, "continent": "Asia", "hasCoast": true },
    { "name": "Butao", "population": 790000, "area": 38394, "continent": "Asia", "hasCoast": false },
    { "name": "Camboja", "population": 17000000, "area": 181035, "continent": "Asia", "hasCoast": true },
    { "name": "Catar", "population": 2700000, "area": 11586, "continent": "Asia", "hasCoast": true },
    { "name": "Cazaquistao", "population": 20000000, "area": 2724900, "continent": "Asia", "hasCoast": false },
    { "name": "China", "population": 1409000000, "area": 9596961, "continent": "Asia", "hasCoast": true },
    { "name": "Chipre", "population": 1260000, "area": 9251, "continent": "Asia", "hasCoast": true },
    { "name": "Cingapura", "population": 6000000, "area": 728, "continent": "Asia", "hasCoast": true },
    { "name": "Coreia do Norte", "population": 26500000, "area": 120538, "continent": "Asia", "hasCoast": true },
    { "name": "Coreia do Sul", "population": 51700000, "area": 100210, "continent": "Asia", "hasCoast": true },
    { "name": "Emirados Arabes Unidos", "population": 11000000, "area": 83600, "continent": "Asia", "hasCoast": true },
    { "name": "Filipinas", "population": 115000000, "area": 300000, "continent": "Asia", "hasCoast": true },
    { "name": "Geórgia", "population": 3700000, "area": 69700, "continent": "Asia", "hasCoast": true },
    { "name": "Iêmen", "population": 35000000, "area": 527968, "continent": "Asia", "hasCoast": true },
    { "name": "Índia", "population": 1450000000, "area": 3287263, "continent": "Asia", "hasCoast": true },
    { "name": "Indonesia", "population": 281000000, "area": 1904569, "continent": "Asia", "hasCoast": true },
    { "name": "Ira", "population": 90000000, "area": 1648195, "continent": "Asia", "hasCoast": true },
    { "name": "Iraque", "population": 46000000, "area": 438317, "continent": "Asia", "hasCoast": true },
    //{ "name": "Israel", "population": 9900000, "area": 22072, "continent": "Asia", "hasCoast": true },
    { "name": "Japao", "population": 123000000, "area": 377975, "continent": "Asia", "hasCoast": true },
    { "name": "Jordania", "population": 11500000, "area": 89342, "continent": "Asia", "hasCoast": true },
    { "name": "Kuwait", "population": 4900000, "area": 17818, "continent": "Asia", "hasCoast": true },
    { "name": "Laos", "population": 7700000, "area": 236800, "continent": "Asia", "hasCoast": false },
    { "name": "Líbano", "population": 5400000, "area": 10452, "continent": "Asia", "hasCoast": true },
    { "name": "Malasia", "population": 34000000, "area": 330803, "continent": "Asia", "hasCoast": true },
    { "name": "Maldivas", "population": 520000, "area": 298, "continent": "Asia", "hasCoast": true },
    { "name": "Mianmar", "population": 54000000, "area": 676578, "continent": "Asia", "hasCoast": true },
    { "name": "Mongólia", "population": 3500000, "area": 1564116, "continent": "Asia", "hasCoast": false },
    { "name": "Nepal", "population": 29600000, "area": 147181, "continent": "Asia", "hasCoast": false },
    { "name": "Oma", "population": 5200000, "area": 309500, "continent": "Asia", "hasCoast": true },
    { "name": "Palestina", "population": 5500000, "area": 6020, "continent": "Asia", "hasCoast": true },
    { "name": "Paquistao", "population": 245000000, "area": 881913, "continent": "Asia", "hasCoast": true },
    { "name": "Quirguistao", "population": 7200000, "area": 199951, "continent": "Asia", "hasCoast": false },
    { "name": "Síria", "population": 24000000, "area": 185180, "continent": "Asia", "hasCoast": true },
    { "name": "Sri Lanka", "population": 22000000, "area": 65610, "continent": "Asia", "hasCoast": true },
    { "name": "Tadjiquistao", "population": 10500000, "area": 143100, "continent": "Asia", "hasCoast": false },
    { "name": "Tailandia", "population": 71700000, "area": 513120, "continent": "Asia", "hasCoast": true },
    { "name": "Timor-Leste", "population": 1400000, "area": 14874, "continent": "Asia", "hasCoast": true },
    { "name": "Turcomenistao", "population": 7500000, "area": 488100, "continent": "Asia", "hasCoast": false },
    { "name": "Turquia", "population": 85500000, "area": 783562, "continent": "Asia", "hasCoast": true },
    { "name": "Uzbequistao", "population": 36000000, "area": 447400, "continent": "Asia", "hasCoast": false },
    { "name": "Vietna", "population": 101000000, "area": 331212, "continent": "Asia", "hasCoast": true },

    { "name": "Albania", "population": 2400000, "area": 28748, "continent": "Europa", "hasCoast": true },
    { "name": "Alemanha", "population": 84500000, "area": 357022, "continent": "Europa", "hasCoast": true },
    { "name": "Andorra", "population": 80000, "area": 468, "continent": "Europa", "hasCoast": false },
    { "name": "Austria", "population": 9100000, "area": 83871, "continent": "Europa", "hasCoast": false },
    { "name": "Belgica", "population": 11800000, "area": 30528, "continent": "Europa", "hasCoast": true },
    { "name": "Bielorrússia", "population": 9200000, "area": 207600, "continent": "Europa", "hasCoast": false },
    { "name": "Bósnia e Herzegovina", "population": 3200000, "area": 51209, "continent": "Europa", "hasCoast": true },
    { "name": "Bulgaria", "population": 6400000, "area": 110879, "continent": "Europa", "hasCoast": true },
    { "name": "Croacia", "population": 3860000, "area": 56594, "continent": "Europa", "hasCoast": true },
    { "name": "Dinamarca", "population": 5960000, "area": 42933, "continent": "Europa", "hasCoast": true },
    { "name": "Eslovaquia", "population": 5420000, "area": 49035, "continent": "Europa", "hasCoast": false },
    { "name": "Eslovênia", "population": 2120000, "area": 20273, "continent": "Europa", "hasCoast": true },
    { "name": "Espanha", "population": 48600000, "area": 505990, "continent": "Europa", "hasCoast": true },
    { "name": "Estônia", "population": 1370000, "area": 45228, "continent": "Europa", "hasCoast": true },
    { "name": "Finlandia", "population": 5600000, "area": 338424, "continent": "Europa", "hasCoast": true },
    { "name": "França", "population": 68200000, "area": 643801, "continent": "Europa", "hasCoast": true },
    { "name": "Grecia", "population": 10400000, "area": 131957, "continent": "Europa", "hasCoast": true },
    { "name": "Hungria", "population": 9600000, "area": 93028, "continent": "Europa", "hasCoast": false },
    { "name": "Irlanda", "population": 5300000, "area": 70273, "continent": "Europa", "hasCoast": true },
    { "name": "Islandia", "population": 390000, "area": 103000, "continent": "Europa", "hasCoast": true },
    { "name": "Italia", "population": 58900000, "area": 301340, "continent": "Europa", "hasCoast": true },
    { "name": "Letônia", "population": 1880000, "area": 64589, "continent": "Europa", "hasCoast": true },
    { "name": "Liechtenstein", "population": 40000, "area": 160, "continent": "Europa", "hasCoast": false },
    { "name": "Lituania", "population": 2900000, "area": 65300, "continent": "Europa", "hasCoast": true },
    { "name": "Luxemburgo", "population": 660000, "area": 2586, "continent": "Europa", "hasCoast": false },
    { "name": "Macedônia do Norte", "population": 1830000, "area": 25713, "continent": "Europa", "hasCoast": false },
    { "name": "Malta", "population": 540000, "area": 316, "continent": "Europa", "hasCoast": true },
    { "name": "Moldavia", "population": 2400000, "area": 33846, "continent": "Europa", "hasCoast": false },
    { "name": "Mônaco", "population": 39000, "area": 2, "continent": "Europa", "hasCoast": true },
    { "name": "Montenegro", "population": 620000, "area": 13812, "continent": "Europa", "hasCoast": true },
    { "name": "Noruega", "population": 5550000, "area": 385207, "continent": "Europa", "hasCoast": true },
    { "name": "Países Baixos", "population": 17900000, "area": 41850, "continent": "Europa", "hasCoast": true },
    { "name": "Polônia", "population": 36600000, "area": 312696, "continent": "Europa", "hasCoast": true },
    { "name": "Portugal", "population": 10400000, "area": 92090, "continent": "Europa", "hasCoast": true },
    { "name": "Reino Unido", "population": 68300000, "area": 243610, "continent": "Europa", "hasCoast": true },
    { "name": "República Tcheca", "population": 10900000, "area": 78867, "continent": "Europa", "hasCoast": false },
    { "name": "Romênia", "population": 19100000, "area": 238397, "continent": "Europa", "hasCoast": true },
    { "name": "Rússia", "population": 144000000, "area": 17098246, "continent": "Europa", "hasCoast": true },
    { "name": "San Marino", "population": 34000, "area": 61, "continent": "Europa", "hasCoast": false },
    { "name": "Servia", "population": 6600000, "area": 88361, "continent": "Europa", "hasCoast": false },
    { "name": "Suecia", "population": 10600000, "area": 450295, "continent": "Europa", "hasCoast": true },
    { "name": "Suíça", "population": 8900000, "area": 41285, "continent": "Europa", "hasCoast": false },
    { "name": "Ucrania", "population": 38000000, "area": 603550, "continent": "Europa", "hasCoast": true },
    { "name": "Vaticano", "population": 800, "area": 0.44, "continent": "Europa", "hasCoast": false },

    { "name": "Antígua e Barbuda", "population": 94000, "area": 442, "continent": "America do Norte", "hasCoast": true },
    { "name": "Bahamas", "population": 400000, "area": 13943, "continent": "America do Norte", "hasCoast": true },
    { "name": "Barbados", "population": 282000, "area": 430, "continent": "America do Norte", "hasCoast": true },
    { "name": "Belize", "population": 410000, "area": 22966, "continent": "America do Norte", "hasCoast": true },
    { "name": "Canada", "population": 41300000, "area": 9984670, "continent": "America do Norte", "hasCoast": true },
    { "name": "Costa Rica", "population": 5200000, "area": 51100, "continent": "America do Norte", "hasCoast": true },
    { "name": "Cuba", "population": 11000000, "area": 109884, "continent": "America do Norte", "hasCoast": true },
    { "name": "Dominica", "population": 73000, "area": 751, "continent": "America do Norte", "hasCoast": true },
    { "name": "El Salvador", "population": 6300000, "area": 21041, "continent": "America do Norte", "hasCoast": true },
    { "name": "Estados Unidos", "population": 340000000, "area": 9833517, "continent": "America do Norte", "hasCoast": true },
    { "name": "Granada", "population": 126000, "area": 344, "continent": "America do Norte", "hasCoast": true },
    { "name": "Guatemala", "population": 18000000, "area": 108889, "continent": "America do Norte", "hasCoast": true },
    { "name": "Haiti", "population": 11700000, "area": 27750, "continent": "America do Norte", "hasCoast": true },
    { "name": "Honduras", "population": 10800000, "area": 112492, "continent": "America do Norte", "hasCoast": true },
    { "name": "Jamaica", "population": 2800000, "area": 10991, "continent": "America do Norte", "hasCoast": true },
    { "name": "Mexico", "population": 130000000, "area": 1964375, "continent": "America do Norte", "hasCoast": true },
    { "name": "Nicaragua", "population": 6900000, "area": 130373, "continent": "America do Norte", "hasCoast": true },
    { "name": "Panama", "population": 4500000, "area": 75417, "continent": "America do Norte", "hasCoast": true },
    { "name": "República Dominicana", "population": 11300000, "area": 48671, "continent": "America do Norte", "hasCoast": true },
    { "name": "Santa Lúcia", "population": 180000, "area": 616, "continent": "America do Norte", "hasCoast": true },
    { "name": "Sao Cristóvao e Nevis", "population": 48000, "area": 261, "continent": "America do Norte", "hasCoast": true },
    { "name": "Sao Vicente e Granadinas", "population": 100000, "area": 389, "continent": "America do Norte", "hasCoast": true },
    { "name": "Trinidad e Tobago", "population": 1370000, "area": 5130, "continent": "America do Norte", "hasCoast": true },

    { "name": "Argentina", "population": 46000000, "area": 2780400, "continent": "America do Sul", "hasCoast": true },
    { "name": "Bolívia", "population": 12400000, "area": 1098581, "continent": "America do Sul", "hasCoast": false },
    { "name": "Brasil", "population": 212000000, "area": 8515767, "continent": "America do Sul", "hasCoast": true },
    { "name": "Chile", "population": 19800000, "area": 756102, "continent": "America do Sul", "hasCoast": true },
    { "name": "Colômbia", "population": 52000000, "area": 1141748, "continent": "America do Sul", "hasCoast": true },
    { "name": "Equador", "population": 18100000, "area": 283561, "continent": "America do Sul", "hasCoast": true },
    { "name": "Guiana", "population": 830000, "area": 214969, "continent": "America do Sul", "hasCoast": true },
    { "name": "Paraguai", "population": 6800000, "area": 406752, "continent": "America do Sul", "hasCoast": false },
    { "name": "Peru", "population": 34400000, "area": 1285216, "continent": "America do Sul", "hasCoast": true },
    { "name": "Suriname", "population": 620000, "area": 163820, "continent": "America do Sul", "hasCoast": true },
    { "name": "Uruguai", "population": 3400000, "area": 176215, "continent": "America do Sul", "hasCoast": true },
    { "name": "Venezuela", "population": 28400000, "area": 912050, "continent": "America do Sul", "hasCoast": true },

    { "name": "Australia", "population": 27000000, "area": 7692024, "continent": "Oceania", "hasCoast": true },
    { "name": "Fiji", "population": 930000, "area": 18272, "continent": "Oceania", "hasCoast": true },
    { "name": "Ilhas Marshall", "population": 38000, "area": 181, "continent": "Oceania", "hasCoast": true },
    { "name": "Ilhas Salomao", "population": 740000, "area": 28896, "continent": "Oceania", "hasCoast": true },
    { "name": "Kiribati", "population": 134000, "area": 811, "continent": "Oceania", "hasCoast": true },
    { "name": "Micronesia", "population": 115000, "area": 702, "continent": "Oceania", "hasCoast": true },
    { "name": "Nauru", "population": 12500, "area": 21, "continent": "Oceania", "hasCoast": true },
    { "name": "Nova Zelandia", "population": 5300000, "area": 268838, "continent": "Oceania", "hasCoast": true },
    { "name": "Palau", "population": 18000, "area": 459, "continent": "Oceania", "hasCoast": true },
    { "name": "Papua-Nova Guine", "population": 10300000, "area": 462840, "continent": "Oceania", "hasCoast": true },
    { "name": "Samoa", "population": 220000, "area": 2842, "continent": "Oceania", "hasCoast": true },
    { "name": "Tonga", "population": 100000, "area": 747, "continent": "Oceania", "hasCoast": true },
    { "name": "Tuvalu", "population": 11000, "area": 26, "continent": "Oceania", "hasCoast": true },
    { "name": "Vanuatu", "population": 330000, "area": 12189, "continent": "Oceania", "hasCoast": true }
]
const paisesTentados = [];
let paisSecreto = {};

const btnPalpite = document.getElementById("btn-palpite");
const inputPalpite = document.getElementById("input-palpite");
const previewPalpite = document.getElementById("preview-container");
const aviso = document.getElementById("aviso");
const palpitesContainer = document.getElementById("palpites-container");

btnPalpite.addEventListener('click', validarPalpite)
inputPalpite.addEventListener('input', mostrarPreviewPalpite)

//deixa texto minusculo e sem acentos
//feito pra pesquisa de nomes
function formatarTexto(txt) {
    txt = txt.trim();
    txt = txt.toLowerCase();

    const acentosA = ["á", "à", "â", "ã"];
    acentosA.forEach(function(val) {txt.replace(val, "a");});
    
    const acentosE = ["é", "è", "ê"];
    acentosE.forEach(function(val) {txt.replace(val, "e");});

    const acentosI = ["í", "ì", "î"];
    acentosI.forEach(function(val) {txt.replace(val, "i");});

    const acentosO = ["ó", "ò", "ô", "õ"];
    acentosO.forEach(function(val) {txt.replace(val, "o");});

    const acentosU = ["ú", "ù", "û"];
    acentosU.forEach(function(val) {txt.replace(val, "u");});

    return txt;
}

//coloca texto no aviso
function mostrarAviso(msg) {aviso.textContent = msg;}
function limparAviso() {aviso.textContent = "";}

//cria um elemento HTML com o conteudo dado
function criarElemento(tipo, conteudo) {
    const el = document.createElement(tipo);
    el.innerHTML = conteudo;
    return el;
}

function sortearPais() {
    paisSecreto = paises[Math.floor(Math.random() * paises.length)];
    console.log(paisSecreto);
}

function mostrarPreviewPalpite() {
    limparPreviewPalpite();

    let val = inputPalpite.value;
    val = val.trim();
    val = val.toLowerCase();

    if (val == "") {return;}

    let previewCriados = 0;
    paises.forEach(function(pais) {
        let testName = pais.name;
        testName = testName.toLowerCase();

        if (testName.startsWith(val)) {
            if (previewCriados >= 5) {return;}
            previewCriados++;

            const novoEl = criarElemento("span", pais.name);
            novoEl.classList.add("previewPalpite-ind")
            novoEl.addEventListener('click', function() {
                inputPalpite.value = pais.name;
                validarPalpite();
            });
            previewPalpite.appendChild(novoEl);
        }
    })
}
function limparPreviewPalpite() {previewPalpite.innerHTML = "";}

function validarPalpite() {
    let val = inputPalpite.value;
    val = val.trim();

    if (val == "") {
        mostrarAviso("ta vazio irmao");
        return;
    }

    let ind = 0;
    let existe = false;
    paises.forEach(function(pais, index) {if (pais.name == val) {ind = index; existe = true;}});
    if (!existe) {
        mostrarAviso("esse país nao existe parça");
        return;
    }

    let jaTentou = false;
    paisesTentados.forEach(function(pais) {if (pais == val) {jaTentou = true;}})
    if (jaTentou) {
        mostrarAviso("tu ja tentou isso ai amigao plmds");
        return;
    }

    limparAviso();
    limparPreviewPalpite();

    mostrarPalpite(paises[ind]);

    console.log("validou")
    paisesTentados.push(val);

    inputPalpite.value = "";
}

function mostrarPalpite(pais) {
    const novoPalpite = criarElemento('span', 
        "nome:" + pais.name + 
        " população:" + pais.population + 
        " área:" + pais.area + 
        " continente:" + pais.continent + 
        " tem costa:" + pais.hasCoast
    );
    palpitesContainer.appendChild(novoPalpite);
}

sortearPais();

//comentario da kelsia vai tomar no cu