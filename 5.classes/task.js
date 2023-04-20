class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100; 
        this.type = null;
    }

    set state(newState){
        if(newState < 0){
            this._state = 0;
        } else if(newState > 100){
            this._state = 100;
        } else{
            this._state = newState;
        }
    }

    get state(){
        return this._state;
    }

    fix(){
        let newState = this._state * 1.5;
        this.state = newState;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

/* Задание 2 */ 

  class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
         let foundBook = this.books.find(item => {
            if(item[type] == value){
                return item;
            }
        })
        if(Boolean(foundBook)){
            return foundBook;
        }else{
            return null; 
        }
    }

    giveBookByName(bookName){
        let foundBook = this.books.find(item => item.name == bookName);
        if(foundBook != -1){
            this.books = this.books.filter(item => item.name != bookName);
            return foundBook;
        }else{
            return null;
        }
    }
  }

const library = new Library('Городская');

const novelBook = new NovelBook('Уильям Сомерсет Моэм','Луна и Грош', 1919, 440);
const fantasticBook = new FantasticBook('Станислав Лэм', 'Звездные дневники Ийона Тихого', 1953, 300);
const detective = new DetectiveBook('Агата Кристи', 'Десять негритят', 1939, 250);
const magazine = new Magazine('Трамвай', 1993, 25);

library.addBook(novelBook);
library.addBook(fantasticBook);
library.addBook(detective);
library.addBook(magazine);

console.log(library.findBookBy('releaseDate', 1919));
let givenBook = library.giveBookByName('Десять негритят');
givenBook.setState = 30;
givenBook.fix();
library.addBook(givenBook);