import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [Books, setBooks] = useState([]);
  const [addBooks, setAddBooks] = useState([]);
  const [booksCart, setBooksCart] = useState([]);
  const [removeBook, setRemoveBook] = useState();
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [gridBtn, setGridBtn] = useState(false);

  useEffect(() => {
    /* Get books data from API */
    axios
      .get("http://localhost:5000/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));

    /* Get Books in Cart */
    axios
      .get("http://localhost:4000/cart")
      .then((res) => setBooksCart(res.data))
      .catch((err) => console.error(err));

    addBooksCart(booksCart);
  }, [booksCart]);

  const addBooksCart = (id) => {
    const isBookInCart = addBooks.some((book) => book.id === id);
    if (!isBookInCart) {
      const searchedBook = Books.find((book) => book.id === id);
      if (searchedBook) {
        setAddBooks([...addBooks, { ...searchedBook, quantity: 1 }]);
        Swal.fire({
          title: "Success!",
          icon: "success",
        }).then((data) => {
          if (data.isConfirmed) {
            axios
              .post("http://localhost:4000/cart", {
                ...searchedBook,
                quantity: 1,
              })
              .catch((err) => console.log(err));
          }
        });
      } else {
        return;
      }
    } else {
      return;
    }
  };

  const removeFromCart = (book) => {
    Swal.fire({
      title: `Are You Sure To Delete ${book.volumeInfo.title} ?`,
      icon: "warning",
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        Swal.fire("Deleted", "", "success");
        axios
          .delete(`http://localhost:4000/cart/${book.id}`)
          .then((res) => addBooksCart());
      }
    });
  };

  return (
    <BooksContext.Provider
      value={{
        Books,
        advancedSearch,
        setAdvancedSearch,
        gridBtn,
        setGridBtn,
        addBooksCart,
        booksCart,
        removeFromCart,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
