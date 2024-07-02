function balikKata(kata) {
  return kata.split('').reverse().join('');
}

const kataAwal = 'JavaScript';
const kataBalik = balikKata(kataAwal);
console.log(`Kata "${kataAwal}" dibalik menjadi "${kataBalik}"`);
