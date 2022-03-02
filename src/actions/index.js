export const addBook = book => {
    return { type: "ADD", payload: book }
};

export const deleteBook = id => {
    return { type: "DELETE", payload: id }
};

export const searchBook = search => {
    return { type: "SEARCH", payload: search }
};