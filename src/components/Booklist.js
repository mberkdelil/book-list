import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { connect } from "react-redux"
import Book from './Book'

const Booklist = (props) => {

    const [color, setColor] = useState("");

    return (
        <>
            <SearchBar />
            <section className="page-section" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">BookFolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        <button onClick={() => document.body.style.background = "black"} type="button" className="btn btn-sm btn-info"
                            style={{ marginTop: '-70px' }}>Dark Theme</button> &emsp;
                        <button onClick={() => document.body.style.background = "white"} type="button" className="btn btn-sm btn-info"
                            style={{ marginTop: '-70px' }} >Light Theme</button> &emsp;
                        <button onClick={() => document.body.style.background = "#003366"} type="button" className="btn btn-sm btn-info"
                            style={{ marginTop: '-70px' }}>Standard Theme</button>
                    </div>
                    <div className="row">
                        {
                            props.books.map(book => {
                                return (
                                    <Book key={book.id} book={book} />
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(Booklist)