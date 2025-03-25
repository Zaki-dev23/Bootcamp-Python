//Exercise 7 : My Book List

//1 File Html

//2

const allBooks = [
    {
        title: 'Book 1',
        author: 'Author 1',
        image: 'https://example.com/book1.jpg',
        alreadyRead: true
    },
    {
        title: 'Book 2',
        author: 'Author 2',
        image: 'https://example.com/book2.jpg',
        alreadyRead: false
    }
];

//3 add 2 of books manually

//4
//4-1
const section = document.querySelector('section')

allBooks.forEach(book => {
    const img = document.createElement('img')
    img.setAttribute('src', `${book.image}`)
    img.style.width = '100px'
    const div = document.createElement('div')
    div.textContent = `${book.title} written by ${book.author}`
    if (book.alreadyRead) {
        div.style.color = 'red'
    }
    div.appendChild(img)
    section.appendChild(div)
});




