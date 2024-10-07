let myName = "M Reksa Ariansyah";

myName = "Jude Bellingham";

const namaSaya = "Muhammad Reksa Ariansyah";

function testingSum(param1, param2) {
  console.log(param1 + param2);
}

function hitungBMI(beratBadan, tinggiBadan) {
  const tinggiValue = tinggiBadan / 100;
  const hasil = beratBadan / (tinggiValue * tinggiValue);

  console.log(hasil);

  if (hasil < 18.5) {
    console.log("Berat Badan Anda Kurang");
  } else if (hasil >= 18.5 && hasil <= 24.9) {
    console.log("Normal");
  } else if (hasil >= 25 && hasil <= 29.9) {
    console.log("Berat Badan anda berlebih");
  } else {
    console.log("Anda Obesitas");
  }
}

function loopingAngka(data) {
  for (let i = 1; i <= data; i++) {
    console.log("ini adalah angka ke" + i);
  }
}

loopingAngka(10);
