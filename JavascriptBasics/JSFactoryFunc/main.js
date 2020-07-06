const Book = (title="No Title", author="No Author", pages=0, read=false) =>
{
    const info = () =>{return (read ? "read." : "Not Read")};
    return {title, author, pages, read};
};

let myBook = Book("Harold","Hank",200,true);

console.log(`${myBook.title}\n${myBook.author}\n${myBook.pages}\n${myBook.read}`);