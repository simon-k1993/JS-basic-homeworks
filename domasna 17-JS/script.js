function books() {
  let title;
  let author;
  let readingStatus;

  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  readingStatus = document.getElementById("status").value;

  function ReadingStatus(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;

    this.readingStatusOfBook = function (readingstatus) {
      if (readingstatus === "yes")
        return "I have already read " + title + " by " + author;
      else if (readingstatus === "no")
        return "No i still haven't read " + title + " by " + author;
    };
  }

  let myBook = new ReadingStatus(title, author, readingStatus);
  console.log(myBook);
  console.log(myBook.readingStatusOfBook(readingStatus));

  let bookTitle = document.getElementById("paragraph");
  bookTitle.innerHTML = "Book title: " + myBook.title;

  let bookAuthor = document.getElementById("paragraph1");
  bookAuthor.innerHTML = "Book author: " + myBook.author;

  let bookReadingStatus = document.getElementById("paragraph2");
  bookReadingStatus.innerHTML =
    "Book status: " + myBook.readingStatusOfBook(readingStatus);
}
