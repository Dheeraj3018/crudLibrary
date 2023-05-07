import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Membersview() {
    const params = useParams()

  const [searchParams, setSearchParams] = useSearchParams()
  console.log(...searchParams)

  const [memberData, setMemberData] = useState({})

  useEffect(() => {
    loadMember()
  }, [])

  let loadMember = async () => {
    try {
      let member = await axios.get(`https://63fe2eba370fe830d9cfe790.mockapi.io/members/${params.id}`)
      setMemberData(member.data)
    } catch (error) {

    }

  }
  return (
    <>
     <div className="card text-left text-opacity ml-4 mr-4" style={{color :"black" , fontSize : "40px"}}>
        <div className="card-header">
          Member Id : {memberData.id}
        </div>
        <div className="card-body ml-5 mr-5 bg-gradient-secondary" style={{fontSize : "20px"}}>
          <h5 className="card-title">Name : {memberData.name}</h5>
          <h5 className="card-title">Card Id : {memberData.cardid}</h5>
          <h5 className="card-title">Member Group : {memberData.membergroup}</h5>
          <h5 className="card-title">Email Id : {memberData.emailid}</h5>
          <h5 className="card-title">Address : {memberData.address}</h5>
          <h5 className="card-title">Education Learner : {memberData.educationlearner}</h5>
          <h5 className="card-title">Class : {memberData.class}</h5>
          <h5 className="card-title">Start Date : {memberData.startdate}</h5>
          <h5 className="card-title">Note : {memberData.note}</h5>
          <h5 className="card-title">Return Date : {memberData.returndate}</h5>
        </div>
     </div>
    </>
  )
}

export default Membersview