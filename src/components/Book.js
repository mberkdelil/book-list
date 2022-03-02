import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBook } from '../actions'
import BookDetail from './BookDetail'

const Book = (props) => {

    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(!open)  //This will negate the previous state
    };
    
    const closeModal = () => {
        setOpen(!open) //This will negate the previous state
    };

    return (
        <>
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a onClick={openModal} className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover" >
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x">{props.book.topic}</i></div>
                        </div>
                        <img className="img-fluid" src={props.book.imageURL} alt={props.book.name} />
                        <BookDetail open={open} closeModal={closeModal} book={props.book} />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{props.book.name}</div>
                        <div className="portfolio-caption-subheading text-muted">{props.book.author}</div>
                        <button onClick={() => props.deleteBook(props.book.id)} className='btn btn-danger'>Delete</button>
                        <Link to={`/editbook/${props.book.id}`} className='btn btn-info' >Edit</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default connect(null, { deleteBook })(Book)