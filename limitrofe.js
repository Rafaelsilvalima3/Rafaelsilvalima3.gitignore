const municipiosLimitrofesData = {
    "São Paulo": ["Guarulhos", "Osasco", "Barueri", "Mauá", "Diadema", "São Bernardo do Campo", "Santo André", "Caieiras", "Taboão da Serra", "Embu das Artes", "Mogi das Cruzes"],
    "Rio de Janeiro": ["Niterói", "Duque de Caxias", "Nova Iguaçu", "São Gonçalo", "Belford Roxo", "Itaboraí", "Mesquita", "Nilópolis", "Magé", "Queimados"],
    "Belo Horizonte": ["Contagem", "Betim", "Sabará", "Nova Lima", "Ribeirão das Neves", "Santa Luzia", "Ibirité", "Esmeraldas", "Brumadinho"],
    "Curitiba": ["São José dos Pinhais", "Colombo", "Pinhais", "Araucária", "Campo Largo", "Almirante Tamandaré", "Fazenda Rio Grande", "Quatro Barras"],
    "Porto Alegre": ["Canoas", "Viamão", "Alvorada", "Cachoeirinha", "Gravataí", "Guaíba", "Eldorado do Sul", "Novo Hamburgo"],
    "Salvador": ["Lauro de Freitas", "Simões Filho", "Camaçari", "Dias d'Ávila", "Vera Cruz", "São Francisco do Conde", "Madre de Deus"],
    "Fortaleza": ["Caucaia", "Maracanaú", "Eusébio", "Aquiraz", "Pacatuba", "Itaitinga", "Horizonte", "Maranguape"],
    "Brasília": ["Taguatinga", "Ceilândia", "Samambaia", "Sobradinho", "Planaltina", "Gama", "Santa Maria", "Paranoá"],
    "Manaus": ["Iranduba", "Careiro da Várzea", "Rio Preto da Eva", "Manacapuru", "Itacoatiara", "Novo Airão"],
    "Recife": ["Olinda", "Jaboatão dos Guararapes", "Paulista", "Camaragibe", "São Lourenço da Mata", "Abreu e Lima", "Cabo de Santo Agostinho", "Ipojuca"],
    "Goiânia": ["Aparecida de Goiânia", "Trindade", "Senador Canedo", "Goianira", "Hidrolândia", "Abadia de Goiás", "Anápolis"],
    "Belém": ["Ananindeua", "Marituba", "Benevides", "Santa Bárbara do Pará", "Santa Izabel do Pará", "Barcarena"],
    "Campinas": ["Hortolândia", "Sumaré", "Indaiatuba", "Valinhos", "Vinhedo", "Paulínia", "Jaguariúna", "Monte Mor"],
    "São Luís": ["Paço do Lumiar", "Raposa", "São José de Ribamar", "Rosário", "Bacabeira"],
    "Florianópolis": ["São José", "Palhoça", "Biguaçu", "Santo Amaro da Imperatriz", "Antônio Carlos"],
    "Vitória": ["Vila Velha", "Cariacica", "Serra", "Guarapari", "Viana"],
    "Maceió": ["Rio Largo", "Satuba", "Santa Luzia do Norte", "Coqueiro Seco", "Marechal Deodoro", "Messias"],
    "Natal": ["Parnamirim", "Macaíba", "São Gonçalo do Amarante", "Extremoz", "Ceará-Mirim"],
    "João Pessoa": ["Cabedelo", "Santa Rita", "Bayeux", "Conde", "Alhandra"],
    "Aracaju": ["Nossa Senhora do Socorro", "São Cristóvão", "Barra dos Coqueiros", "Laranjeiras", "Itaporanga d'Ajuda"],
    "Cuiabá": ["Várzea Grande", "Nossa Senhora do Livramento", "Santo Antônio do Leverger", "Acorizal"],
    "Campo Grande": ["Terenos", "Sidrolândia", "Jaraguari", "Rochedo", "Nova Alvorada do Sul"],
    "Teresina": ["Timon (MA)", "União", "Altos", "José de Freitas", "Demerval Lobão"],
    "Macapá": ["Santana", "Mazagão", "Itaubal"],
    "Palmas": ["Porto Nacional", "Paraíso do Tocantins", "Lajeado", "Monte do Carmo"],
    "Boa Vista": ["Cantá", "Alto Alegre", "Bonfim", "Mucajaí"],
    "Rio Branco": ["Senador Guiomard", "Bujari", "Acrelândia", "Plácido de Castro"],
    "Porto Velho": ["Candeias do Jamari", "Itapuã do Oeste", "Humaitá (AM)", "Cujubim"],
    "São Gonçalo": ["Niterói", "Itaboraí", "Maricá", "Rio de Janeiro", "Guapimirim"],
    "Niterói": ["São Gonçalo", "Rio de Janeiro", "Maricá", "Itaboraí"],
    "Contagem": ["Belo Horizonte", "Betim", "Esmeraldas", "Ibirité", "Ribeirão das Neves", "Santa Luzia"],
    "Betim": ["Belo Horizonte", "Contagem", "Ibirité", "Sarzedo", "Esmeraldas", "Mário Campos"],
    "Uberlândia": ["Araguari", "Uberaba", "Monte Alegre de Minas", "Indianópolis", "Tupaciguara"],
    "Ribeirão Preto": ["Sertãozinho", "Jaboticabal", "Cravinhos", "Serrana", "Serrana"],
    "Sorocaba": ["Votorantim", "Itu", "Araçoiaba da Serra", "Salto de Pirapora", "Mairinque"],
    "Niterói": ["Rio de Janeiro", "São Gonçalo", "Maricá", "Itaboraí"],
    "Guarulhos": ["São Paulo", "Mairiporã", "Arujá", "Itaquaquecetuba", "Ferraz de Vasconcelos"],
    "Osasco": ["São Paulo", "Carapicuíba", "Barueri", "Taboão da Serra", "Cotia"],
    "Canoas": ["Porto Alegre", "Esteio", "Sapucaia do Sul", "Nova Santa Rita", "Gravataí"],
    "Santa Maria": ["São Sepé", "Itaara", "Restinga Sêca", "Dilermando de Aguiar", "São Pedro do Sul"],
    "Maringá": ["Sarandi", "Paiçandu", "Mandaguaçu", "Marialva", "Dr. Camargo"],
    "Joinville": ["Araquari", "São Francisco do Sul", "Garuva", "Schroeder", "Jaraguá do Sul"],
    "Londrina": ["Cambé", "Ibiporã", "Rolândia", "Jataizinho", "Assaí"],
    "Blumenau": ["Gaspar", "Indaial", "Pomerode", "Brusque", "Guabiruba"],
    "Caxias do Sul": ["Farroupilha", "Flores da Cunha", "São Marcos", "Bento Gonçalves", "Garibaldi"],
    "Foz do Iguaçu": ["Santa Terezinha de Itaipu", "Ciudad del Este (PY)", "Puerto Iguazú (AR)", "Medianeira"],
    "Petrolina": ["Juazeiro (BA)", "Lagoa Grande", "Orocó", "Dormentes", "Santa Maria da Boa Vista"],
    "Feira de Santana": ["Santo Estêvão", "São Gonçalo dos Campos", "Conceição da Feira", "Tanquinho", "Amélia Rodrigues"],
    "Anápolis": ["Goiânia", "Aparecida de Goiânia", "Trindade", "Senador Canedo", "Inhumas"],
    "Mossoró": ["Areia Branca", "Baraúna", "Tibau", "Grossos", "Upanema"],
    "Caruaru": ["Bezerros", "São Caetano", "Toritama", "Riacho das Almas", "Agrestina"],
    "Vila Velha": ["Vitória", "Cariacica", "Serra", "Guarapari", "Viana"],
    "Francisco Beltrão": ["Pato Branco", "Ampére", "Marmeleiro", "Dois Vizinhos", "Verê"],
    "Patos de Minas": ["Presidente Olegário", "Lagoa Formosa", "Carmo do Paranaíba", "Varjão de Minas", "Guarda-Mor"],
    "Carapicuíba": ["Osasco", "Barueri", "Jandira", "Cotia", "Itapevi"],
    "São Bernardo do Campo": ["Santo André", "Diadema", "São Paulo", "Mauá", "Ribeirão Pires"],
    "Santo André": ["São Bernardo do Campo", "São Caetano do Sul", "Mauá", "Ribeirão Pires", "Diadema"],
    "Diadema": ["São Bernardo do Campo", "São Paulo", "Santo André", "Mauá"],
    "Jundiaí": ["Várzea Paulista", "Campo Limpo Paulista", "Itupeva", "Cabreúva", "Jarinu", "Louveira"],
    "Taubaté": ["Pindamonhangaba", "Caçapava", "Tremembé", "Redenção da Serra", "São Luís do Paraitinga"],
    "São José dos Campos": ["Caçapava", "Jacareí", "Monteiro Lobato", "Jambeiro", "Igaratá"],
    "Sorocaba": ["Votorantim", "Araçoiaba da Serra", "Piedade", "Salto de Pirapora", "Itu"],
    "Piracicaba": ["Limeira", "Santa Bárbara d'Oeste", "Capivari", "Saltinho", "São Pedro"],
    "Franca": ["Ribeirão Corrente", "Restinga", "Ibiraci", "Patrocínio Paulista", "Itirapuã"],
    "Marília": ["Vera Cruz", "Garça", "Alto Alegre", "Pompeia", "Oriente"],
    "Bauru": ["Agudos", "Piratininga", "Arealva", "Avaí", "Lençóis Paulista"],
    "Itu": ["Salto", "Cabreúva", "Porto Feliz", "Sorocaba", "Indaiatuba"],
    "Ribeirão Preto": ["Cravinhos", "Jardinópolis", "Serrana", "Sertãozinho", "Pontal"],
    "Santa Maria": ["São Sepé", "Dilermando de Aguiar", "Itaara", "Restinga Sêca", "Silveira Martins"],
    "Ponta Grossa": ["Castro", "Carambeí", "Palmeira", "Teixeira Soares", "Imbituva"],
    "Londrina": ["Ibiporã", "Cambé", "Rolândia", "Jataizinho", "Assaí"],
    "Cascavel": ["Toledo", "Santa Tereza do Oeste", "Corbélia", "Céu Azul", "Lindoeste"],
    "Chapecó": ["Xaxim", "Cordilheira Alta", "Nova Itaberaba", "Guatambu", "Águas Frias"],
    "Pelotas": ["Rio Grande", "Capão do Leão", "São Lourenço do Sul", "Turuçu", "Arroio do Padre"],
    "Santa Cruz do Sul": ["Vera Cruz", "Venâncio Aires", "Candelária", "Sinimbu", "Rio Pardo"],
    "Caxias do Sul": ["Flores da Cunha", "Farroupilha", "São Marcos", "Antônio Prado", "Nova Petrópolis"],
    "Novo Hamburgo": ["São Leopoldo", "Campo Bom", "Estância Velha", "Ivoti", "Sapiranga"],
    "Juiz de Fora": ["Matias Barbosa", "Chácara", "Bicas", "Coronel Pacheco", "Pequeri"],
    "Uberaba": ["Conceição das Alagoas", "Veríssimo", "Campo Florido", "Delta", "Conquista"],
    "Montes Claros": ["Glaucilândia", "Juramento", "Mirabela", "Coração de Jesus", "São João da Ponte"],
    "Patos de Minas": ["Lagoa Formosa", "Presidente Olegário", "Carmo do Paranaíba", "Varjão de Minas", "São Gotardo"],
    "Araraquara": ["Américo Brasiliense", "Boa Esperança do Sul", "Rincão", "Ibaté", "Gavião Peixoto"],
    "Assis": ["Cândido Mota", "Paraguaçu Paulista", "Platina", "Tarumã", "Echaporã"],
    "Barretos": ["Colina", "Jaborandi", "Guaíra", "Colômbia", "Viradouro"],
    "Itapeva": ["Buri", "Nova Campina", "Ribeirão Branco", "Riversul", "Itaberá"],
    "Avaré": ["Iaras", "Arandu", "Cerqueira César", "Manduri", "Itatinga"],
    "Presidente Prudente": ["Alfredo Marcondes", "Pirapozinho", "Regente Feijó", "Presidente Bernardes", "Álvares Machado"],
    "Caruaru": ["Bezerros", "São Caetano", "Toritama", "Agrestina", "Santa Cruz do Capibaribe"],
    "Petrolina": ["Juazeiro (BA)", "Lagoa Grande", "Santa Maria da Boa Vista", "Dormentes", "Afrânio"],
    "Aracaju": ["Nossa Senhora do Socorro", "São Cristóvão", "Barra dos Coqueiros", "Itaporanga d'Ajuda", "Laranjeiras"],
    "Campina Grande": ["Lagoa Seca", "Queimadas", "Massaranduba", "Puxinanã", "Fagundes"],
    "Ilhéus": ["Itabuna", "Uruçuca", "Una", "Itacaré", "Barro Preto"],
    "Teixeira de Freitas": ["Caravelas", "Medeiros Neto", "Alcobaça", "Prado", "Lajedão"],
    "Juazeiro do Norte": ["Crato", "Barbalha", "Missão Velha", "Mauriti", "Caririaçu"],
    "Mossoró": ["Tibau", "Baraúna", "Areia Branca", "Upanema", "Grossos"],
    "Aparecida de Goiânia": ["Goiânia", "Senador Canedo", "Hidrolândia", "Trindade", "Abadia de Goiás"],
    "Anápolis": ["Nerópolis", "Silvânia", "Campo Limpo de Goiás", "Leopoldo de Bulhões", "Terezópolis de Goiás"],
    "Cascavel": ["Toledo", "Santa Tereza do Oeste", "Corbélia", "Céu Azul", "Lindoeste"],
    "Santa Maria": ["São Sepé", "Restinga Sêca", "Itaara", "Dilermando de Aguiar", "Silveira Martins"],
    "Itajaí": ["Balneário Camboriú", "Navegantes", "Brusque", "Camboriú", "Penha"],
    "Pelotas": ["Rio Grande", "Capão do Leão", "São Lourenço do Sul", "Turuçu", "Arroio do Padre"],
    "Itabuna": ["Ilhéus", "Itapé", "Buerarema", "Jussari", "Barro Preto"],
    "São Carlos": ["Ibaté", "Araraquara", "Descalvado", "Ribeirão Bonito", "Dourado"],
    "Taubaté": ["Pindamonhangaba", "Caçapava", "Tremembé", "Redenção da Serra", "São Luís do Paraitinga"],
    "Rondonópolis": ["Guiratinga", "Juscimeira", "São José do Povo", "Poxoréu", "Campo Verde"],
    "Itapetininga": ["Alambari", "Angatuba", "Capão Bonito", "Guareí", "Tatuí"],
    "Caxias": ["Codó", "Aldeias Altas", "Coelho Neto", "Timon", "São João do Sóter"],
    "Passo Fundo": ["Ernestina", "Marau", "Pontão", "Coxilha", "Sertão"],
    "Campos dos Goytacazes": ["São João da Barra", "São Francisco de Itabapoana", "Quissamã", "Carapebus", "Conceição de Macabu"],
    "Varginha": ["Três Corações", "Elói Mendes", "Monsenhor Paulo", "Carmo da Cachoeira", "Campanha"],
    "Lages": ["Otacílio Costa", "Correia Pinto", "Painel", "Capão Alto", "Anita Garibaldi"],
    "Chapecó": ["Xanxerê", "Cordilheira Alta", "Guatambu", "Nova Itaberaba", "Águas Frias"],
    "Divinópolis": ["Carmo do Cajuru", "São Gonçalo do Pará", "Igaratinga", "Cláudio", "Itaúna"],
    "Patos": ["Santa Terezinha", "Teixeira", "Quixaba", "Cacimba de Areia", "Mãe d'Água"],
    "São João del Rei": ["Tiradentes", "Prados", "Nazareno", "Coronel Xavier Chaves", "Santa Cruz de Minas"],
    "Petrolina": ["Juazeiro (BA)", "Lagoa Grande", "Santa Maria da Boa Vista", "Dormentes", "Afrânio"],
    "Aparecida de Goiânia": ["Goiânia", "Trindade", "Senador Canedo", "Hidrolândia", "Abadia de Goiás"],
    "Barbacena": ["Antônio Carlos", "Ressaquinha", "Alfredo Vasconcelos", "Carandaí", "Desterro do Melo"],
    "São Leopoldo": ["Sapucaia do Sul", "Novo Hamburgo", "Portão", "Estância Velha", "Canoas"],
    "Santa Cruz do Sul": ["Vera Cruz", "Venâncio Aires", "Candelária", "Sinimbu", "Rio Pardo"],
    "Uberlândia": ["Araguari", "Uberaba", "Monte Alegre de Minas", "Indianópolis", "Tupaciguara"],
    "Vitória da Conquista": ["Anagé", "Belo Campo", "Barra do Choça", "Itambé", "Cândido Sales"],
    "Juazeiro do Norte": ["Crato", "Barbalha", "Missão Velha", "Caririaçu", "Jardim"],
    "Londrina": ["Cambé", "Ibiporã", "Rolândia", "Jataizinho", "Assaí"],
    "Marabá": ["Itupiranga", "Nova Ipixuna", "São João do Araguaia", "Brejo Grande do Araguaia", "Bom Jesus do Tocantins"],
    "Parauapebas": ["Marabá", "Curionópolis", "Canaã dos Carajás", "Eldorado dos Carajás", "São Félix do Xingu"],
    "Caruaru": ["Bezerros", "São Caetano", "Toritama", "Agrestina", "Santa Cruz do Capibaribe"],
    "Santa Inês": ["Pindaré-Mirim", "Monção", "Bela Vista do Maranhão", "Tufilândia", "Alto Alegre do Pindaré"],
    "Teresópolis": ["Petrópolis", "Nova Friburgo", "Cachoeiras de Macacu", "Guapimirim", "Sumidouro"],
    "Varginha": ["Três Pontas", "Carmo da Cachoeira", "Elói Mendes", "Monsenhor Paulo", "Campanha"],
    "Arapiraca": ["Craíbas", "Girau do Ponciano", "Feira Grande", "Lagoa da Canoa", "Igaci"],
    "Juiz de Fora": ["Matias Barbosa", "Chácara", "Bicas", "Coronel Pacheco", "Pequeri"],
    "Montes Claros": ["Glaucilândia", "Juramento", "Mirabela", "Coração de Jesus", "São João da Ponte"],
    "Petrópolis": ["Teresópolis", "São José do Vale do Rio Preto", "Areal", "Magé", "Paraíba do Sul"],
    "Sobral": ["Forquilha", "Massapê", "Meruoca", "Santana do Acaraú", "Groaíras"],
    "Abaetetuba": ["Barcarena", "Igarapé-Miri", "Moju", "Cametá", "Bujaru"],
    "Ribeirão Preto": ["Cravinhos", "Jardinópolis", "Serrana", "Sertãozinho", "Pontal"],
    "Anápolis": ["Nerópolis", "Silvânia", "Campo Limpo de Goiás", "Leopoldo de Bulhões", "Terezópolis de Goiás"],
    "Teófilo Otoni": ["Itaipé", "Ataléia", "Novo Oriente de Minas", "Pavão", "Carlos Chagas"],
    "São Luís": ["Paço do Lumiar", "Raposa", "São José de Ribamar", "Rosário", "Bacabeira"],
    "Belém": ["Ananindeua", "Marituba", "Benevides", "Santa Bárbara do Pará", "Santa Izabel do Pará"],
    "Goiânia": ["Aparecida de Goiânia", "Trindade", "Senador Canedo", "Goianira", "Hidrolândia"],
    "Recife": ["Olinda", "Jaboatão dos Guararapes", "Paulista", "Camaragibe", "São Lourenço da Mata"],
    "Teresina": ["Timon (MA)", "União", "Altos", "José de Freitas", "Demerval Lobão", "Lagoa do Piauí", "Beneditinos", "Monsenhor Gil"]
};

