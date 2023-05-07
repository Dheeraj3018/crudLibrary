import { faEye, faPenSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Members() {
    const [members,setMembers] = useState ([])
    const [isLoading,setLoading] = useState(false)

    useEffect (() => {
      loadData ()
    },[])
    let loadData = async () => {
        setLoading (true);
        let members = await axios.get("https://63fe2eba370fe830d9cfe790.mockapi.io/members");
        setMembers (members.data);
        setLoading(false);
    };

    let memberDelete = async (id) => {
        try {
            let ask = window.confirm("Are you sure ! Do you want Delete this Data ?");
            if (ask){
                await axios.delete(`https://63fe2eba370fe830d9cfe790.mockapi.io/members/${id}`)
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
        <h1 className="h3 mb-0 text-gray-800">Members</h1>
        <Link to="/Portal/Create-Member" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            className="fas fa-download fa-sm text-white-50"></i> Create Member</Link>
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
                            <th>Name</th>
                            <th>Card Id</th>
                            <th>Member Group</th>
                            <th>Email Id</th>
                            <th>Address</th>
                            <th>Education Learner</th>
                            <th>Class</th>
                            <th>Start Date</th>
                            <th>Note</th>
                            <th>Return Date</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                        <th>SN</th>
                            <th>Name</th>
                            <th>Card Id</th>
                            <th>Member Group</th>
                            <th>Email Id</th>
                            <th>Address</th>
                            <th>Education Learner</th>
                            <th>Class</th>
                            <th>Start Date</th>
                            <th>Note</th>
                            <th>Return Date</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            members.map((member,index)=>{
                                  return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{member.name}</td>
                            <td>{member.cardid}</td>
                            <td>{member.membergroup}</td>
                            <td>{member.emailid}</td>
                            <td>{member.address}</td>
                            <td>{member.educationlearner}</td>
                            <td>{member.class}</td>
                            <td>{member.startdate}</td>
                            <td>{member.note}</td>
                            <td>{member.returndate}</td>
                            <td>
                                <Link to={`/Portal/Members/${member.id}`} className='btn btn-sm btn-warning mr-2'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon> </Link>
                                <Link  to={`/Portal/Members/Edit/${member.id}`} className='btn btn-sm btn-primary mr-2'><FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon> </Link>
                                <button onClick={()=> memberDelete(member.id)} className='btn btn-sm btn-danger mr-2'><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
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

export default Members