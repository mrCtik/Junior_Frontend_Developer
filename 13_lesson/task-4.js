class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }
    add(word, description) {
        if (!this.words.hasOwnProperty(word))//(!(word in this.words))
        {
            this.words[word] = {
                word,
                description
            }
        }
    }
    remove(words) {
        delete this.words[words]
    }
    get (words) {
        console.log(this.words[words]);

    }
    showAllWords() {
        Object.entries(this.words).forEach(([key, dictionary]) =>
            console.log(`${dictionary.word} - ${dictionary.description}`));
    }

}

class HardWordsDictionary extends Dictionary {

    add(word, description) {
        if (!this.words.hasOwnProperty(word))//(!(word in this.words))
        {
            this.words[word] = {
                word,
                description,
                isDifficult: true
            }
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
  "дилетант",
  "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);

hardWordsDictionary.add(
  "неологизм",
  "Новое слово или выражение, а также новое значение старого слова."
);

hardWordsDictionary.add(
  "квант",
  "Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");

hardWordsDictionary.showAllWords();