/**
Object Literals
**/
console.log("OBJECT LITERAL");
console.log("----------------------------");

function threeBooks() {
  // Create 3 book objects with object literal syntax. Books should have properties for title, author, and pageCount
  // Write code here
  var bookOne = {
    title: 'He Loves Me Not',
    author: 'Christine Kersey',
    pageCount: 230,
    haveRead: false


  };
  var bookTwo = {
    title: 'The Rescue',
    author: 'Nicholas Sparks',
    pageCount: 300,
    haveRead: false
  };

  var bookThree = {
    title: 'Mothers and Sons',
    author: 'Ferris Robinson ',
    pageCount: 32,
    haveRead: true
  };

  // Add a property of haveRead to each book object you created. This should be set to true or false
  // Write code here


  // Store these objects in an array called books
  // Write code here

  var books = [bookOne, bookTwo, bookThree];

  // return this array
  return books;
}

threeBooks();
console.log(threeBooks());
//------------------------------//
console.log("----------------------------");
console.log("FIX THE OBJECT LITERAL SYNTAX");
function fixLiteralSyntax() {
  // Fix the problems with our object literal

  var avengersMovie = {
      name : "Avengers",
      runtime : "143 mins",
      releaseYear: 2012,
      Director : "Joss Whedon"
  };


  // return corrected object
  return avengersMovie;
}
fixLiteralSyntax();
console.log(fixLiteralSyntax());

/**
Object Constructors
**/

// Write a constructor function to create Book objects with the same four properties as above.
// Write code here
console.log("----------------------------");
console.log("CONSTRUCTOR FUNCTION");
function createBooksWithConstructor() {
  // Create 3 new books using this constructor function.
  // Write code here
    var anotherThreeBooks = function(title, author, pageCount, haveRead) {
      this.title = title;
      this.author = author;
      this.pageCount = pageCount;
      this.haveRead = haveRead;
    };

    var bookA = new anotherThreeBooks('Cam Jansen', 'David A. Adler', 45, false);
    var bookB = new anotherThreeBooks('Sunset of the Sabertooth', 'Wary Pope Osborne', 68, false);
    var bookC = new anotherThreeBooks('Julie B. Jones smells something fishy', 'Barbara Park', 45, true);


  // Store them in an array called books
  // Write code here
  books = [bookA, bookB, bookC];
//   // return our array of books
   return books;
}

createBooksWithConstructor();
console.log(createBooksWithConstructor());


//-- DON'T TOUCH CODE BELOW --
module.exports = {
  threeBooks: threeBooks,
  fixLiteralSyntax: fixLiteralSyntax,
  Book: Book,
  createBooksWithConstructor: createBooksWithConstructor
};
