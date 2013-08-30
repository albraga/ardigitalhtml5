function Unidade(orgao, logradouro, bairro, localidade, cep, pib, serie) {
	this.orgao = orgao;
	this.logradouro = logradouro;
	this.bairro = bairro;
	this.localidade = localidade;
	this.cep = cep;
	this.pib = pib;
	this.serie = serie;
}

var unidades = [new Unidade('AC AGUA BRANCA','RUA JOSE VIDAL 91','CENTRO','AGUA BRANCA','58748970','30026723','BVDO13569'),
new Unidade('AC AGUA BRANCA','RUA JOSE VIDAL 91','CENTRO','AGUA BRANCA','58748970','30026724','BVDO13570'),
new Unidade('AC AGUA FRIA','BR 230 KM 24','CRISTO REDENTOR','JOAO PESSOA','58071900','30026725','BVDO13571'),
new Unidade('AC AGUA FRIA','BR 230 KM 24','CRISTO REDENTOR','JOAO PESSOA','58071900','30026726','BVDO13572'),
new Unidade('AC AGUIAR','RUA VEREADOR ODILIO PEREIRA LIMA S/N','CENTRO','AGUIAR','58778970','30026727','BVDO13573'),
new Unidade('AC AGUIAR','RUA VEREADOR ODILIO PEREIRA LIMA S/N','CENTRO','AGUIAR','58778970','30026728','BVDO13574'),
new Unidade('AC ALAGOA GRANDE','RUA APOLONIO ZENAIDE 700','CENTRO','ALAGOA GRANDE','58388970','30026729','BVDO13575'),
new Unidade('AC ALAGOA GRANDE','RUA APOLONIO ZENAIDE 700','CENTRO','ALAGOA GRANDE','58388970','30026730','BVDO13576'),
new Unidade('AC ALAGOA NOVA','RUA JOAO MOURA S/N','CENTRO','ALAGOA NOVA','58125970','30026731','BVDO13577'),
new Unidade('AC ALAGOA NOVA','RUA JOAO MOURA S/N','CENTRO','ALAGOA NOVA','58125970','30026732','BVDO13578'),
new Unidade('AC ALAGOINHA','RUA DEP FRANCISCO ANTONIO 33','CENTRO','ALAGOINHA','58390970','30026733','BVDO13603'),
new Unidade('AC ALAGOINHA','RUA DEP FRANCISCO ANTONIO 33','CENTRO','ALAGOINHA','58390970','30026734','BVDO13605'),
new Unidade('AC ALCANTIL','RUA SAO JOSE 244','CENTRO','ALCANTIL','58460970','30026735','BVDO13606'),
new Unidade('AC ALCANTIL','RUA SAO JOSE 244','CENTRO','ALCANTIL','58460970','30026736','BVDO13639'),
new Unidade('AC ALHANDRA','RUA PRES JOAO PESSOA S/N','CENTRO','ALHANDRA','58320970','30026737','BVDO13640'),
new Unidade('AC ALHANDRA','RUA PRES JOAO PESSOA S/N','CENTRO','ALHANDRA','58320970','30026738','BVDO13641'),
new Unidade('AC AMPARO','RUA VEREADOR CICERO SOARES S/N','CENTRO','AMPARO','58548970','30026739','BVDO13642'),
new Unidade('AC AMPARO','RUA VEREADOR CICERO SOARES S/N','CENTRO','AMPARO','58548970','30026740','BVDO13643'),
new Unidade('AC APARECIDA','RUA ANTONIO AMANCIO PIRES 175','CENTRO','APARECIDA','58823970','30026741','BVDO13644'),
new Unidade('AC APARECIDA','RUA ANTONIO AMANCIO PIRES 175','CENTRO','APARECIDA','58823970','30026742','BVDO13645'),
new Unidade('AC ARACAGI','RUA PE FRANCELINO VIANA 71','CENTRO','ARACAGI','58270970','30026743','BVDO13646'),
new Unidade('AC ARACAGI','RUA PE FRANCELINO VIANA 71','CENTRO','ARACAGI','58270970','30026744','BVDO13647'),
new Unidade('AC ARARA','RUA HERMES LIRA 7','CENTRO','ARARA','58396970','30026745','BVDO13648'),
new Unidade('AC ARARA','RUA HERMES LIRA 7','CENTRO','ARARA','58396970','30026746','BVDO13649'),
new Unidade('AC ARARUNA','RUA PE TARGINO SOBRINHO 175','CENTRO','ARARUNA','58233970','30026747','BVDO13650'),
new Unidade('AC ARARUNA','RUA PE TARGINO SOBRINHO 175','CENTRO','ARARUNA','58233970','30026748','BVDO13651'),
new Unidade('AC AREIA','RUA XAVIER JUNIOR 226','CENTRO','AREIA','58397970','30026749','BVDO13652'),
new Unidade('AC AREIA','RUA XAVIER JUNIOR 226','CENTRO','AREIA','58397970','30026750','BVDO13653'),
new Unidade('AC AREIA DE BARAUNAS','RUA VALDECII SALES 285','CENTRO','AREIA DE BARAUNAS','58732970','30026751','BVDO13654'),
new Unidade('AC AREIA DE BARAUNAS','RUA VALDECII SALES 285','CENTRO','AREIA DE BARAUNAS','58732970','30026752','BVDO13655'),
new Unidade('AC AREIA DE BARAUNAS','RUA VALDECII SALES 285','CENTRO','AREIA DE BARAUNAS','58732970','30026753','BVDO13656'),
new Unidade('AC AREIAL','RUA SAO JOSE 859','CENTRO','AREIAL','58140970','30026754','BVDO13657'),
new Unidade('AC AREIAL','RUA SAO JOSE 859','CENTRO','AREIAL','58140970','30026755','BVDO13658'),
new Unidade('AC AROEIRAS','RUA JOSE ZEFERINO DE PAULA S/N','CENTRO','AROEIRAS','58489970','30026756','BVDO13689'),
new Unidade('AC AROEIRAS','RUA JOSE ZEFERINO DE PAULA S/N','CENTRO','AROEIRAS','58489970','30026757','BVDO13690'),
new Unidade('AC ASSUNCAO','RUA TEREZA BALDUINO DA NOBREGA 99','CENTRO','ASSUNCAO','58685970','30026758','BVDO13691'),
new Unidade('AC ASSUNCAO','RUA TEREZA BALDUINO DA NOBREGA 99','CENTRO','ASSUNCAO','58685970','30026759','BVDO13692'),
new Unidade('AC BAIA DA TRAICAO','RUA DOM PEDRO II 639','CENTRO','BAIA DA TRAICAO','58295970','30026760','BVDO13693'),
new Unidade('AC BAIA DA TRAICAO','RUA DOM PEDRO II 639','CENTRO','BAIA DA TRAICAO','58295970','30026761','BVDO13694'),
new Unidade('AC BANANEIRAS','RUA DOUTOR JOSE SIZENANDO 609','CENTRO','BANANEIRAS','58220970','30026762','BVDO13695'),
new Unidade('AC BANANEIRAS','RUA DOUTOR JOSE SIZENANDO 610','CENTRO','BANANEIRAS','58220971','30026763','BVDO13696'),
new Unidade('AC BARRA DE SANTA ROSA','RUA NSRA DA CONCEICAO 49','CENTRO','BARRA DE SANTA ROSA','58170970','30026764','BVDO13697'),
new Unidade('AC BARRA DE SANTA ROSA','RUA NSRA DA CONCEICAO 50','CENTRO','BARRA DE SANTA ROSA','58170971','30026765','BVDO13698'),
new Unidade('AC BARRA DE SANTANA','RUA JOSE BRAS DO REGO 108','CENTRO','BARRA DE SANTANA','58458970','30026766','BVDO13699'),
new Unidade('AC BARRA DE SANTANA','RUA JOSE BRAS DO REGO 109','CENTRO','BARRA DE SANTANA','58458971','30026767','BVDO13700'),
new Unidade('AC BARRA DE SAO MIGUEL','RUA JOAO PINTO DA SILVA 109','CENTRO','BARRA DE SAO MIGUEL','58483970','30026768','BVDO13701'),
new Unidade('AC BARRA DE SAO MIGUEL','RUA JOAO PINTO DA SILVA 110','CENTRO','BARRA DE SAO MIGUEL','58483971','30026769','BVDO13702'),
new Unidade('AC BAYEUX','AVENIDA LIBERDADE S/N','CENTRO','BAYEUX','58306970','30026770','BVDO13703'),
new Unidade('AC BAYEUX','AVENIDA LIBERDADE S/N','CENTRO','BAYEUX','58306971','30026771','BVDO13704'),
new Unidade('AC BELEM','PRACA 6 DE SETEMBRO 61','CENTRO','BELEM','58255970','30026772','BVDO13705'),
new Unidade('AC BELEM','PRACA 6 DE SETEMBRO 62','CENTRO','BELEM','58255971','30026773','BVDO13706'),
new Unidade('AC BELEM DO BREJO DO CRUZ','RUA CONEGO JOSE VIANA S/N','CENTRO','BELEM DO BREJO DO CRUZ','58895970','30026774','BVDO13707'),
new Unidade('AC BELEM DO BREJO DO CRUZ','RUA CONEGO JOSE VIANA S/N','CENTRO','BELEM DO BREJO DO CRUZ','58895971','30026775','BVDO13708'),
new Unidade('AC BERNARDINO BATISTA','RUA VICENTE EGIDIO DOS SANTOS S/N','CENTRO','BERNARDINO BATISTA','58922970','30026776','BVDO13709'),
new Unidade('AC BERNARDINO BATISTA','RUA VICENTE EGIDIO DOS SANTOS S/N','CENTRO','BERNARDINO BATISTA','58922971','30026777','BVDO13710'),
new Unidade('AC BOA VENTURA','RUA PEDRO ARRUDA S/N','CENTRO','BOA VENTURA','58993970','30026778','BVDO13711'),
new Unidade('AC BOA VENTURA','RUA PEDRO ARRUDA S/N','CENTRO','BOA VENTURA','58993971','30026779','BVDO13712'),
new Unidade('AC BOA VISTA','RUA SEVERINO B CABRAL 86','CENTRO','BOA VISTA','58123970','30026780','BVDO13713'),
new Unidade('AC BOA VISTA','RUA SEVERINO B CABRAL 87','CENTRO','BOA VISTA','58123971','30026781','BVDO13714'),
new Unidade('AC BOM JESUS','RUA MANOEL A F FIGUEIREDO 28','CENTRO','BOM JESUS','58930970','30026782','BVDO13715'),
new Unidade('AC BOM JESUS','RUA MANOEL A F FIGUEIREDO 29','CENTRO','BOM JESUS','58930971','30026783','BVDO13716'),
new Unidade('AC BOM SUCESSO','PRACA CICERO FERREIRA DA SILVA S/N','CENTRO','BOM SUCESSO','58887970','30026784','BVDO13717'),
new Unidade('AC BOM SUCESSO','PRACA CICERO FERREIRA DA SILVA S/N','CENTRO','BOM SUCESSO','58887970','30026785','BVDO13718'),
new Unidade('AC BONITO DE SANTA FE','RUA AUREA DIAS DE ALMEIDA S/N','CENTRO','BONITO DE SANTA FE','58960970','30026786','BVDO13739'),
new Unidade('AC BONITO DE SANTA FE','RUA AUREA DIAS DE ALMEIDA S/N','CENTRO','BONITO DE SANTA FE','58960970','30026787','BVDO13740'),
new Unidade('AC BOQUEIRAO','AVENIDA SEVERIANO MACEDO 22','CENTRO','BOQUEIRAO','58450970','30026788','BVDO13741'),
new Unidade('AC BOQUEIRAO','AVENIDA SEVERIANO MACEDO 22','CENTRO','BOQUEIRAO','58450970','30026789','BVDO13742'),
new Unidade('AC BORBOREMA','PRACA JOSE AMANCIO RAMALHO 6','CENTRO','BORBOREMA','58394970','30026790','BVDO13743'),
new Unidade('AC BORBOREMA','PRACA JOSE AMANCIO RAMALHO 6','CENTRO','BORBOREMA','58394970','30026791','BVDO13744'),
new Unidade('AC BREJO DO CRUZ','RUA CARLOS GOMES 99','CENTRO','BREJO DO CRUZ','58890970','30026792','BVDO13745'),
new Unidade('AC BREJO DO CRUZ','RUA CARLOS GOMES 99','CENTRO','BREJO DO CRUZ','58890970','30026793','BVDO13746'),
new Unidade('AC BREJO DOS SANTOS','RUA FLORIANO PEIXOTO 38','CENTRO','BREJO DOS SANTOS','58880970','30026794','BVDO13747'),
new Unidade('AC BREJO DOS SANTOS','RUA FLORIANO PEIXOTO 38','CENTRO','BREJO DOS SANTOS','58880970','30026795','BVDO13748'),
new Unidade('AC CAAPORA','RUA SALOMAO VELOSO 51','CENTRO','CAAPORA','58326970','30026796','BVDO13799'),
new Unidade('AC CAAPORA','RUA SALOMAO VELOSO 51','CENTRO','CAAPORA','58326970','30026797','BVDO13800'),
new Unidade('AC CABACEIRAS','RUA CEL MARACAJA S/N','CENTRO','CABACEIRAS','58480970','30026798','BVDO13801'),
new Unidade('AC CABACEIRAS','RUA CEL MARACAJA S/N','CENTRO','CABACEIRAS','58480970','30026799','BVDO13802'),
new Unidade('AC CABEDELO','RUA PRES JOAO PESSOA 37','CENTRO','CABEDELO','58310970','30026800','BVDO13803'),
new Unidade('AC CABEDELO','RUA PRES JOAO PESSOA 37','CENTRO','CABEDELO','58310970','30026801','BVDO13804'),
new Unidade('AC CACHOEIRA DOS INDIOS','RUA SERGIO MOREIRA 64','CENTRO','CACHOEIRA DOS INDIOS','58935970','30026802','BVDO13805'),
new Unidade('AC CACHOEIRA DOS INDIOS','RUA SERGIO MOREIRA 64','CENTRO','CACHOEIRA DOS INDIOS','58935970','30026803','BVDO13806'),
new Unidade('AC CACIMBA DE AREIA','RUA ANTONIO F DE MENDONCA S/N','CENTRO','CACIMBA DE AREIA','58730970','30026804','BVDO13807'),
new Unidade('AC CACIMBA DE AREIA','RUA ANTONIO F DE MENDONCA S/N','CENTRO','CACIMBA DE AREIA','58730971','30026805','BVDO13808'),
new Unidade('AC CACIMBA DE DENTRO','RUA PRES JOAO PESSOA S/N','CENTRO','CACIMBA DE DENTRO','58230970','30026806','BVDO13809'),
new Unidade('AC CACIMBA DE DENTRO','RUA PRES JOAO PESSOA S/N','CENTRO','CACIMBA DE DENTRO','58230970','30026807','BVDO13810'),
new Unidade('AC CACIMBAS','RUA SAO JOSE 24','CENTRO','CACIMBAS','58698970','30026808','BVDO13811'),
new Unidade('AC CACIMBAS','RUA SAO JOSE 24','CENTRO','CACIMBAS','58698970','30026809','BVDO13812'),
new Unidade('AC CAICARA','RUA FRANCISCO CARNEIRO 3','CENTRO','CAICARA','58253970','30026810','BVDO13813'),
new Unidade('AC CAICARA','RUA FRANCISCO CARNEIRO 3','CENTRO','CAICARA','58253970','30026811','BVDO13814'),
new Unidade('AC CAJAZEIRAS','RUA CEL JUVENCIO CARNEIRO 489','CENTRO','CAJAZEIRAS','58900970','30026812','BVDO13815'),
new Unidade('AC CAJAZEIRINHAS','RUA ADMILSON LEITE DE ALMEIDA S/N','CENTRO','CAJAZEIRINHAS','58855970','30026813','BVDO13816'),
new Unidade('AC CAJAZEIRINHAS','RUA ADMILSON LEITE DE ALMEIDA S/N','CENTRO','CAJAZEIRINHAS','58855970','30026814','BVDO13817'),
new Unidade('AC CAJAZEIRINHAS','RUA ADMILSON LEITE DE ALMEIDA S/N','CENTRO','CAJAZEIRINHAS','58855970','30026815','BVDO13818'),
new Unidade('AC CALDAS BRANDAO','RUA JOSE ALIPIO DE SANTANA 371','CENTRO','CALDAS BRANDAO','58350970','30026816','BVDO13839'),
new Unidade('AC CALDAS BRANDAO','RUA JOSE ALIPIO DE SANTANA 371','CENTRO','CALDAS BRANDAO','58350970','30026817','BVDO13839'),
new Unidade('AC CAMALAU','RUA NOMINANDO FIRMO 39','CENTRO','CAMALAU','58530970','30026818','BVDO13840'),
new Unidade('AC CAMALAU','RUA NOMINANDO FIRMO 39','CENTRO','CAMALAU','58530970','30026819','BVDO13841'),
new Unidade('AC CAMPINA GRANDE','PRACA DA BANDEIRA 71','CENTRO','CAMPINA GRANDE','58400970','30026820','BVDO13842'),
new Unidade('AC CAMPINA GRANDE','PRACA DA BANDEIRA 71','CENTRO','CAMPINA GRANDE','58400970','30026821','BVDO13843'),
new Unidade('AC CAMPINA GRANDE','PRACA DA BANDEIRA 71','CENTRO','CAMPINA GRANDE','58400970','30026822','BVDO13844'),
new Unidade('AC CAMPINA GRANDE','PRACA DA BANDEIRA 71','CENTRO','CAMPINA GRANDE','58400970','30026823','BVDO13845'),
new Unidade('AC CAMPINA GRANDE','PRACA DA BANDEIRA 71','CENTRO','CAMPINA GRANDE','58400970','30026824','BVDO13846'),
new Unidade('AC CAMPO DE SANTANA','RUA DA MATRIZ 274','CENTRO','CAMPO DE SANTANA','58240970','30026825','BVDO13847'),
new Unidade('AC CAMPO DE SANTANA','RUA DA MATRIZ 274','CENTRO','CAMPO DE SANTANA','58240970','30026826','BVDO13848'),
new Unidade('AC CARAUBAS','RUA DOUTOR MAURO FARIAS 398','CENTRO','CARAUBAS','58595970','30026827','BVDO13849'),
new Unidade('AC CARAUBAS','RUA DOUTOR MAURO FARIAS 398','CENTRO','CARAUBAS','58595970','30026828','BVDO13850'),
new Unidade('AC CARRAPATEIRA','RUA PEDRO FRANCA S/N','CENTRO','CARRAPATEIRA','58945970','30026829','BVDO13851'),
new Unidade('AC CARRAPATEIRA','RUA PEDRO FRANCA S/N','CENTRO','CARRAPATEIRA','58945970','30026830','BVDO13852'),
new Unidade('AC CASSERENGUE','RUA AYRTON SENA 160','CENTRO','CASSERENGUE','58238970','30026831','BVDO13853'),
new Unidade('AC CASSERENGUE','RUA AYRTON SENA 161','CENTRO','CASSERENGUE','58238970','30026832','BVDO13854'),
new Unidade('AC CASSERENGUE','RUA AYRTON SENA 162','CENTRO','CASSERENGUE','58238970','30026833','BVDO13855'),
new Unidade('AC CATINGUEIRA','RUA JOSE PIRES SOBRINHO 10','CENTRO','CATINGUEIRA','58715970','30026834','BVDO13856'),
new Unidade('AC CATINGUEIRA','RUA JOSE PIRES SOBRINHO 10','CENTRO','CATINGUEIRA','58715970','30026835','BVDO13857'),
new Unidade('AC CATOLE DO ROCHA','PRACA SERGIO MAIA 84','CENTRO','CATOLE DO ROCHA','58884970','30026836','BVDO13858'),
new Unidade('AC CATOLE DO ROCHA','PRACA SERGIO MAIA 84','CENTRO','CATOLE DO ROCHA','58884970','30026837','BVDO13879'),
new Unidade('AC CENTRAL DE JOAO PESSOA','PRACA PEDRO AMERICO 70','CENTRO','JOAO PESSOA','58010970','30026838','BVDO13880'),
new Unidade('AC CENTRAL DE JOAO PESSOA','PRACA PEDRO AMERICO 70','CENTRO','JOAO PESSOA','58010970','30026839','BVDO13881'),
new Unidade('AC CENTRAL DE JOAO PESSOA','PRACA PEDRO AMERICO 70','CENTRO','JOAO PESSOA','58010970','30026840','BVDO13882'),
new Unidade('AC CENTRAL DE JOAO PESSOA','PRACA PEDRO AMERICO 70','CENTRO','JOAO PESSOA','58010970','30026841','BVDO13883'),
new Unidade('AC CENTRAL DE JOAO PESSOA','PRACA PEDRO AMERICO 70','CENTRO','JOAO PESSOA','58010970','30026842','BVDO13884'),
new Unidade('AC CIDADE UNIV CAMPINA GRANDE','RUA APRIGIO VELOSO 785','BODOCONGO','CAMPINA GRANDE','58429970','30026843','BVDO13885'),
new Unidade('AC CIDADE UNIV CAMPINA GRANDE','RUA APRIGIO VELOSO 785','BODOCONGO','CAMPINA GRANDE','58429970','30026844','BVDO13886'),
new Unidade('AC CIDADE UNIV JOAO PESSOA','CAMPUS 1 UFPB CENTRO DE VIVENCIA','CASTELO BRANCO','JOAO PESSOA','58051970','30026845','BVDO13887'),
new Unidade('AC CIDADE UNIV JOAO PESSOA','CAMPUS 1 UFPB CENTRO DE VIVENCIA','CASTELO BRANCO','JOAO PESSOA','58051970','30026846','BVDO13888'),
new Unidade('AC CONCEICAO','RUA SOLON DE LUCENA 174','CENTRO','CONCEICAO','58970970','30026847','BVDO13889'),
new Unidade('AC CONCEICAO','RUA SOLON DE LUCENA 174','CENTRO','CONCEICAO','58970970','30026848','BVDO13890'),
new Unidade('AC CONDADO','RUA PE AMANCIO LEITE 128','CENTRO','CONDADO','58714970','30026849','BVDO13891'),
new Unidade('AC CONDADO','RUA PE AMANCIO LEITE 128','CENTRO','CONDADO','58714970','30026850','BVDO13892'),
new Unidade('AC CONDE','RUA MANOEL ALVES S/N','CENTRO','CONDE','58322970','30026851','BVDO13893'),
new Unidade('AC CONDE','RUA MANOEL ALVES S/N','CENTRO','CONDE','58322970','30026852','BVDO13894'),
new Unidade('AC CONGO','AVENIDA VICENTE NOGUEIRA BATISTA S/N','CENTRO','CONGO','58535970','30026853','BVDO13895'),
new Unidade('AC CONGO','AVENIDA VICENTE NOGUEIRA BATISTA S/N','CENTRO','CONGO','58535970','30026854','BVDO13896'),
new Unidade('AC COREMAS','AVENIDA CAPITAO ANTONIO LEITE 165','CENTRO','COREMAS','58770970','30026855','BVDO13897'),
new Unidade('AC COREMAS','AVENIDA CAPITAO ANTONIO LEITE 165','CENTRO','COREMAS','58770970','30026856','BVDO13898'),
new Unidade('AC CRUZ DAS ARMAS','AVENIDA CRUZ DAS ARMAS 958','CRUZ DAS ARMAS','JOAO PESSOA','58085970','30026857','BVDO13909'),
new Unidade('AC CRUZ DAS ARMAS','AVENIDA CRUZ DAS ARMAS 958','CRUZ DAS ARMAS','JOAO PESSOA','58085970','30026858','BVDO13910'),
new Unidade('AC CRUZ DO ESPIRITO SANTO','RUA CESAR CARTAXO 50','CENTRO','CRUZ DO ESPIRITO SANTO','58337970','30026859','BVDO13911'),
new Unidade('AC CRUZ DO ESPIRITO SANTO','RUA CESAR CARTAXO 50','CENTRO','CRUZ DO ESPIRITO SANTO','58337970','30026860','BVDO13912'),
new Unidade('AC CUBATI','RUA MANOEL DE BARROS 200','CENTRO','CUBATI','58167970','30026861','BVDO13913'),
new Unidade('AC CUBATI','RUA MANOEL DE BARROS 200','CENTRO','CUBATI','58167970','30026862','BVDO13914'),
new Unidade('AC CUITE','RUA 7 DE SETEMBRO 476','CENTRO','CUITE','58175970','30026863','BVDO13915'),
new Unidade('AC CUITE','RUA 7 DE SETEMBRO 476','CENTRO','CUITE','58175970','30026864','BVDO13916'),
new Unidade('AC CUITE DE MAMANGUAPE','RUA DA MATRIZ 116','CENTRO','CUITE DE MAMANGUAPE','58289970','30026865','BVDO13917'),
new Unidade('AC CUITE DE MAMANGUAPE','RUA DA MATRIZ 116','CENTRO','CUITE DE MAMANGUAPE','58289970','30026866','BVDO13918'),
new Unidade('AC CUITEGI','RUA CEL JOAO PIMENTEL 74','CENTRO','CUITEGI','58208970','30026867','BVDO13959'),
new Unidade('AC CUITEGI','RUA CEL JOAO PIMENTEL 74','CENTRO','CUITEGI','58208970','30026868','BVDO13960'),
new Unidade('AC CURRAL DE CIMA','RUA OLEGARIO JOSE 26','CENTRO','CURRAL DE CIMA','58291970','30026869','BVDO13961'),
new Unidade('AC CURRAL DE CIMA','RUA OLEGARIO JOSE 26','CENTRO','CURRAL DE CIMA','58291970','30026870','BVDO13962'),
new Unidade('AC CURRAL VELHO','RUA TEN IRINEU LACERDA 90','CENTRO','CURRAL VELHO','58990970','30026871','BVDO13963'),
new Unidade('AC CURRAL VELHO','RUA TEN IRINEU LACERDA 90','CENTRO','CURRAL VELHO','58990970','30026872','BVDO13964'),
new Unidade('AC DAMIAO','RUA SAO LUIZ 44','CENTRO','DAMIAO','58173970','30026873','BVDO13965'),
new Unidade('AC DESTERRO','RUA CONEGO FLORENTINO 10','CENTRO','DESTERRO','58695970','30026874','BVDO13966'),
new Unidade('AC DIAMANTE','RUA CRUZEIRO 110','CENTRO','DIAMANTE','58994970','30026875','BVDO13967'),
new Unidade('AC DONA INES','AVENIDA MAJ AUGUSTO BEZERRA 226','CENTRO','DONA INES','58228970','30026876','BVDO13968'),
new Unidade('AC DUAS ESTRADAS','RUA DO COMERCIO 50','CENTRO','DUAS ESTRADAS','58265970','30026877','BVDO14019'),
new Unidade('AC EMAS','AVENIDA JOSE CELINO FILHO 102','CENTRO','EMAS','58763970','30026878','BVDO14020'),
new Unidade('AC ESPERANCA','PRACA GETULIO VARGAS 20','CENTRO','ESPERANCA','58135970','30026879','BVDO14021'),
new Unidade('AC ESTACAO','RUA CONEGO JOSE VIANA 139','ESTACAO','SOUSA','58807970','30026880','BVDO14022'),
new Unidade('AC FAGUNDES','PRACA SEVERINO CABRAL 04','CENTRO','FAGUNDES','58487970','30026881','BVDO14023'),
new Unidade('AC FREI MARTINHO','RUA JANUNCIO PEREIRA 45','CENTRO','FREI MARTINHO','58195970','30026882','BVDO14024'),
new Unidade('AC GALANTE','RUA ARTUR F FIGUEIREDO 612','GALANTE','CAMPINA GRANDE','58446970','30026883','BVDO14025'),
new Unidade('AC GUARABIRA','PRACA JOAO PESSOA 43','CENTRO','GUARABIRA','58200970','30026884','BVDO14026'),
new Unidade('AC GUARABIRA','PRACA JOAO PESSOA 43','CENTRO','GUARABIRA','58200970','30026885','BVDO14027'),
new Unidade('AC GUARABIRA','PRACA JOAO PESSOA 43','CENTRO','GUARABIRA','58200970','30026886','BVDO14028'),
new Unidade('AC GURINHEM','RUA FLAVIO RIBEIRO 90','CENTRO','GURINHEM','58356970','30026887','BVDO14029'),
new Unidade('AC GURJAO','RUA MAJOR DOMINGOS COSTA RAMOS 11','CENTRO','GURJAO','58670970','30026888','BVDO14030'),
new Unidade('AC IBIARA','RUA JOAQUIM LOPES RIBEIRO S/N','CENTRO','IBIARA','58980970','30026889','BVDO14031'),
new Unidade('AC IGARACY','RUA SALUSTIANO MIGUEL DE SOUZA S/N','CENTRO','IGARACY','58775970','30026890','BVDO14032'),
new Unidade('AC IMACULADA','RUA JOAQUIM BEZERRA 102','CENTRO','IMACULADA','58745970','30026891','BVDO14033'),
new Unidade('AC INGA','RUA VENANCIO NEIVA 261','CENTRO','INGA','58380970','30026892','BVDO14034'),
new Unidade('AC INTERMARES','RUA MAR VERMELHO S/N','INTERMARES','CABEDELO','58310970','30026893','BVDO14035'),
new Unidade('AC ITABAIANA','RUA PRES JOAO PESSOA 464','CENTRO','ITABAIANA','58360970','30026894','BVDO14036'),
new Unidade('AC ITAPORANGA','RUA DO CENTENARIO 12','CENTRO','ITAPORANGA','58780970','30026895','BVDO14037'),
new Unidade('AC ITAPOROROCA','RUA PAULO RODRIGUES S/N','CENTRO','ITAPOROROCA','58275970','30026896','BVDO14038'),
new Unidade('AC ITATUBA','RUA JOAQUIM FRANCISCO DE ANDRADE S/N','CENTRO','ITATUBA','58378970','30026897','BVDO14039'),
new Unidade('AC JACARAU','RUA PRES JOAO PESSOA 278','CENTRO','JACARAU','58278970','30026898','BVDO14040'),
new Unidade('AC JACUMÃ','RODOVIA PB - 008 S/N (EM FRENTE AO POSTO POLICIAL)','CENTRO','CONDE','58323970','30026899','BVDO14041'),
new Unidade('AC JACUMÃ','RODOVIA PB - 008 S/N (EM FRENTE AO POSTO POLICIAL)','CENTRO','CONDE','58323970','30026900','BVDO14042'),
new Unidade('AC JACUMÃ','RODOVIA PB - 008 S/N (EM FRENTE AO POSTO POLICIAL)','CENTRO','CONDE','58323970','30026901','BVDO14043'),
new Unidade('AC JERICO','RUA BERNARDINO DE FREITAS 157','CENTRO','JERICO','58830970','30026902','BVDO14044'),
new Unidade('AC JOCA CLAUDINO','RUA MAJOR JOSÉ FERNANDO 146','CENTRO','JOCA CLAUDINO','58928970','30026903','BVDO14045'),
new Unidade('AC JUAREZ TAVORA','RUA ADALBERTO PEREIRA DE MELO 62','CENTRO','JUAREZ TAVORA','58387970','30026904','BVDO14046'),
new Unidade('AC JUAZEIRINHO','PRACA JOAO PESSOA 29','CENTRO','JUAZEIRINHO','58660970','30026905','BVDO14047'),
new Unidade('AC JUNCO DO SERIDO','PRACA CORONEL JOSE FERREIRA S/N','CENTRO','JUNCO DO SERIDO','58640970','30026906','BVDO14048'),
new Unidade('AC JURIPIRANGA','AVENIDA BRASIL 558','CENTRO','JURIPIRANGA','58330970','30026907','BVDO14049'),
new Unidade('AC JURU','RUA TERTULIANA ALVES 50 / RUA MANOEL CARNEIRO SILVA 160','CENTRO','JURU','58750970','30026908','BVDO14050'),
new Unidade('AC LAGOA','RUA ISABEL PEREIRA 34','CENTRO','LAGOA','58835970','30026909','BVDO14051'),
new Unidade('AC LAGOA DE DENTRO','RUA DO COMERCIO 584','CENTRO','LAGOA DE DENTRO','58250970','30026910','BVDO14052'),
new Unidade('AC LAGOA SECA','RUA JOSE JERONIMO DA COSTA 35','CENTRO','LAGOA SECA','58117970','30026911','BVDO14053'),
new Unidade('AC LASTRO','PRACA DA MATRIZ S/N','CENTRO','LASTRO','58820970','30026912','BVDO14054'),
new Unidade('AC LIVRAMENTO','RUA JOAO PESSOA 110','CENTRO','LIVRAMENTO','58690970','30026913','BVDO14055'),
new Unidade('AC LUCENA','RUA AMERICO FALCAO 740','CENTRO','LUCENA','58315970','30026914','BVDO14056'),
new Unidade('AC MAE DAGUA','RUA LUIS FURTADO DE FIGEUIREDO 30','CENTRO','MAE DAGUA','58740970','30026915','BVDO14057'),
new Unidade('AC MALTA','RUA CORONEL JUSTINO FERNANDES VIEIRA 76','CENTRO','MALTA','58713970','30026916','BVDO14058'),
new Unidade('AC MAMANGUAPE','RUA PRES JOAO PESSOA 134','CENTRO','MAMANGUAPE','58280970','30026917','BVDO14059'),
new Unidade('AC MANAIRA','TRAVESSA PE TAVARES 376','CENTRO','MANAIRA','58995970','30026918','BVDO14060'),
new Unidade('AC MANGABEIRA','RUA DOUTOR EUCLIDES NEIVA DE OLIVEIRA S/N','MANGABEIRA','JOAO PESSOA','58056970','30026919','BVDO14061'),
new Unidade('AC MANGABEIRA','RUA DOUTOR EUCLIDES NEIVA DE OLIVEIRA S/N','MANGABEIRA','JOAO PESSOA','58056970','30026920','BVDO14062'),
new Unidade('AC MARCACAO','AVENIDA JOAO FERREIRA DOS SANTOS 883','CENTRO','MARCACAO','58294970','30026921','BVDO14063'),
new Unidade('AC MARI','RUA ANTONIO DE LUNA FREIRE 255','CENTRO','MARI','58345970','30026922','BVDO14064'),
new Unidade('AC MARIZOPOLIS','RUA DOUTOR OTAVIO MARIZ 35','CENTRO','MARIZOPOLIS','58819970','30026923','BVDO14065'),
new Unidade('AC MASSARANDUBA','RUA ROGACIANO NUNES 45','CENTRO','MASSARANDUBA','58120970','30026924','BVDO14066'),
new Unidade('AC MATARACA','RUA JOAO SAO DA COSTA 961','CENTRO','MATARACA','58292970','30026925','BVDO14067'),
new Unidade('AC MATUREIA','RUA JOSE JERONIMO 400','CENTRO','MATUREIA','58737970','30026926','BVDO14068'),
new Unidade('AC MOGEIRO','RUA MANOEL FRANCISCO GONcALVES 08','CENTRO','MOGEIRO','58375970','30026927','BVDO14069'),
new Unidade('AC MONTADAS','RUA SAO JOSE 34','CENTRO','MONTADAS','58145970','30026928','BVDO14070'),
new Unidade('AC MONTE HOREBE','RUA PEDRO GODIN 14','CENTRO','MONTE HOREBE','58950970','30026929','BVDO14071'),
new Unidade('AC MONTEIRO','RUA GETULIO VARGAS 11','CENTRO','MONTEIRO','58500970','30026930','BVDO14072'),
new Unidade('AC MONTEIRO DA FRANCA','AV MONTEIRO DA FRANCA 989','MANAIRA','JOAO PESSOA','58038970','30026931','BVDO14073'),
new Unidade('AC MULUNGU','RUA JOAO PESSOA 202','CENTRO','MULUNGU','58354970','30026932','BVDO14074'),
new Unidade('AC NATUBA','RUA JOAO PESSOA 28','CENTRO','NATUBA','58494970','30026933','BVDO14075'),
new Unidade('AC NAZAREZINHO','RUA JOSE DO CARMO DO VALE 32','CENTRO','NAZAREZINHO','58817970','30026934','BVDO14076'),
new Unidade('AC NOVA FLORESTA','RUA BENEDITO MARINHO 645','CENTRO','NOVA FLORESTA','58178970','30026935','BVDO14077'),
new Unidade('AC NOVA OLINDA','RUA PRES JOAO PESSOA 21','CENTRO','NOVA OLINDA','58798970','30026936','BVDO14078'),
new Unidade('AC NOVA PALMEIRA','RUA FRANCISCO BEZERRA DE MEDEIROS S/N','CENTRO','NOVA PALMEIRA','58184970','30026937','BVDO14099'),
new Unidade('AC OLHO DAGUA','RUA JOAQUIM AVELINO PEREIRA 38','CENTRO','OLHO DAGUA','58760970','30026938','BVDO14100'),
new Unidade('AC OLIVEDOS','RUA OSCAR COSTA 145','CENTRO','OLIVEDOS','58160970','30026939','BVDO14101'),
new Unidade('AC OURO VELHO','RUA CORONEL SERGIO DANTAS 96','CENTRO','OURO VELHO','58560970','30026940','BVDO14102'),
new Unidade('AC PARARI','RUA TERTULINO AIRES DE QUEIROZ 251','CENTRO','PARARI','58575970','30026941','BVDO14103'),
new Unidade('AC PASSAGEM','RUA DO COMERCIO 60','CENTRO','PASSAGEM','58734970','30026942','BVDO14104'),
new Unidade('AC PATOS','AV PRESIDENTE EPITACIO PESSOA 69','CENTRO','PATOS','58700970','30026943','BVDO14105'),
new Unidade('AC PATOS','AV PRESIDENTE EPITACIO PESSOA 69','CENTRO','PATOS','58700970','30026944','BVDO14106'),
new Unidade('AC PATOS','AV PRESIDENTE EPITACIO PESSOA 69','CENTRO','PATOS','58700970','30026945','BVDO14107'),
new Unidade('AC PATOS','AV PRESIDENTE EPITACIO PESSOA 69','CENTRO','PATOS','58700970','30026946','BVDO14108'),
new Unidade('AC PATOS','AV PRESIDENTE EPITACIO PESSOA 69','CENTRO','PATOS','58700970','30026947','BVDO14109'),
new Unidade('AC PAULISTA','RUA VICENTE FRANCA S/N','CENTRO','PAULISTA','58860970','30026948','BVDO14110'),
new Unidade('AC PEDRA BRANCA','AVENIDA CONEGO FIRMINO 418','CENTRO','PEDRA BRANCA','58790970','30026949','BVDO14111'),
new Unidade('AC PEDRA LAVRADA','PRACA EUGENIO VASCONCELOS S/N','CENTRO','PEDRA LAVRADA','58180970','30026950','BVDO14112'),
new Unidade('AC PEDRAS DE FOGO','PRACA RONALDO RIBEIRO DA COSTA 8','CENTRO','PEDRAS DE FOGO','58328970','30026951','BVDO14113'),
new Unidade('AC PEDRO REGIS','RUA RUY CARNEIRO S/N','CENTRO','PEDRO REGIS','58273970','30026952','BVDO14114'),
new Unidade('AC PIANCO','PRACA JOAO GALDINO 76','CENTRO','PIANCO','58765970','30026953','BVDO14115'),
new Unidade('AC PICUI','RUA 24 DE NOVEMBRO 22','CENTRO','PICUI','58187970','30026954','BVDO14116'),
new Unidade('AC PILAR','RUA JOSE LINS DO REGO 77','CENTRO','PILAR','58338970','30026955','BVDO14117'),
new Unidade('AC PILOES','RUA CONEGO TEODOMIRO 172','CENTRO','PILOES','58393970','30026956','BVDO14118'),
new Unidade('AC PILOEZINHOS','PRACA SAO SEBASTIAO 21','CENTRO','PILOEZINHOS','58210970','30026957','BVDO14119'),
new Unidade('AC PIRPIRITUBA','RUA PREF FERREIRA DE MELO 10','CENTRO','PIRPIRITUBA','58213970','30026958','BVDO14120'),
new Unidade('AC PITIMBU','RUA DA SAUDADE S/N ','CENTRO','PITIMBU','58324970','30026959','BVDO14121'),
new Unidade('AC POCINHOS','RUA ANTONIO VAZ RIBEIRO 150','CENTRO','POCINHOS','58150970','30026960','BVDO14122'),
new Unidade('AC POCO DANTAS','RUA ODILON FRANCISCO DE OLIVEIRA 518','CENTRO','POCO DANTAS','58933970','30026961','BVDO14123'),
new Unidade('AC POCO JOSE DE MOURA','RUA RAIMUNDO ALVES DA COSTA S/N','CENTRO','POCO DE JOSE DE MOURA','58908970','30026962','BVDO14124'),
new Unidade('AC POMBAL','RUA JOAO PESSOA 111','CENTRO','POMBAL','58840970','30026963','BVDO14125'),
new Unidade('AC PRATA','RUA ANANIANO RAMOS GALVAO S/N','CENTRO','PRATA','58550970','30026964','BVDO14126'),
new Unidade('AC PRINCESA ISABEL','RUA SAO ROQUE 165','CENTRO','PRINCESA ISABEL','58755970','30026965','BVDO14127'),
new Unidade('AC PUXINANA','RUA PARAIBA 2','CENTRO','PUXINANA','58115970','30026966','BVDO14128'),
new Unidade('AC QUEIMADAS','RUA EUNICE RIBEIRO 526','CENTRO','QUEIMADAS','58475970','30026967','BVDO14129'),
new Unidade('AC REMIGIO','RUA JOAO PESSOA 4','CENTRO','REMIGIO','58398970','30026968','BVDO14130'),
new Unidade('AC RIACHAO','RUA ANTONIA LEONILDA DE AQUINO S/N','CENTRO','RIACHAO','58235970','30026969','BVDO14131'),
new Unidade('AC RIACHO DOS CAVALOS','RUA DOUTOR FRANCISCO CARNEIRO 86','CENTRO','RIACHO DOS CAVALOS','58870970','30026970','BVDO14132'),
new Unidade('AC RIO TINTO','RUA DA MANGUEIRA S/N','CENTRO','RIO TINTO','58297970','30026971','BVDO14133'),
new Unidade('AC SALGADINHO','RUA JOSE MACIEL DE SOUZA 171','CENTRO','SALGADINHO','58650970','30026972','BVDO14134'),
new Unidade('AC SALGADO DE SAO FELIX','RUA JOSE SILVEIRA 84','CENTRO','SALGADO DE SAO FELIX','58370970','30026973','BVDO14135'),
new Unidade('AC SANTA CRUZ','RUA FRANCISCO FANANCA 01','CENTRO','SANTA CRUZ','58824970','30026974','BVDO14136'),
new Unidade('AC SANTA HELENA','RUA ELAINE SOARES BRASILEIRO 75','CENTRO','SANTA HELENA','58925970','30026975','BVDO14137'),
new Unidade('AC SANTA LUZIA','AVENIDA JOSE AMERICO 110','CENTRO','SANTA LUZIA','58600970','30026976','BVDO14138'),
new Unidade('AC SANTA RITA','PRACA GETULIO VARGAS 94 / PRACA ANTENOR NAVARRO S/N','CENTRO','SANTA RITA','58300970','30026977','BVDO14149'),
new Unidade('AC SANTA TERESINHA','RUA JOSE NUNES 97','CENTRO','SANTA TERESINHA','58720970','30026978','BVDO14150'),
new Unidade('AC SANTANA DE MANGUEIRA','RUA DA MATRIZ S/N','CENTRO','SANTANA DE MANGUEIRA','58985970','30026979','BVDO14151'),
new Unidade('AC SANTANA DOS GARROTES','RUA ISIDRO ARAUJO PASSOS 16','CENTRO','SANTANA DOS GARROTES','58795970','30026980','BVDO14152'),
new Unidade('AC SANTO ANDRE','AVENIDA APRIGIO RIBEIRO DE BRITO S/N','CENTRO','SANTO ANDRE','58675970','30026981','BVDO14153'),
new Unidade('AC SAO BENTINHO','RUA ERNANE ROQUE DE ARRUDA S/N','CENTRO','SAO BENTINHO','58857970','30026982','BVDO14154'),
new Unidade('AC SAO BENTO','RUA ANA MARIA RIBEIRO 212','CENTRO','SAO BENTO','58865970','30026983','BVDO14155'),
new Unidade('AC SAO DOMINGOS','RUA JOSE FRANCISCO DE SOUSA 5','CENTRO','SAO DOMINGOS','58853970','30026984','BVDO14156'),
new Unidade('AC SAO DOMINGOS DO CARIRI','AVENIDA 5 DE MAIO S/N','CENTRO','SAO DOMINGOS DO CARIRI','58485970','30026985','BVDO14157'),
new Unidade('AC SAO FRANCISCO','RUA CAP ANTONIO DA SILVEIRA 03','CENTRO','SAO FRANCISCO','58818970','30026986','BVDO14158'),
new Unidade('AC SAO JOAO DO CARIRI','RUA JOAO PESSOA 147','CENTRO','SAO JOAO DO CARIRI','58590970','30026987','BVDO14319'),
new Unidade('AC SAO JOAO DO RIO DO PEIXE','RUA LIBIO BRASILEIRO 7','CENTRO','SAO JOAO DO RIO DO PEIXE','58910970','30026988','BVDO14320'),
new Unidade('AC SAO JOAO DO TIGRE','RUA CANDIDO JOSE BEZERRA S/N','CENTRO','SAO JOAO DO TIGRE','58520970','30026989','BVDO14321'),
new Unidade('AC SAO JOSE DA LAGOA TAPADA','RUA ANANIAS SARMENTO S/N','CENTRO','SAO JOSE DA LAGOA TAPADA','58815970','30026990','BVDO14322'),
new Unidade('AC SAO JOSE DA MATA','RUA SALVINO DE OLIVEIRA 10','SAO JOSE DA MATA','CAMPINA GRANDE','58441970','30026991','BVDO14323'),
new Unidade('AC SAO JOSE DE CAIANA','RUA DO COMERCIO 127','CENTRO','SAO JOSE DE CAIANA','58784970','30026992','BVDO14324'),
new Unidade('AC SAO JOSE DE ESPINHARAS','RUA COMANDANTE JOSE RAIMUNDO 106','CENTRO','SAO JOSE DE ESPINHARAS','58723970','30026993','BVDO14325'),
new Unidade('AC SAO JOSE DE PIRANHAS','RUA ANTONIO LACERDA S/N','CENTRO','SAO JOSE DE PIRANHAS','58940970','30026994','BVDO14326'),
new Unidade('AC SAO JOSE DO BONFIM','RUA JOSE FERREIRA 110','CENTRO','SAO JOSE DO BONFIM','58725970','30026995','BVDO14327'),
new Unidade('AC SAO JOSE DO SABUGI','RUA JOVENTINO JOSIAS DE ARAUJO 284','CENTRO','SAO JOSE DO SABUGI','58610970','30026996','BVDO14328'),
new Unidade('AC SAO JOSE DOS CORDEIROS','RUA BATISTA CORDEIRO 34','CENTRO','SAO JOSE DOS CORDEIROS','58570970','30026997','BVDO14329'),
new Unidade('AC SAO MAMEDE','RUA JANUNCIO NOBREGA 40','CENTRO','SAO MAMEDE','58625970','30026998','BVDO14330'),
new Unidade('AC SAO MIGUEL DE TAIPU','PRACA ELIAS CAVALCANTE 10','CENTRO','SAO MIGUEL DE TAIPU','58334970','30026999','BVDO14331'),
new Unidade('AC SAO SEBASTIAO DO UMBUZEIRO','PRACA NILO FEITOSA 580','CENTRO','SAO SEBASTIAO DO UMBUZEIRO','58510970','30027000','BVDO14332'),
new Unidade('AC SAO SEBASTIAO LAGOA DE ROCA','RUA JOSE RODRIGUES COURA 52','CENTRO','SAO SEBASTIAO DE LAGOA DE ROCA','58119970','30027001','BVDO14333'),
new Unidade('AC SAO VICENTE DO SERIDO','RUA PREFEITO INACIO CLAUDINO VIDAL S/N','CENTRO','SAO VICENTE DO SERIDO','58158970','30027002','BVDO14334'),
new Unidade('AC SAPE','PRACA DOUTOR JOAO URSULO 17','CENTRO','SAPE','58340970','30027003','BVDO14335'),
new Unidade('AC SERRA BRANCA','AVENIDA DEP ALVARO GAUDENCIO S/N','CENTRO','SERRA BRANCA','58580970','30027004','BVDO14336'),
new Unidade('AC SERRA DA RAIZ','PRACA INIGUACU 129','CENTRO','SERRA DA RAIZ','58260970','30027005','BVDO14337'),
new Unidade('AC SERRA GRANDE','AVENIDA TOME PEREIRA DOS SANTOS 18','CENTRO','SERRA GRANDE','58955970','30027006','BVDO14338'),
new Unidade('AC SERRA REDONDA','RUA PEDRO DE AZEVEDO CRUZ 67','CENTRO','SERRA REDONDA','58385970','30027007','BVDO14599'),
new Unidade('AC SERRARIA','RUA MONSENHOR WALFREDO 02','CENTRO','SERRARIA','58395970','30027008','BVDO14600'),
new Unidade('AC SOBRADO','RUA MANOEL SALES 174/A','CENTRO','SOBRADO','58342970','30027009','BVDO14601'),
new Unidade('AC SOLANEA','PRACA 26 DE NOVEMBRO S/N','CENTRO','SOLANEA','58225970','30027010','BVDO14602'),
new Unidade('AC SOLEDADE','AVENIDA GOUVEIA NOBREGA 67','CENTRO','SOLEDADE','58155970','30027011','BVDO14603'),
new Unidade('AC SOUSA','RUA CORONEL JOSE VICENTE 18','CENTRO','SOUSA','58800970','30027012','BVDO14604'),
new Unidade('AC SOUSA','RUA CORONEL JOSE VICENTE 18','CENTRO','SOUSA','58800970','30027013','BVDO14605'),
new Unidade('AC SOUSA','RUA CORONEL JOSE VICENTE 18','CENTRO','SOUSA','58800970','30027014','BVDO14606'),
new Unidade('AC SOUSA','RUA CORONEL JOSE VICENTE 18','CENTRO','SOUSA','58800970','30027015','BVDO14607'),
new Unidade('AC SOUSA','RUA CORONEL JOSE VICENTE 18','CENTRO','SOUSA','58800970','30027016','BVDO14608'),
new Unidade('AC SUME','RUA PRIMEIRO DE ABRIL 301','CENTRO','SUME','58540970','30027017','BVDO14719'),
new Unidade('AC TAPEROA','PRACA JOAO SUASSUNA S/N','CENTRO','TAPEROA','58680970','30027018','BVDO14720'),
new Unidade('AC TAVARES','RUA TEN SILVINO LIMA 577','CENTRO','TAVARES','58753970','30027019','BVDO14721'),
new Unidade('AC TEIXEIRA','RUA JOSE MARIA XAVIER 27','CENTRO','TEIXEIRA','58735970','30027020','BVDO14722'),
new Unidade('AC TRIUNFO','RUA 7 DE SETEMBRO 170','CENTRO','TRIUNFO','58920970','30027021','BVDO14723'),
new Unidade('AC UIRAUNA','RUA SABINO CORREIA 60','CENTRO','UIRAUNA','58915970','30027022','BVDO14724'),
new Unidade('AC UMBUZEIRO','AVENIDA CARLOS PESSOA 105','CENTRO','UMBUZEIRO','58497970','30027023','BVDO14725'),
new Unidade('AC VARZEA','RUA 11 DE JANEIRO S/N','CENTRO','VARZEA','58620970','30027024','BVDO14726'),
new Unidade('AC VIEIROPOLIS','RUA DOUTOR ANTONIO PINTO OLIVEIRA 12','CENTRO','VIEIROPOLIS','58822970','30027025','BVDO14727'),
new Unidade('AC VISTA SERRANA','RUA JOAO FRANCISCO FILHO 20','CENTRO','VISTA SERRANA','58710970','30027026','BVDO14728'),
new Unidade('CDD BESSA','RUA FRANCISCO LEOCADIO RIBEIRO COUTINHO S/N','AEROCLUBE','JOAO PESSOA','58036970','30027027','BVDO14889'),
new Unidade('CDD BESSA','RUA FRANCISCO LEOCADIO RIBEIRO COUTINHO S/N','AEROCLUBE','JOAO PESSOA','58036970','30027028','BVDO14890'),
new Unidade('CDD BESSA','RUA FRANCISCO LEOCADIO RIBEIRO COUTINHO S/N','AEROCLUBE','JOAO PESSOA','58036970','30027029','BVDO14891'),
new Unidade('CDD CRUZEIRO','AVENIDA PRESIDENTE JUSCELINO KUBITSCHEK, S/N','CRUZEIRO','CAMPINA GRANDE','58107970','30027030','BVDO14892'),
new Unidade('CDD CRUZEIRO','AVENIDA PRESIDENTE JUSCELINO KUBITSCHEK, S/N','CRUZEIRO','CAMPINA GRANDE','58107970','30027031','BVDO14893'),
new Unidade('CDD CRUZEIRO','AVENIDA PRESIDENTE JUSCELINO KUBITSCHEK, S/N','CRUZEIRO','CAMPINA GRANDE','58107970','30027032','BVDO14894'),
new Unidade('CDD MANGABEIRA','RUA ELIAS PEREIRA DE ARAUJO S/N','MANGABEIRA','JOAO PESSOA','58056970','30027033','BVDO14895'),
new Unidade('CDD MANGABEIRA','RUA ELIAS PEREIRA DE ARAUJO S/N','MANGABEIRA','JOAO PESSOA','58056970','30027034','BVDO14896'),
new Unidade('CDD MANGABEIRA','RUA ELIAS PEREIRA DE ARAUJO S/N','MANGABEIRA','JOAO PESSOA','58056970','30027035','BVDO14897'),
new Unidade('CDD TORRE','RUA BENTO DA GAMA 209','TORRE','JOAO PESSOA','58040970','30027036','BVDO14898'),
new Unidade('CDD TORRE','RUA BENTO DA GAMA 209','TORRE','JOAO PESSOA','58040970','30027037','BVDO15119'),
new Unidade('CDD TORRE','RUA BENTO DA GAMA 209','TORRE','JOAO PESSOA','58040970','30027038','BVDO15120'),
new Unidade('CEE CAMPINA GRANDE','RUA GUILHERMINO BARBOSA 52','TAMBOR','CAMPINA GRANDE','58410970','30027039','BVDO15121'),
new Unidade('CEE CAMPINA GRANDE','RUA GUILHERMINO BARBOSA 52','TAMBOR','CAMPINA GRANDE','58410970','30027040','BVDO15122'),
new Unidade('CEE CAMPINA GRANDE','RUA GUILHERMINO BARBOSA 52','TAMBOR','CAMPINA GRANDE','58410970','30027041','BVDO15123'),
new Unidade('CTCE JOAO PESSOA','BR 230 KM 24','CRISTO REDENTOR','JOAO PESSOA','58071900','30027042','BVDO15124'),
new Unidade('CTCE JOAO PESSOA','BR 230 KM 24','CRISTO REDENTOR','JOAO PESSOA','58071900','30027043','BVDO15125'),
new Unidade('CTCE JOAO PESSOA','BR 230 KM 24','CRISTO REDENTOR','JOAO PESSOA','58071900','30027044','BVDO15126'),
new Unidade('UD BAYEUX','AVENIDA LIBERDADE 2745','CENTRO','BAYEUX','58306970','30027045','BVDO15127'),
new Unidade('UD BAYEUX','AVENIDA LIBERDADE 2745','CENTRO','BAYEUX','58306970','30027046','BVDO15128'),
new Unidade('UD BAYEUX','AVENIDA LIBERDADE 2745','CENTRO','BAYEUX','58306970','30027047','BVDO15149'),
new Unidade('UD GUARABIRA','RUA PIMENTEL FILHO S/N','CENTRO','GUARABIRA','58200970','30027048','BVDO15150'),
new Unidade('UD GUARABIRA','RUA PIMENTEL FILHO S/N','CENTRO','GUARABIRA','58200970','30027049','BVDO15151'),
new Unidade('UD GUARABIRA','RUA PIMENTEL FILHO S/N','CENTRO','GUARABIRA','58200970','30027050','BVDO15152'),
new Unidade('UD PATOS','RUA JOAO DE BARROS 508','CENTRO','PATOS','58700970','30027051','BVDO15153'),
new Unidade('UD PATOS','RUA JOAO DE BARROS 508','CENTRO','PATOS','58700970','30027052','BVDO15154'),
new Unidade('UD PATOS','RUA JOAO DE BARROS 508','CENTRO','PATOS','58700970','30027053','BVDO15155'),
new Unidade('UD SANTA RITA','RUA SENADOR JOSE AMERICO DE ALMEIDA 205','CENTRO','SANTA RITA','58300970','30027054','BVDO15156'),
new Unidade('UD SANTA RITA','RUA SENADOR JOSE AMERICO DE ALMEIDA 205','CENTRO','SANTA RITA','58300970','30027055','BVDO15157'),
new Unidade('UD SANTA RITA','RUA SENADOR JOSE AMERICO DE ALMEIDA 205','CENTRO','SANTA RITA','58300970','30027056','BVDO15158')];