import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook,deleteBook } from "../actions/index"

const Editbook = (props) => {

    var id = window.location.pathname.split('/')[2];
    const books = props.books.find(book => book.id == id ? book : null);

    const [book, setBook] = useState({
        id: books.id, name: books.name, author: books.author, pageNum: books.pageNum,
        imageURL: books.imageURL, topic: books.topic
    });

    const navigation = useNavigate();

    return (
        <div style={{ color: "white", fontWeight: "bold", fontStyle: "italic" }} className="container">
            <form className="mt-5" >
                <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Edit A Book.." disabled />
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            value={book.name}
                            onChange={e => setBook({ ...book, name: e.target.value })} placeholder="Enter Book Name" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Page Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="pagenum"
                            value={book.pageNum}
                            onChange={e => setBook({ ...book, pageNum: e.target.value })} placeholder="PageNumber" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Author</label>
                        <input
                            type="text"
                            className="form-control"
                            name="imageURL"
                            value={book.author}
                            onChange={e => setBook({ ...book, author: e.target.value })} placeholder="Enter Book Author" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            name="imageURL"
                            value={book.imageURL}
                            onChange={e => setBook({ ...book, imageURL: e.target.value })} placeholder="Enter Book ImageURL" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Topic</label>
                        <textarea
                            className="form-control"
                            name="overview" rows="5"
                            value={book.topic}
                            onChange={e => setBook({ ...book, topic: e.target.value })} placeholder="Enter Book Topic" ></textarea>
                    </div>
                </div>
                <input onClick={e => {
                    e.preventDefault();
                    props.deleteBook(book.id)
                    props.addBook(book);
                    navigation("/");
                }}
                    type="submit" className="btn btn-warning btn-block" value="Edit Book"
                    style={{ color: "black", fontWeight: "bold", fontStyle: "italic" }} />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps, { addBook,deleteBook })(Editbook)