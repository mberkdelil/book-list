import { books } from "../data";


const initialState = {
    books: books
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state, books: [...state.books, action.payload]
            }

        case "DELETE":
            return {
                ...state, books: state.books.filter(book => book.id !== action.payload)
            }

        case "SEARCH":
            if (action.payload === "") {
                return state;
            } else {
                return {
                    ...state, books: state.books.filter(book => {
                        return book.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
                    }).sort((a, b) => {
                        return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
                    })
                }
            }

        default:
            return state;
    }
}