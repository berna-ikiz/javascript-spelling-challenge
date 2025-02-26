function spell(word) {
  const vowels = ["a", "e", "i", "o", "u", "ı", "ö", "ü"];
  let syllables = [];
  let syllable = "";

  if (typeof word !== "string" || word === null || word === undefined) {
    console.error("Geçersiz giriş! Lütfen bir kelime girin.");
    return;
  }

  for (let i = 0; i < word.length; i++) {
    syllable += word[i];
    if (vowels.includes(word[i])) {
      if (word[i + 1] && !vowels.includes(word[i + 1]) && !vowels.includes(word[i + 2]) ) {
        syllable += word[i + 1];
        i++;
      }
      syllables.push(syllable);
      syllable = "";
    }
  }
  return(syllables.join("-"));
}

console.log(spell("berna"));
console.log(spell("kitap"));
console.log(spell("kalem"));
console.log(spell("defter"));
console.log(spell("bilgisayar"));
console.log(spell("selam"));
console.log(spell("merhaba"));
console.log(spell("melek"));
console.log(spell("kumsal"));
console.log(spell("kedi"));
console.log(spell("şaşkın"));
console.log(spell("şehir"));
console.log(spell("tren"));
console.log(spell(" "));
console.log(spell(undefined));
console.log(spell(123));
console.log(spell(null));