
// // cara membuat objek
// // problem yah kurang efektif untuk membuat objek yang banyak
// // 1.cara membuat objek literal

// // let mahasiswa1 = {
// //     nama : "saeful",
// //     energi : 10,
// //     makan: function(porsi){
// //         this.energi = this.energi + porsi;
// //         console.log(`selamat makan ${this.nama},terimakasih`);
// //     }

// // }

// // let mahasiswa2 = {
// //     nama : "ahmad",
// //     energi : 11,
// //     makan: function(porsi){
// //         this.energi = this.energi + porsi;
// //         console.log(`selamat makan ${this.nama},terimakasih`);
// //     }

// // }

// //2. fungsion deklaration

// const methodMahasiswa ={
//     makan : function (porsi) {
//     this.energi += porsi;
//         console.log(`hay ${this.nama},selamat makan`);
        
//     },
//     main : function (jam) {
//         this.energi -= jam ;
//         console.log(`halo ${this.nama},selamat makan`);

//     },
//     tidur : function (jam) {
//         this.energi += jam*2 ;
//         console.log(`halo ${this.nama},selamat tidur`);

//     }


// };

// function mahasiswa(nama,energi) {
//     let mahasiswa=object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi=energi;
    
    

//     return mahasiswa;
// }
// let saep = mahasiswa ('saep',10);
// let doni = mahasiswa ('doni',11);

// // 3.function contraktor

// // function mahasiswa(nama,energi) {
// //         let mahasiswa={};
// //         this.nama = nama;
// //         this.energi=energi;
    
// //         this.makan = function (porsi) {
// //             this.energi += porsi;
// //             console.log(`hay ${this.nama},selamat makan`);
            
// //         }
// //         this.main = function (jam) {
// //             this.energi -= jam ;
// //             console.log(`halo ${this.nama},selamat makan`);
            
// //         }
    
        
// //     }
// //     let saep = new mahasiswa ('pul',10);



// function mahasiswa(nama,energi) {
//     let mahasiswa=object.create(methodMahasiswa);
//     this.nama = nama;
//     this.energi=energi;
// }

// let saepul = new mahasiswa('saeful',10)


function mahasiswa(nama,energi) {
    //let mahasiswa=object.create(methodMahasiswa);
    this.nama = nama;
    this.energi=energi;
}
mahasiswa.prototype.makan= function (porsi) {
    this.energi += porsi;
    return`selamat bro ${this.nama},`;
    
}
let saeful = new mahasiswa('saeful',10);