import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Createmember() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            cardid: "",
            membergroup: "",
            emailid: "",
            address: "",
            educationlearner:"",
            class:"",
            startdate:"",
            note:"",
            returndate:""
        },
        validate: (values) => {
            let errors = {}
            if (values.name === "") {
                errors.name = "Please enter name"
            }
            if (values.cardid === "") {
                errors.cardid = "Please enter cardid"
            }
            if (values.membergroup === "") {
                errors.membergroup = "Please enter membergroup"
            }
            if (values.emailid === "") {
                errors.emailid = "Please enter emailid"
            }
            if (values.address === "") {
                errors.address = "Please enter address"
            }
            if (values.educationlearner === "") {
                errors.educationlearner = "Please enter educationlearner"
            }
            if (values.class === "") {
                errors.class = "Please enter class"
            }
            if (values.startdate === "") {
                errors.startdate = "Please enter startdate"
            }
            if (values.note === "") {
                errors.note = "Please enter note"
            }
            if (values.returndate === "") {
                errors.returndate = "Please enter returndate"
            }
            return errors
        },
        onSubmit: async (values) => {
            let student = await axios.post(`https://63fe2eba370fe830d9cfe790.mockapi.io/members`, values)
            alert("Member Created")
            navigate ("/Portal/Members")
        }
    });
  return (
    <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                        <div className="col-lg-4 d-none d-lg-block bg-register-image"></div>
                        <div className="col-lg-8">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form className="user" onSubmit={formik.handleSubmit}>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label style={{ color: "black" }}>Name</label>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.name ? `input-error` :``}`}
                                                placeholder="Name" value={formik.values.name} onChange={formik.handleChange} name="name" />
                                            <span style={{ color: "red" }}>{formik.errors.name}</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <lable style={{ color: "black" }}>Card Id</lable>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.cardid ? `input-error` :``}`}
                                                placeholder="Card Id" value={formik.values.cardid} onChange={formik.handleChange} name="cardid" />
                                            <span style={{ color: "red" }}>{formik.errors.cardid}</span>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                            <lable style={{ color: "black" }}>Member Group</lable>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.membergroup ? `input-error` :``}`}
                                                placeholder="Member Group" value={formik.values.membergroup} onChange={formik.handleChange} name="membergroup" />
                                            <span style={{ color: "red" }}>{formik.errors.membergroup}</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <lable style={{ color: "black" }}>Email Id</lable>
                                            <input type="email" className="form-control form-control-user" id={`${formik.errors.emailid ? `input-error` :``}`}
                                                placeholder="Email Id" value={formik.values.emailid} onChange={formik.handleChange} name="emailid" />
                                            <span style={{ color: "red" }}>{formik.errors.emailid}</span>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <lable style={{ color: "black" }}>Address</lable>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.address ? `input-error` :``}`}
                                                placeholder="Address" value={formik.values.address} onChange={formik.handleChange} name="address" />
                                            <span style={{ color: "red" }}>{formik.errors.address}</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <lable style={{ color: "black" }}>Education Learner</lable>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.educationlearner ? `input-error` :``}`}
                                                placeholder="Education Learner" value={formik.values.educationlearner} onChange={formik.handleChange} name="educationlearner" />
                                            <span style={{ color: "red" }}>{formik.errors.educationlearner}</span>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <lable style={{ color: "black" }}>Class</lable>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.class ? `input-error` :``}`}
                                                placeholder="Class" value={formik.values.class} onChange={formik.handleChange} name="class" />
                                            <span style={{ color: "red" }}>{formik.errors.class}</span>
                                        </div>
                                        <div className="col-sm-6 ">
                                            <lable style={{ color: "black" }}>Start Date</lable>
                                            <input type="date" className="form-control form-control-user" id={`${formik.errors.startdate ? `input-error` :``}`}
                                                placeholder="Start Date" value={formik.values.startdate} onChange={formik.handleChange} name="startdate" />
                                            <span style={{ color: "red" }}>{formik.errors.startdate}</span>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <lable style={{ color: "black" }}>Note</lable>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.note ? `input-error` :``}`}
                                                placeholder="Note" value={formik.values.note} onChange={formik.handleChange} name="note" />
                                            <span style={{ color: "red" }}>{formik.errors.note}</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <lable style={{ color: "black" }}>Return Date</lable>
                                            <input type="date" className="form-control form-control-user" id={`${formik.errors.returndate ? `input-error` :``}`}
                                                placeholder="Return Date" value={formik.values.returndate} onChange={formik.handleChange} name="returndate" />
                                            <span style={{ color: "red" }}>{formik.errors.returndate}</span>
                                        </div>
                                    </div>
                                    <input className="btn btn-primary btn-user btn-block" type={"submit"} value="Register Account" disabled={!formik.isValid} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Createmember