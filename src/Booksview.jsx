import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Booksview() {
    const params = useParams()

  const [searchParams, setSearchParams] = useSearchParams()
  console.log(...searchParams)

  const [bookData, setBookData] = useState({})

  useEffect(() => {
    loadBook()
  }, [])

  let loadBook = async () => {
    try {
      let book = await axios.get(`https://64072abd862956433e6680c8.mockapi.io/books/${params.id}`)
      setBookData(book.data)
    } catch (error) {

    }

  }
  return (
    <>
     <div className="card text-left text-opacity ml-4 mr-4" style={{color :"black" , fontSize : "40px"}}>
        <div className="card-header">
          Book Id : {bookData.id}
        </div>
        <div className="card-body ml-5 mr-5 bg-gradient-secondary" style={{fontSize : "20px"}}>
          <h5 className="card-title">ISBN : {bookData.isbn}</h5>
          <h5 className="card-title">Title : {bookData.title}</h5>
          <h5 className="card-title">Subject : {bookData.subject}</h5>
          <h5 className="card-title">Language : {bookData.language}</h5>
          <h5 className="card-title">Note : {bookData.note}</h5>
          <h5 className="card-title">Status : {bookData.status}</h5>
          <h5 className="card-title">Added By : {bookData.addedby}</h5>
          <h5 className="card-title">Add Date : {bookData.adddate}</h5>
          <h5 className="card-title">Card Id : {bookData.cardid}</h5>
          <h5 className="card-title">Return Date : {bookData.returndate}</h5>
        </div>
     </div>
    </>
  )
}

export default Booksview