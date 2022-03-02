import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { searchBook } from "../actions/index";

const SearchBar = (props) => {

    const [search, setSearch] = useState("");

    return (
        <form onSubmit={e => {
            e.preventDefault();
            props.searchBook(search);
        }} >
            <div className="form-row mb-5">
                <div className="col-10">
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type="text" className="form-control"
                        placeholder="Seach a book and press Enter"
                    />
                </div>
                <div className="col-2">
                    <Link
                        to="/addnewbook"
                        type="button"
                        className="btn btn-md btn-warning"
                        style={{ float: 'right' }}>Add New Book
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default connect(null, { searchBook })(SearchBar);