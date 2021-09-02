const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // clear data
    searchField.value = ''
    const warningCustomer = document.getElementById('warning')
    if (searchText === '') {
        const totalBook = document.getElementById('total-book')
        totalBook.innerHTML = ''
        warningCustomer.innerHTML = `<p>Please give a required book name...!</p>`
        return 0;
    }
    // load data
    else if (searchText !== 0) {
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs))
    }
}
const displaySearchResult = books => {

    // console.log(books.length)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    const warningCustomer = document.getElementById('warning')
    // totalBook
    const totalBook = document.getElementById('total-book')
    totalBook.innerHTML = `<h2>Total Searched Book:${books.length}</h2>`

    if (books[0] === undefined) {
        totalBook.innerHTML = ''
        warningCustomer.innerHTML = `<h3 class="display-5">No Result Found...!</h3>`
        return 0;
    }
    else if (books[0] !== undefined) {
        warningCustomer.innerHTML = ''
    }
    // loop
    books.forEach(book => {
        // console.log(book.cover_i)
        if (book.cover_i === undefined) {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div class="card border border-info rounded h-100" >
        <img src="https://via.placeholder.com/${150}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center text-info">Title :${book.title}</h5>
                <h6 class="card-title text-center">Author name:${book.author_name}</h6>
                <p class="card-title text-center">First Publish year:${book.first_publish_year}</p>
            </div>
        </div>
         `;
            searchResult.appendChild(div);
        }
        else {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div class="card border border-info rounded h-100" >
        <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center text-info">Title :${book.title}</h5>
                <h6 class="card-title text-center">Author name:${book.author_name}</h6>
                <p class="card-title text-center">First Publish year:${book.first_publish_year}</p>
            </div>
        </div>               `;
            searchResult.appendChild(div);
        }
    });

}
