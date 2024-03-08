// const namaPanggilanRiska = new Set();

// namaPanggilanRiska.add("Riska");
// namaPanggilanRiska.add("Eja");
// namaPanggilanRiska.add("Liska");
// namaPanggilanRiska.add("Rizka");

// console.log(namaPanggilanRiska);

// console.log(namaPanggilanRiska.has("Ika"));
// console.log(namaPanggilanRiska.has("Eja"));

// namaPanggilanRiska.delete("Rizka");

// namaPanggilanRiska.add("K");

// console.log(namaPanggilanRiska);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// fungsi

// function salam() {
//   console.log("Assalamualaikum");
// }

// salam();

// function greeting(name, language) {
//   if (language === "English") {
//     console.log(`Good Night ${name}!`);
//   } else if (language === "Indonesia") {
//     console.log(`Selamat Pagi ${name}!`);
//   } else {
//     console.log("P");
//   }
// }

// greeting("Ifdal", "Indonesia");

// function perkalian(x, y) {
//   return x * y;
//   return x + y;
// }

// let hasil = perkalian(5, 10);
// console.log(hasil);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// OOP

// class Car {
//   constructor(brand, color, maxSpeed, chassisNumber) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = chassisNumber;
//   }

//   drive() {
//     console.log(`${this.brand} ${this.color} is driving`);
//   }

//   reverse() {
//     console.log(`${this.brand} ${this.color} is reversing`);
//   }

//   turn() {
//     console.log(`${this.brand} ${this.color} is turning`);
//   }
// }

// // Membuat objek mobil dengan constructor function Car
// const car1 = new Car("Toyota", "Silver", 200, "to-1");
// const car2 = new Car("Honda", "Black", 180, "ho-1");
// const car3 = new Car("Suzuki", "Red", 220, "su-1");

// console.log(car1);
// console.log(car2);
// console.log(car3);

// car1.drive();
// car2.reverse();
// car3.turn();

/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
 
Toyota Silver is driving
Honda Black is driving
Suzuki Red is driving
*/

// class Burung {
//   constructor(nama, warnaBulu) {
//     this.nama = nama;
//     this.warnaBulu = warnaBulu;
//   }

//   jalan() {
//     console.log(`${this.nama} ${this.warnaBulu} sedang berjalan`);
//   }

//   terbang() {
//     console.log(`${this.nama} ${this.warnaBulu} sedang terbang`);
//   }
// }

// const burung1 = new Burung("Merpati", "Putih");
// const burung2 = new Burung("Gagak", "Hitam");
// const burung3 = new Burung("Elang", "Putih");

// console.log(burung1);
// console.log(burung2);
// console.log(burung3);

// burung1.terbang();
// burung1.jalan();
// burung1.terbang();

// console.log(typeof Burung);

//
//
//
//
//
//
//
//
//
//

// class Animal {
//   constructor(name, age, isMammal) {
//     this.name = name;
//     this.age = age;
//     this.isMammal = isMammal;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age) {
//     super(name, age, true);
//   }

//   eat() {
//     return `${this.name} sedang makan!`;
//   }
// }

// class Eagle extends Animal {
//   constructor(name, age) {
//     super(name, age, false);
//   }

//   fly() {
//     return `${this.name} sedang terbang!`;
//   }
// }

// const myRabbit = new Rabbit("Labi", 2);
// const myEagle = new Eagle("Elo", 4);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// functional programming

// const books = [
//   { title: "The Da Vinci Code", author: "Dan Brown", sales: 5094805 },
//   { title: "The Ghost", author: "Robert Harris", sales: 807311 },
//   { title: "White Teeth", author: "Zadie Smith", sales: 815586 },
//   { title: "Fifty Shades of Grey", author: "E. L. James", sales: 3758936 },
//   { title: "Jamie's Italy", author: "Jamie Oliver", sales: 906968 },
//   { title: "I Can Make You Thin", author: "Paul McKenna", sales: 905086 },
//   {
//     title: "Harry Potter and the Deathly Hallows",
//     author: "J.K Rowling",
//     sales: 4475152,
//   },
// ];

// const greatAuthors = books
//   .filter((book) => book.sales > 1000000)
//   .map(
//     (book) =>
//       `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`
//   );

// console.log(greatAuthors);

//
//
//
//
//
//
//
//
//
//
//
// setTimeout()
// console.log("Mari");

// setTimeout(() => {
//   console.log("kita");
// }, 1000);

// setTimeout(() => {
//   console.log("tunggu");
// }, 2000);

// setTimeout(() => {
//   console.log("Tadaa!!");
// }, 10000);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// asycnchronous
const util = require("util");

function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId === "id") {
      callback(null, [
        { id: "id-jk", name: "Jakarta" },
        { id: "id-bt", name: "Banten" },
        { id: "id-jr", name: "Jawa Barat" },
      ]);
      return;
    }

    callback(new Error("Country not found"), null);
  }, 1000);
}

const getProvincesPromise = util.promisify(getProvinces);

module.exports = { getProvinces: getProvincesPromise };

// - Pastikan fungsimu mengembalikan Promise
// - Pastikan fungsimu menolak Promise ketika countryId bukan id
// - Pastikan fungsimu menyelesaikan Promise dengan data provinsi Indonesia (tanpa perubahan)
