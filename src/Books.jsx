import { faEye, faPenSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Books() {
    const [books,setBooks] = useState ([])
    const [isLoading,setLoading] = useState(false)

    useEffect (() => {
      loadData ()
    },[])
    let loadData = async () => {
        setLoading (true);
        let books = await axios.get("https://64072abd862956433e6680c8.mockapi.io/books");
        setBooks (books.data);
        setLoading(false);
    };

    let bookDelete = async (id) => {
        try {
            let ask = window.confirm("Are you sure ! Do you want Delete this Data ?");
            if (ask){
                await axios.delete(`https://64072abd862956433e6680c8.mockapi.io/books/${id}`)
            };
            loadData ()
           } catch (error) {

        }
    }
  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">

    {/* <!-- Page Heading --> */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Books</h1>
        <Link to="/Portal/Create-Book" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            className="fas fa-download fa-sm text-white-50"></i> Create Book</Link>
    </div>
  {
    isLoading ? 
    <button className="btn btn-primary" style={{fontSize:"50px"}} type="button" disabled>
    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
    </button> :  
    
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" >
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>ISBN</th>
                            <th>Title</th>
                            <th>Subject</th>
                            <th>Language</th>
                            <th>Note</th>
                            <th>Status</th>
                            <th>Added By</th>
                            <th>Add Date</th>
                            <th>Card Id</th>
                            <th>Return Date</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                        <th>SN</th>
                            <th>ISBN</th>
                            <th>Title</th>
                            <th>Subject</th>
                            <th>Language</th>
                            <th>Note</th>
                            <th>Status</th>
                            <th>Added By</th>
                            <th>Add Date</th>
                            <th>Card Id</th>
                            <th>Return Date</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            books.map((book,index)=>{
                                  return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{book.isbn}</td>
                            <td>{book.title}</td>
                            <td>{book.subject}</td>
                            <td>{book.language}</td>
                            <td>{book.note}</td>
                            <td>{book.status}</td>
                            <td>{book.addedby}</td>
                            <td>{book.adddate}</td>
                            <td>{book.cardid}</td>
                            <td>{book.returndate}</td>
                            <td>
                                <Link to={`/Portal/Books/${book.id}`} className='btn btn-sm btn-warning mr-2'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon> </Link>
                                <Link  to={`/Portal/Books/Edit/${book.id}`} className='btn btn-sm btn-primary mr-2'><FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon> </Link>
                                <button onClick={()=> bookDelete(book.id)} className='btn btn-sm btn-danger mr-2'><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
                            </td>
                        </tr>
                                  )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  }

   

    </div>
   // <!-- /.container-fluid -->
  )
}

export default Books