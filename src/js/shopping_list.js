const ref = {
  bookNone: document.querySelector('.shopping-none-div'),
  bookCard: document.querySelector('.shopping-card'),
};
const { bookNone, bookCard } = ref;
let page = 1;

const markup = books.map(book => {
  const { book_image, title, list_name, description, author } = book;
  return `
<div>
  <img src="" alt="" />
  <h2></h2>
  <p></p>
  <svg>
    <use href=""></use>
  </svg>
  <p></p>
  <p></p>
  <div>
    <svg>
      <use href=""></use>
    </svg>
    <svg>
      <use href=""></use>
    </svg>
    <svg>
      <use href=""></use>
    </svg>
  </div>
</div>`;
});
