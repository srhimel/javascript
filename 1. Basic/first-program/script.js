var rahimOjan, karimOjan, rahimHight, karimHeight, rahimBmi, karimBmi, rahimKiOjon;

rahimOjan = prompt("Rahim er ojon koto?");
rahimHight = prompt("Rahim er height Koto ?");

rahimBmi = rahimOjan / (rahimHight * rahimHight);

karimOjan = prompt("karim er ojon koto?");
karimHight = prompt("karim er height Koto ?");

karimBmi = karimOjan / (karimHight * karimHight);

rahimKiOjon = karimBmi < rahimBmi;

alert(rahimKiOjon)

