// function ketishVaqtiniTop(t, T) {
//   let nechadaKetishKerak = Math.floor(t / T);
//   let kechikishSoatlar = t % T;
//   return [nechadaKetishKerak, kechikishSoatlar];
// }
// let t = 18;
// let T = 4;
// let [nechadaKetish, kechikish] = ketishVaqtiniTop(t, T);
// console.log(
//   `Poyezd ${nechadaKetish} marta ketishi kerak edi va ${kechikish} soat kechikdi.`
// );

// let celsius =+prompt("celcius kiriting");
// let kelvin = celsius + 273.15;
// let fahrenheit = celsius * 1.80 + 32.00;
// console.log(kelvin.toFixed(5));
// console.log(fahrenheit.toFixed(5));

// let n =+prompt("n sonini kiriting");
// let k =+prompt("k sonini kiriting");
// function eub(a, b) {
//   while (b != 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }
// let aliYoshi = eub(n, k) * k;
// let valiYoshi = eub(n, k);
// console.log(aliYoshi, valiYoshi);

// let n =+prompt("n sonini kiriting");
// let a =+prompt("a sonini kiriting");
// let b =+prompt("b sonini kiriting");
// let suvMiqdori = (n * a) / 100;
// let quruqQism = n - suvMiqdori;
// let qolganMassa = (quruqQism * 100) / (100 - b);
// console.log(qolganMassa.toFixed(5));

// let n =+prompt('n ni kiriting')
// let burchaklarYigindi = (n - 2) * 180;
// console.log(burchaklarYigindi);

// let vaqt =+prompt('vaqtni kiriting');
// let t = 120;
// let soat = parseInt(vaqt.substring(0, 2));
// let minut = parseInt(vaqt.substring(3, 5));
// minut += t;
// soat += Math.floor(minut / 60);
// minut %= 60;
// soat %= 24;
// console.log(soat.toString().padStart(2, '0') + ":" + minut.toString().padStart(2, '0'));

// let buvisiniYoshi =+prompt('Buvisini Yoshini kiriting');
// let sardorniYoshi =+prompt('Sardorning yoshini kiriting');
// let yillarSoni = -1;
// for (let yil = 0; yil < 100; yil++) {
//   if (sardorniYoshi + yil === (buvisiniYoshi + yil) / 2) {
//     yillarSoni = yil;
//     break;
//   }
// }
// console.log(yillarSoni);

// let xodimSoni =+prompt('xodim sonini kiriting');
// let maoshlar = [100000, 500000, 200000, 10000, 300000];
// maoshlar.sort((a, b) => a - b);
// maoshlar.shift();
// maoshlar.pop();
// let jamiMaosh = 0;
// for (let i = 0; i < maoshlar.length; i++) {
//   jamiMaosh += maoshlar[i];
// }
// let ortachaMaosh = jamiMaosh / maoshlar.length;
// console.log(ortachaMaosh.toFixed(5));

// let n =+prompt('n sonini kiriting');
// let kesishNuqtalar = (n * (n - 3)) / 2;
// console.log(kesishNuqtalar);

// function sekundKutishi(A, B, T) {
//   let sekundlar = Math.ceil((A * T) / (A - B));
//   return sekundlar;
// }
// console.log(sekundKutishi(10, 7, 20));
// console.log(sekundKutishi(8, 4, 15));