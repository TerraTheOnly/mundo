const paises = [
    { "name": "África do Sul", "population": 63000000, "area": 1221037, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_South_Africa.svg?width=160" },
    { "name": "Angola", "population": 36700000, "area": 1246700, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Angola.svg?width=160" },
    { "name": "Argélia", "population": 46000000, "area": 2381741, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Algeria.svg?width=160" },
    { "name": "Benim", "population": 14000000, "area": 114763, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Benin.svg?width=160" },
    { "name": "Botsuana", "population": 2500000, "area": 581730, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Botswana.svg?width=160" },
    { "name": "Burquina Faso", "population": 23000000, "area": 272967, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Burkina_Faso.svg?width=160" },
    { "name": "Burundi", "population": 13200000, "area": 27834, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Burundi.svg?width=160" },
    { "name": "Cabo Verde", "population": 525000, "area": 4033, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Cape_Verde.svg?width=160" },
    { "name": "Camarões", "population": 28600000, "area": 475440, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Cameroon.svg?width=160" },
    { "name": "Chade", "population": 18300000, "area": 1284000, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Chad.svg?width=160" },
    { "name": "Comores", "population": 850000, "area": 2235, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Comoros.svg?width=160" },
    { "name": "Congo", "population": 6100000, "area": 342000, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Republic_of_the_Congo.svg?width=160" },
    { "name": "Costa do Marfim", "population": 31900000, "area": 322463, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_C%C3%B4te_d%27Ivoire.svg?width=160" },
    { "name": "Djibuti", "population": 1150000, "area": 23200, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Djibouti.svg?width=160" },
    { "name": "Egito", "population": 114500000, "area": 1002450, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Egypt.svg?width=160" },
    { "name": "Eritreia", "population": 3500000, "area": 117600, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Eritrea.svg?width=160" },
    { "name": "Essuatíni", "population": 1210000, "area": 17364, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Eswatini.svg?width=160" },
    { "name": "Etiópia", "population": 128000000, "area": 1104300, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ethiopia.svg?width=160" },
    { "name": "Gabão", "population": 2400000, "area": 267668, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Gabon.svg?width=160" },
    { "name": "Gâmbia", "population": 2800000, "area": 11295, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_The_Gambia.svg?width=160" },
    { "name": "Gana", "population": 34100000, "area": 238533, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ghana.svg?width=160" },
    { "name": "Guiné", "population": 14200000, "area": 245857, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Guinea.svg?width=160" },
    { "name": "Guiné-Bissau", "population": 2200000, "area": 36125, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Guinea-Bissau.svg?width=160" },
    { "name": "Guiné Equatorial", "population": 1800000, "area": 28051, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Equatorial_Guinea.svg?width=160" },
    { "name": "Lesoto", "population": 2300000, "area": 30355, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Lesotho.svg?width=160" },
    { "name": "Libéria", "population": 5500000, "area": 111369, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Liberia.svg?width=160" },
    { "name": "Líbia", "population": 7000000, "area": 1759540, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Libya.svg?width=160" },
    { "name": "Madagascar", "population": 30300000, "area": 587041, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Madagascar.svg?width=160" },
    { "name": "Malaui", "population": 21100000, "area": 118484, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Malawi.svg?width=160" },
    { "name": "Mali", "population": 23300000, "area": 1240192, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Mali.svg?width=160" },
    { "name": "Marrocos", "population": 37800000, "area": 446550, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Morocco.svg?width=160" },
    { "name": "Maurício", "population": 1260000, "area": 2040, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Mauritius.svg?width=160" },
    { "name": "Mauritânia", "population": 4900000, "area": 1030700, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Mauritania.svg?width=160" },
    { "name": "Moçambique", "population": 34600000, "area": 801590, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Mozambique.svg?width=160" },
    { "name": "Namíbia", "population": 3000000, "area": 825615, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Namibia.svg?width=160" },
    { "name": "Níger", "population": 27000000, "area": 1267000, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Niger.svg?width=160" },
    { "name": "Nigéria", "population": 227000000, "area": 923768, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Nigeria.svg?width=160" },
    { "name": "Quênia", "population": 55100000, "area": 580367, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Kenya.svg?width=160" },
    { "name": "República Centro-Africana", "population": 5300000, "area": 622984, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Central_African_Republic.svg?width=160" },
    { "name": "República Democrática do Congo", "population": 105000000, "area": 2344858, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Democratic_Republic_of_the_Congo.svg?width=160" },
    { "name": "Ruanda", "population": 14300000, "area": 26338, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Rwanda.svg?width=160" },
    { "name": "São Tomé e Príncipe", "population": 235000, "area": 964, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg?width=160" },
    { "name": "Senegal", "population": 17800000, "area": 196722, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Senegal.svg?width=160" },
    { "name": "Seicheles", "population": 100000, "area": 455, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Seychelles.svg?width=160" },
    { "name": "Serra Leoa", "population": 8600000, "area": 71740, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Sierra_Leone.svg?width=160" },
    { "name": "Somália", "population": 18100000, "area": 637657, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Somalia.svg?width=160" },
    { "name": "Sudão", "population": 48100000, "area": 1861484, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Sudan.svg?width=160" },
    { "name": "Sudão do Sul", "population": 11400000, "area": 644329, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_South_Sudan.svg?width=160" },
    { "name": "Tanzânia", "population": 67400000, "area": 945087, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Tanzania.svg?width=160" },
    { "name": "Togo", "population": 9300000, "area": 56785, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Togo.svg?width=160" },
    { "name": "Tunísia", "population": 12300000, "area": 163610, "continent": "África", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Tunisia.svg?width=160" },
    { "name": "Uganda", "population": 49000000, "area": 241550, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Uganda.svg?width=160" },
    { "name": "Zâmbia", "population": 20200000, "area": 752618, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Zambia.svg?width=160" },
    { "name": "Zimbabue", "population": 16300000, "area": 390757, "continent": "África", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Zimbabwe.svg?width=160" },

    { "name": "Afeganistão", "population": 42000000, "area": 652230, "continent": "Ásia", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Taliban.svg?width=160" },
    { "name": "Arábia Saudita", "population": 33000000, "area": 2149690, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Saudi_Arabia.svg?width=160" },
    { "name": "Armênia", "population": 2950000, "area": 29743, "continent": "Ásia", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Armenia.svg?width=160" },
    { "name": "Azerbaijão", "population": 10400000, "area": 86600, "continent": "Ásia", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Azerbaijan.svg?width=160" },
    { "name": "Bahrein", "population": 1500000, "area": 778, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Bahrain.svg?width=160" },
    { "name": "Bangladesh", "population": 173000000, "area": 147570, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Bangladesh.svg?width=160" },
    { "name": "Brunei", "population": 450000, "area": 5765, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Brunei.svg?width=160" },
    { "name": "Butão", "population": 790000, "area": 38394, "continent": "Ásia", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Bhutan.svg?width=160" },
    { "name": "Camboja", "population": 17000000, "area": 181035, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Cambodia.svg?width=160" },
    { "name": "Catar", "population": 2700000, "area": 11586, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Qatar.svg?width=160" },
    { "name": "Cazaquistão", "population": 20000000, "area": 2724900, "continent": "Ásia", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Kazakhstan.svg?width=160" },
    { "name": "China", "population": 1409000000, "area": 9596961, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_People%27s_Republic_of_China.svg?width=160" },
    { "name": "Chipre", "population": 1260000, "area": 9251, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Cyprus.svg?width=160" },
    { "name": "Singapura", "population": 6000000, "area": 728, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Singapore.svg?width=160" },
    { "name": "Coreia do Norte", "population": 26500000, "area": 120538, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_North_Korea.svg?width=160" },
    { "name": "Coreia do Sul", "population": 51700000, "area": 100210, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_South_Korea.svg?width=160" },
    { "name": "Emirados Árabes Unidos", "population": 11000000, "area": 83600, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_Arab_Emirates.svg?width=160" },
    { "name": "Filipinas", "population": 115000000, "area": 300000, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Philippines.svg?width=160" },
    { "name": "Geórgia", "population": 3700000, "area": 69700, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Georgia.svg?width=160" },
    { "name": "Iêmen", "population": 35000000, "area": 527968, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Yemen.svg?width=160" },
    { "name": "Índia", "population": 1450000000, "area": 3287263, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_India.svg?width=160" },
    { "name": "Indonésia", "population": 281000000, "area": 1904569, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Indonesia.svg?width=160" },
    { "name": "Irã", "population": 90000000, "area": 1648195, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iran.svg?width=160" },
    { "name": "Iraque", "population": 46000000, "area": 438317, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iraq.svg?width=160" },
    //{ "name": "Israel", "population": 9900000, "area": 22072, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Israel.svg?width=160" },
    { "name": "Japão", "population": 123000000, "area": 377975, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Japan.svg?width=160" },
    { "name": "Jordânia", "population": 11500000, "area": 89342, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Jordan.svg?width=160" },
    { "name": "Kuwait", "population": 4900000, "area": 17818, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Kuwait.svg?width=160" },
    { "name": "Laos", "population": 7700000, "area": 236800, "continent": "Ásia", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Laos.svg?width=160" },
    { "name": "Líbano", "population": 5400000, "area": 10452, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Lebanon.svg?width=160" },
    { "name": "Malásia", "population": 34000000, "area": 330803, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Malaysia.svg?width=160" },
    { "name": "Maldivas", "population": 520000, "area": 298, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Maldives.svg?width=160" },
    { "name": "Mianmar", "population": 54000000, "area": 676578, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Myanmar.svg?width=160" },
    { "name": "Mongólia", "population": 3500000, "area": 1564116, "continent": "Ásia", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Mongolia.svg?width=160" },
    { "name": "Nepal", "population": 29600000, "area": 147181, "continent": "Ásia", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Nepal.svg?width=160" },
    { "name": "Omã", "population": 5200000, "area": 309500, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Oman.svg?width=160" },
    { "name": "Palestina", "population": 5500000, "area": 6020, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Palestine.svg?width=160" },
    { "name": "Paquistão", "population": 245000000, "area": 881913, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Pakistan.svg?width=160" },
    { "name": "Quirguistão", "population": 7200000, "area": 199951, "continent": "Ásia", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Kyrgyzstan.svg?width=160" },
    { "name": "Síria", "population": 24000000, "area": 185180, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Syria.svg?width=160" },
    { "name": "Sri Lanka", "population": 22000000, "area": 65610, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Sri_Lanka.svg?width=160" },
    { "name": "Tadjiquistão", "population": 10500000, "area": 143100, "continent": "Ásia", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Tajikistan.svg?width=160" },
    { "name": "Tailândia", "population": 71700000, "area": 513120, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Thailand.svg?width=160" },
    { "name": "Timor-Leste", "population": 1400000, "area": 14874, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_East_Timor.svg?width=160" },
    { "name": "Turcomenistão", "population": 7500000, "area": 488100, "continent": "Ásia", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Turkmenistan.svg?width=160" },
    { "name": "Turquia", "population": 85500000, "area": 783562, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Turkey.svg?width=160" },
    { "name": "Uzbequistão", "population": 36000000, "area": 447400, "continent": "Ásia", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Uzbekistan.svg?width=160" },
    { "name": "Vietnã", "population": 101000000, "area": 331212, "continent": "Ásia", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Vietnam.svg?width=160" },

    { "name": "Albânia", "population": 2400000, "area": 28748, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Albania.svg?width=160" },
    { "name": "Alemanha", "population": 84500000, "area": 357022, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Germany.svg?width=160" },
    { "name": "Andorra", "population": 80000, "area": 468, "continent": "Europa", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Andorra.svg?width=160" },
    { "name": "Áustria", "population": 9100000, "area": 83871, "continent": "Europa", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Austria.svg?width=160" },
    { "name": "Bélgica", "population": 11800000, "area": 30528, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Belgium.svg?width=160" },
    { "name": "Bielorrússia", "population": 9200000, "area": 207600, "continent": "Europa", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Belarus.svg?width=160" },
    { "name": "Bósnia e Herzegovina", "population": 3200000, "area": 51209, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Bosnia_and_Herzegovina.svg?width=160" },
    { "name": "Bulgária", "population": 6400000, "area": 110879, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Bulgaria.svg?width=160" },
    { "name": "Croácia", "population": 3860000, "area": 56594, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Croatia.svg?width=160" },
    { "name": "Dinamarca", "population": 5960000, "area": 42933, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Denmark.svg?width=160" },
    { "name": "Eslováquia", "population": 5420000, "area": 49035, "continent": "Europa", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Slovakia.svg?width=160" },
    { "name": "Eslovênia", "population": 2120000, "area": 20273, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Slovenia.svg?width=160" },
    { "name": "Espanha", "population": 48600000, "area": 505990, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Spain.svg?width=160" },
    { "name": "Estônia", "population": 1370000, "area": 45228, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Estonia.svg?width=160" },
    { "name": "Finlândia", "population": 5600000, "area": 338424, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Finland.svg?width=160" },
    { "name": "França", "population": 68200000, "area": 643801, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_France.svg?width=160" },
    { "name": "Grécia", "population": 10400000, "area": 131957, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Greece.svg?width=160" },
    { "name": "Hungria", "population": 9600000, "area": 93028, "continent": "Europa", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Hungary.svg?width=160" },
    { "name": "Irlanda", "population": 5300000, "area": 70273, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ireland.svg?width=160" },
    { "name": "Islândia", "population": 390000, "area": 103000, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iceland.svg?width=160" },
    { "name": "Itália", "population": 58900000, "area": 301340, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Italy.svg?width=160" },
    { "name": "Letônia", "population": 1880000, "area": 64589, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Latvia.svg?width=160" },
    { "name": "Liechtenstein", "population": 40000, "area": 160, "continent": "Europa", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Liechtenstein.svg?width=160" },
    { "name": "Lituânia", "population": 2900000, "area": 65300, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Lithuania.svg?width=160" },
    { "name": "Luxemburgo", "population": 660000, "area": 2586, "continent": "Europa", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Luxembourg.svg?width=160" },
    { "name": "Macedônia do Norte", "population": 1830000, "area": 25713, "continent": "Europa", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_North_Macedonia.svg?width=160" },
    { "name": "Malta", "population": 540000, "area": 316, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Malta.svg?width=160" },
    { "name": "Moldávia", "population": 2400000, "area": 33846, "continent": "Europa", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Moldova.svg?width=160" },
    { "name": "Mônaco", "population": 39000, "area": 2, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Monaco.svg?width=160" },
    { "name": "Montenegro", "population": 620000, "area": 13812, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Montenegro.svg?width=160" },
    { "name": "Noruega", "population": 5550000, "area": 385207, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Norway.svg?width=160" },
    { "name": "Países Baixos", "population": 17900000, "area": 41850, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Netherlands.svg?width=160" },
    { "name": "Polônia", "population": 36600000, "area": 312696, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Poland.svg?width=160" },
    { "name": "Portugal", "population": 10400000, "area": 92090, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Portugal.svg?width=160" },
    { "name": "Reino Unido", "population": 68300000, "area": 243610, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_Kingdom.svg?width=160" },
    { "name": "República Tcheca", "population": 10900000, "area": 78867, "continent": "Europa", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Czech_Republic.svg?width=160" },
    { "name": "Romênia", "population": 19100000, "area": 238397, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Romania.svg?width=160" },
    { "name": "Rússia", "population": 144000000, "area": 17098246, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Russia.svg?width=160" },
    { "name": "San Marino", "population": 34000, "area": 61, "continent": "Europa", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_San_Marino.svg?width=160" },
    { "name": "Sérvia", "population": 6600000, "area": 88361, "continent": "Europa", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Serbia.svg?width=160" },
    { "name": "Suécia", "population": 10600000, "area": 450295, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Sweden.svg?width=160" },
    { "name": "Suíça", "population": 8900000, "area": 41285, "continent": "Europa", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Switzerland.svg?width=160" },
    { "name": "Ucrânia", "population": 38000000, "area": 603550, "continent": "Europa", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ukraine.svg?width=160" },
    { "name": "Vaticano", "population": 800, "area": 0.44, "continent": "Europa", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Vatican_City.svg?width=160" },

    { "name": "Antígua e Barbuda", "population": 94000, "area": 442, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Antigua_and_Barbuda.svg?width=160" },
    { "name": "Bahamas", "population": 400000, "area": 13943, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Bahamas.svg?width=160" },
    { "name": "Barbados", "population": 282000, "area": 430, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Barbados.svg?width=160" },
    { "name": "Belize", "population": 410000, "area": 22966, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Belize.svg?width=160" },
    { "name": "Canadá", "population": 41300000, "area": 9984670, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Canada.svg?width=160" },
    { "name": "Costa Rica", "population": 5200000, "area": 51100, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Costa_Rica.svg?width=160" },
    { "name": "Cuba", "population": 11000000, "area": 109884, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Cuba.svg?width=160" },
    { "name": "Dominica", "population": 73000, "area": 751, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Dominica.svg?width=160" },
    { "name": "El Salvador", "population": 6300000, "area": 21041, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_El_Salvador.svg?width=160" },
    { "name": "Estados Unidos", "population": 340000000, "area": 9833517, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States.svg?width=160" },
    { "name": "Granada", "population": 126000, "area": 344, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Grenada.svg?width=160" },
    { "name": "Guatemala", "population": 18000000, "area": 108889, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Guatemala.svg?width=160" },
    { "name": "Haiti", "population": 11700000, "area": 27750, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Haiti.svg?width=160" },
    { "name": "Honduras", "population": 10800000, "area": 112492, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Honduras.svg?width=160" },
    { "name": "Jamaica", "population": 2800000, "area": 10991, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Jamaica.svg?width=160" },
    { "name": "México", "population": 130000000, "area": 1964375, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Mexico.svg?width=160" },
    { "name": "Nicarágua", "population": 6900000, "area": 130373, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Nicaragua.svg?width=160" },
    { "name": "Panamá", "population": 4500000, "area": 75417, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Panama.svg?width=160" },
    { "name": "República Dominicana", "population": 11300000, "area": 48671, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Dominican_Republic.svg?width=160" },
    { "name": "Santa Lúcia", "population": 180000, "area": 616, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Saint_Lucia.svg?width=160" },
    { "name": "São Cristóvão e Nevis", "population": 48000, "area": 261, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Saint_Kitts_and_Nevis.svg?width=160" },
    { "name": "São Vicente e Granadinas", "population": 100000, "area": 389, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Saint_Vincent_and_the_Grenadines.svg?width=160" },
    { "name": "Trinidad e Tobago", "population": 1370000, "area": 5130, "continent": "América do Norte", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Trinidad_and_Tobago.svg?width=160" },

    { "name": "Argentina", "population": 46000000, "area": 2780400, "continent": "América do Sul", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Argentina.svg?width=160" },
    { "name": "Bolívia", "population": 12400000, "area": 1098581, "continent": "América do Sul", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Bolivia.svg?width=160" },
    { "name": "Brasil", "population": 212000000, "area": 8515767, "continent": "América do Sul", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Brazil.svg?width=160" },
    { "name": "Chile", "population": 19800000, "area": 756102, "continent": "América do Sul", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Chile.svg?width=160" },
    { "name": "Colômbia", "population": 52000000, "area": 1141748, "continent": "América do Sul", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colombia.svg?width=160" },
    { "name": "Equador", "population": 18100000, "area": 283561, "continent": "América do Sul", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ecuador.svg?width=160" },
    { "name": "Guiana", "population": 830000, "area": 214969, "continent": "América do Sul", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Guyana.svg?width=160" },
    { "name": "Paraguai", "population": 6800000, "area": 406752, "continent": "América do Sul", "hasCoast": false, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Paraguay.svg?width=160" },
    { "name": "Peru", "population": 34400000, "area": 1285216, "continent": "América do Sul", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Peru.svg?width=160" },
    { "name": "Suriname", "population": 620000, "area": 163820, "continent": "América do Sul", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Suriname.svg?width=160" },
    { "name": "Uruguai", "population": 3400000, "area": 176215, "continent": "América do Sul", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Uruguay.svg?width=160" },
    { "name": "Venezuela", "population": 28400000, "area": 912050, "continent": "América do Sul", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Venezuela.svg?width=160" },

    { "name": "Austrália", "population": 27000000, "area": 7692024, "continent": "Oceania", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Australia.svg?width=160" },
    { "name": "Fiji", "population": 930000, "area": 18272, "continent": "Oceania", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Fiji.svg?width=160" },
    { "name": "Ilhas Marshall", "population": 38000, "area": 181, "continent": "Oceania", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Marshall_Islands.svg?width=160" },
    { "name": "Ilhas Salomão", "population": 740000, "area": 28896, "continent": "Oceania", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Solomon_Islands.svg?width=160" },
    { "name": "Kiribati", "population": 134000, "area": 811, "continent": "Oceania", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Kiribati.svg?width=160" },
    { "name": "Micronésia", "population": 115000, "area": 702, "continent": "Oceania", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Federated_States_of_Micronesia.svg?width=160" },
    { "name": "Nauru", "population": 12500, "area": 21, "continent": "Oceania", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Nauru.svg?width=160" },
    { "name": "Nova Zelândia", "population": 5300000, "area": 268838, "continent": "Oceania", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_New_Zealand.svg?width=160" },
    { "name": "Palau", "population": 18000, "area": 459, "continent": "Oceania", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Palau.svg?width=160" },
    { "name": "Papua-Nova Guiné", "population": 10300000, "area": 462840, "continent": "Oceania", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Papua_New_Guinea.svg?width=160" },
    { "name": "Samoa", "population": 220000, "area": 2842, "continent": "Oceania", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Samoa.svg?width=160" },
    { "name": "Tonga", "population": 100000, "area": 747, "continent": "Oceania", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Tonga.svg?width=160" },
    { "name": "Tuvalu", "population": 11000, "area": 26, "continent": "Oceania", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Tuvalu.svg?width=160" },
    { "name": "Vanuatu", "population": 330000, "area": 12189, "continent": "Oceania", "hasCoast": true, "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Vanuatu.svg?width=160" }
]
const paisesTentados = [];
let paisSecreto = {};
let tentativas = 0;

const btnPalpite = document.getElementById("btn-palpite");
const inputPalpite = document.getElementById("input-palpite");
const previewPalpite = document.getElementById("preview-container");
const aviso = document.getElementById("aviso");
const tentativasCounter = document.getElementById("tentativas");
const palpitesContainer = document.getElementById("palpites-container");
const winDialog = document.getElementById("popup-vitoria");

const AVISOS = {
    jaTentou: "Você já tentou esse país!",
    vazio: "Escreva alguma coisa!",
    naoExiste: "Esse país não existe!"
}

btnPalpite.addEventListener('click', validarPalpite)
inputPalpite.addEventListener('input', mostrarPreviewPalpite)

function formatarTexto(txt) {
    return txt
        .trim()                                 //tira espaços vazios
        .toLowerCase()                          //transforma tudo em minuscula
        .normalize("NFD")                       //normaliza e tira acentos
        .replace(/[\u0300-\u036f]/g, "");       //troca caracteres de acentos por versão normal
}

function mostrarAviso(msg) { aviso.textContent = msg; }
function limparAviso() { aviso.textContent = ""; }

function atualizarTentativas() { tentativasCounter.textContent = "Tentativas: " + tentativas; }

function criarElemento(tipo, conteudo) {
    const el = document.createElement(tipo);
    el.innerHTML = conteudo;
    return el;
}

function sortearPais() {
    paisSecreto = paises[Math.floor(Math.random() * paises.length)];
    //console.log(paisSecreto);
}

function mostrarPreviewPalpite() {
    limparPreviewPalpite();

    const search = formatarTexto(inputPalpite.value);
    if (search == "") { return; }

    paises
        .filter(function (pais) { return formatarTexto(pais.name).startsWith(search); })    //filter - pega apenas paises com os caracteres iguais ao digitado
        .slice(0, 5)                                                                        //splice - pega só os 5 primeiros
        .forEach(function (pais) {                                                          //forEach - 
            const novoEl = criarElemento("span", pais.name); // nome original, com acento
            novoEl.classList.add("previewPalpite-ind");
            novoEl.addEventListener('click', function () {
                inputPalpite.value = pais.name;
                validarPalpite();
            });
            previewPalpite.appendChild(novoEl);
        });
}
function limparPreviewPalpite() { previewPalpite.innerHTML = ""; }

function validarPalpite() {
    const search = formatarTexto(inputPalpite.value);

    //confere se n ta vazio
    if (search == "") {
        mostrarAviso(AVISOS.vazio);
        return;
    }

    //confere se o pais existe mesmo
    const paisEscolhido = paises.find(function (pais) {return formatarTexto(pais.name) == search;}); 
    if (!paisEscolhido) {
        mostrarAviso(AVISOS.naoExiste);
        return;
    }

    if (paisesTentados.includes(paisEscolhido.name)) {
        mostrarAviso(AVISOS.jaTentou);
        return;
    }

    limparAviso();
    limparPreviewPalpite();

    mostrarPalpite(paisEscolhido);
    paisesTentados.push(paisEscolhido.name);

    inputPalpite.value = "";
    
    if (paisEscolhido.name == paisSecreto.name) { 
        mostrarVitoria(paisEscolhido); 
    } else {
        tentativas++;
        atualizarTentativas();
    }
}

function mostrarVitoria(pais) {
    const attemptCount = paisesTentados.length;

    document.getElementById("vitoria-pais").textContent = pais.name;
    document.getElementById("vitoria-tentativas").textContent = attemptCount == 1
        ? "Acertou de primeira!"
        : "Acertou em " + attemptCount + " tentativas";
    document.getElementById("vitoria-continente").textContent = pais.continent;
    document.getElementById("vitoria-populacao").textContent = pais.population.toLocaleString("pt-BR");
    document.getElementById("vitoria-area").textContent = pais.area.toLocaleString("pt-BR") + " km²";
    document.getElementById("vitoria-costa").textContent = pais.hasCoast ? "Sim" : "Não";

    inputPalpite.disabled = true;
    btnPalpite.disabled = true;

    winDialog.showModal();
}

function mostrarPalpite(paisEscolhido) {
    let div, quase;

    let divBase = criarElemento('div', '');
    divBase.classList.add("palpite");

    let divInfo = criarElemento('div', '');
    divInfo.classList.add("palpite-stat");
    
    let divNome = criarElemento('div', paisEscolhido.name)
    divNome.classList.add("palpite-nome");
    let fotoBandeira = criarElemento('img');
    fotoBandeira.src = paisEscolhido.flag;
    fotoBandeira.classList.add('palpite-img')
    
    divInfo.appendChild(divNome)
    divInfo.appendChild(fotoBandeira)
    divBase.appendChild(divInfo);

    let divContinente = criarElemento('div', paisEscolhido.continent);
    divContinente.classList.add("palpite-stat");

    divContinente.classList.add((paisSecreto.continent == paisEscolhido.continent) ? "palpite-stat-certo" : "palpite-stat-errado");
    divBase.appendChild(divContinente);

    //--------------------------------------POPULAÇÃO--------------------------------------

    let divPopulation = criarElemento('div', "");
    divPopulation.classList.add("palpite-stat");

    let popFormatada = paisEscolhido.population;
    if (paisEscolhido.population >= 1000000000) {popFormatada = Math.round(paisEscolhido.population / 100000000) / 10 + "bi"} 
    else if (paisEscolhido.population >= 1000000) {popFormatada = Math.round(paisEscolhido.population / 100000) / 10 + "mi"} 
    else if (paisEscolhido.population >= 1000) {popFormatada = Math.round(paisEscolhido.population / 1000) / 10 + "k"}

    diff = Math.abs(paisEscolhido.population - paisSecreto.population);
    quase = diff < (paisSecreto.population / 2);
    if (paisEscolhido.population == paisSecreto.population) {divPopulation.innerHTML = popFormatada;} 
    else if (paisEscolhido.population > paisSecreto.population) {divPopulation.innerHTML = popFormatada + " ↓";} 
    else {divPopulation.innerHTML = popFormatada + " ↑";}

    if (paisEscolhido.population == paisSecreto.population) {divPopulation.classList.add("palpite-stat-certo");}
    else if (quase) {divPopulation.classList.add("palpite-stat-quase");}
    else {divPopulation.classList.add("palpite-stat-errado");}

    divBase.appendChild(divPopulation);

    //--------------------------------------ÁREA--------------------------------------

    let divArea = criarElemento('div', "");
    divArea.classList.add("palpite-stat");

    diff = Math.abs(paisEscolhido.area - paisSecreto.area);
    quase = diff < (paisSecreto.area / 2);

    let areaFormatada = paisEscolhido.area;
    if (paisEscolhido.area >= 1000000) {areaFormatada = Math.round(paisEscolhido.area / 100000) / 10 + "mi"} 
    else if (paisEscolhido.area >= 1000) {areaFormatada = Math.round(paisEscolhido.area / 1000) / 10 + "k"}

    if (paisEscolhido.area == paisSecreto.area) {divArea.innerHTML = areaFormatada;} 
    else if (paisEscolhido.area > paisSecreto.area) {divArea.innerHTML = areaFormatada + " ↓";} 
    else {divArea.innerHTML = areaFormatada + " ↑";}

    if (paisEscolhido.area == paisSecreto.area) {divArea.classList.add("palpite-stat-certo");}
    else if (quase) {divArea.classList.add("palpite-stat-quase");}
    else {divArea.classList.add("palpite-stat-errado");}

    divBase.appendChild(divArea);

    //--------------------------------------COSTA--------------------------------------

    let divCosta = criarElemento('div', paisEscolhido.hasCoast ? "Sim" : "Não");
    divCosta.classList.add("palpite-stat");

    if (paisSecreto.hasCoast == paisEscolhido.hasCoast) {divCosta.classList.add("palpite-stat-certo");} 
    else {divCosta.classList.add("palpite-stat-errado");}

    divBase.appendChild(divCosta);

    //----------------------------------------------------------------------------

    palpitesContainer.appendChild(divBase);
}

document.getElementById('btn-fechar-vitoria').addEventListener('click', function() {
    window.location.reload();
})

sortearPais();
atualizarTentativas();