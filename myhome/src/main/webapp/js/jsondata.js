/**
 * jsondata.js
 */
const employees = `[{"id":1,"first_name":"Rudolph","last_name":"Najara","email":"rnajara0@stumbleupon.com","gender":"Male","salary":4971},
{"id":2,"first_name":"Kenneth","last_name":"Streetley","email":"kstreetley1@lulu.com","gender":"Male","salary":3450},
{"id":3,"first_name":"Ransell","last_name":"Collet","email":"rcollet2@dion.ne.jp","gender":"Male","salary":3035},
{"id":4,"first_name":"Galen","last_name":"Mocquer","email":"gmocquer3@joomla.org","gender":"Male","salary":4615},
{"id":5,"first_name":"Gale","last_name":"Aprahamian","email":"gaprahamian4@theatlantic.com","gender":"Male","salary":3196},
{"id":6,"first_name":"Loretta","last_name":"Challace","email":"lchallace5@google.ru","gender":"Female","salary":3395},
{"id":7,"first_name":"Roderick","last_name":"Mongenot","email":"rmongenot6@homestead.com","gender":"Male","salary":3594},
{"id":8,"first_name":"Weider","last_name":"Gidley","email":"wgidley7@abc.net.au","gender":"Male","salary":4253},
{"id":9,"first_name":"Veronica","last_name":"Spaice","email":"vspaice8@toplist.cz","gender":"Agender","salary":3755},
{"id":10,"first_name":"Caddric","last_name":"Spavins","email":"cspavins9@cnet.com","gender":"Male","salary":3454},
{"id":11,"first_name":"Annabel","last_name":"Diamond","email":"adiamonda@paypal.com","gender":"Female","salary":3964},
{"id":12,"first_name":"Gloriane","last_name":"Coghlan","email":"gcoghlanb@soup.io","gender":"Female","salary":4796},
{"id":13,"first_name":"Tatum","last_name":"Brabender","email":"tbrabenderc@si.edu","gender":"Polygender","salary":4597},
{"id":14,"first_name":"Fielding","last_name":"Stockdale","email":"fstockdaled@usda.gov","gender":"Male","salary":3906},
{"id":15,"first_name":"Dwight","last_name":"McIlharga","email":"dmcilhargae@hostgator.com","gender":"Male","salary":3717},
{"id":16,"first_name":"Miguel","last_name":"Gorner","email":"mgornerf@elegantthemes.com","gender":"Male","salary":3103},
{"id":17,"first_name":"Deeann","last_name":"Twycross","email":"dtwycrossg@yellowbook.com","gender":"Female","salary":4750},
{"id":18,"first_name":"Frants","last_name":"Maxwaile","email":"fmaxwaileh@sina.com.cn","gender":"Male","salary":3292},
{"id":19,"first_name":"Vin","last_name":"Jeste","email":"vjestei@jiathis.com","gender":"Male","salary":3577},
{"id":20,"first_name":"Kally","last_name":"Straffon","email":"kstraffonj@feedburner.com","gender":"Female","salary":4770}]`

console.log(employees);
const empList = JSON.parse(employees); // 문자열 -> 객체.