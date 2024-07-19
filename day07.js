// Activity 1
const books = {
    title : "Harry Potter",
    author : "JK Rowling",
    year : 2000
}

console.log(books);

console.log(`book title is ${books.title} and author is ${books.author
}`);

// Activity 2

books.getDeatils = () => {
    console.log(`Book title is ${books.title} and author is ${books.author}`);
}

console.log(books.getDeatils());

books.updateyear = (year) => {
    books.year = year
}
books.updateyear(2004)
console.log(books);
// Activity 3

const libraryObject = {
    name : "Library",
    books : [
        {
            name :"atomic habits",
            year : 2010
        },
        {
            name : "mindset",
            year : 2012
        },
        {name : "ikigai", year : 2016}
    ]
}
console.log(libraryObject);

console.log(libraryObject.name);
libraryObject.books.forEach(book => {
    console.log(book.name);
});

// Activity 4
books.returnWithThis = function (){
    console.log(`Title : ${this.title} and Year : ${this.year}`);
}
books.returnWithThis();

// Activity 5

const bookTwo = {
    title : "Mindset",
    author : "XYZ",
    year : 2004
}

for(const prop in bookTwo){
    console.log(`${prop} of book is ${bookTwo[prop]}`);
}