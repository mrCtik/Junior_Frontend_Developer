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

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add("Веб-разработчик", "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие");

dictionary.add(
    "constructor",
    "Это слово почему-то не добавляется в твой словарь"
    );
// dictionary.get("JavaScript");

dictionary.remove("JavaScript");
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает
// и дополняет существующие
// 8<7<20
// fromTimeNum<timeHour<tillTimeNum