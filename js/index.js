let texto = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para São Paulo</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554, a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil. Aqui vão três dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para Las Vegas</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905. É considerada oficialmente como uma cidade desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu Nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para Moscou</b><br>Privet!<br>A capital russa fica situada às margens do Rio Moscou e, apesar de ser a cidade mais cosmopolita da Rússia, grande parte de sua história está preservada<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";

// Cidades avaliadas

var cidade1 = texto.substr(92, 9);

var cidade2 = texto.substr(643, 9);

var cidade3 = texto.substr(1281, 6);

var cidadesAvaliadas = `As cidades avaliadas foram: ${cidade1}, ${cidade2} e ${cidade3}.`
alert(cidadesAvaliadas)

//Roteiros A de São Paulo:

var SpPrimeiro = texto.substring(398,402);

var SpSegundo = texto.substring(404,418);

var SpTerceiro = texto.substring(420,431);

var LvPrimeiro = texto.substring(985,1002);

var LvSegundo = texto.substring(1004,1023);

var LvTerceiro = texto.substring(1025,1040);

var MsPrimeiro = texto.substring(1501,1526);

var MsSegundo = texto.substring(1528,1552);

var MsTerceiro = texto.substring(1554, 1571);

var RoteirosMs = `As localidades do Roteiro A para São Paulo são: ${SpPrimeiro}, ${SpSegundo} e ${SpTerceiro}. As de Las Vegas são: ${LvPrimeiro}, ${LvSegundo} e ${LvTerceiro}. E as localidades do Roteiro A para Moscou são: ${MsPrimeiro}, ${MsSegundo} e ${MsTerceiro}.`
alert(RoteirosMs)


// Quantidade de locais

var local1 = texto.substr(398, 4);
var local2 = texto.substr(404, 14);
var local3 = texto.substr(420, 11);
var local4 = texto.substr(985, 17);
var local5 = texto.substr(1004, 19);
var local6 = texto.substr(1025, 15);
var local7 = texto.substr(1501, 25);
var local8 = texto.substr(1528, 24);
var local9 = texto.substr(1554, 17);

var quantidadeLocais =  "9 locais citados no roteiro A: " + local1 + ", " + local2 + ", " + local3 + ", " + local4 + ", " + local5 + ", " + local6 + ", " + local7 + ", " + local8 + ", " + local9;
alert(quantidadeLocais);

// pontos turistico São Paulo centro

var legenda = "Nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo: ";

var pTuristicoSP = texto.substring(466,480);
var pTuristicoSP2 = texto.substring(482,498);
var pTuristicoSP3 = texto.substring(500,511);

var pTuristicosSP = legenda + pTuristicoSP + ", " + pTuristicoSP2 + ", " + pTuristicoSP3;

alert(pTuristicosSP);

// Bairro

var legendaDowntown = 'O nome dos pontos turísticos localizados no bairro Downtown da cidade de Los Angeles são: '

var  bairroDowntown = texto.substr(1079,65);

var lista = bairroDowntown.split(";");
var pTuristicosDowntown = `${legendaDowntown} ${lista}`

alert(pTuristicosDowntown)
