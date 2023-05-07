import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Createbook() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
        isbn: "",
        itle: "",
        subject: "",
        language: "",
        note: "",
        status:"",
        addedby:"",
        adddate:"",
        cardid:"",
        returndate:""
    },
    validate: (values) => {
        let errors = {}
        if (values.isbn === "") {
            errors.isbn = "Please enter isbn"
        }
        if (values.title === "") {
            errors.title = "Please enter title"
        }
        if (values.subject === "") {
            errors.subject = "Please enter subject"
        }
        if (values.language === "") {
            errors.language = "Please enter language"
        }
        if (values.note === "") {
            errors.note = "Please enter note"
        }
        if (values.status === "") {
            errors.status = "Please enter status"
        }
        if (values.addedby === "") {
            errors.addedby = "Please enter addedby"
        }
        if (values.adddate === "") {
            errors.adddate = "Please enter adddate"
        }
        if (values.cardid === "") {
            errors.cardid = "Please enter cardid"
        }
        if (values.returndate === "") {
            errors.returndate = "Please enter returndate"
        }
        return errors
    },
    onSubmit: async (values) => {
        let book = await axios.post(`https://64072abd862956433e6680c8.mockapi.io/books`, values)
        alert("Book Created")
        navigate ("/Portal/Books")
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
                                    <label style={{ color: "black" }}>ISBN</label>
                                    <input type="text" className="form-control form-control-user" id={`${formik.errors.isbn ? `input-error` :``}`}
                                        placeholder="ISBN" value={formik.values.isbn} onChange={formik.handleChange} name="isbn" />
                                    <span style={{ color: "red" }}>{formik.errors.isbn}</span>
                                </div>
                                <div className="col-sm-6">
                                    <lable style={{ color: "black" }}>Title</lable>
                                    <input type="text" className="form-control form-control-user" id={`${formik.errors.title ? `input-error` :``}`}
                                        placeholder="Title" value={formik.values.title} onChange={formik.handleChange} name="title" />
                                    <span style={{ color: "red" }}>{formik.errors.title}</span>
                                </div>
                            </div>
                            <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                    <lable style={{ color: "black" }}>Subject</lable>
                                    <input type="text" className="form-control form-control-user" id={`${formik.errors.subject ? `input-error` :``}`}
                                        placeholder="Subject" value={formik.values.subject} onChange={formik.handleChange} name="subject" />
                                    <span style={{ color: "red" }}>{formik.errors.subject}</span>
                                </div>
                                <div className="col-sm-6 ">
                                    <lable style={{ color: "black" }}>Language</lable>
                                    <input type="text" className="form-control form-control-user" id={`${formik.errors.language ? `input-error` :``}`}
                                        placeholder="Language" value={formik.values.language} onChange={formik.handleChange} name="language" />
                                    <span style={{ color: "red" }}>{formik.errors.language}</span>
                                </div>
                            </div>
                            <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                    <lable style={{ color: "black" }}>Note</lable>
                                    <input type="text" className="form-control form-control-user" id={`${formik.errors.note ? `input-error` :``}`}
                                        placeholder="Note" value={formik.values.note} onChange={formik.handleChange} name="note" />
                                    <span style={{ color: "red" }}>{formik.errors.note}</span>
                                </div>
                                <div className="col-sm-6 ">
                                    <lable style={{ color: "black" }}>Status</lable>
                                    <input type="text" className="form-control form-control-user" id={`${formik.errors.status ? `input-error` :``}`}
                                        placeholder="Status" value={formik.values.status} onChange={formik.handleChange} name="status" />
                                    <span style={{ color: "red" }}>{formik.errors.status}</span>
                                </div>
                            </div>
                            <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                    <lable style={{ color: "black" }}>Added By</lable>
                                    <input type="text" className="form-control form-control-user" id={`${formik.errors.addedby ? `input-error` :``}`}
                                        placeholder="Added By" value={formik.values.addedby} onChange={formik.handleChange} name="addedby" />
                                    <span style={{ color: "red" }}>{formik.errors.addedby}</span>
                                </div>
                                <div className="col-sm-6 ">
                                    <lable style={{ color: "black" }}>Add Date</lable>
                                    <input type="date" className="form-control form-control-user" id={`${formik.errors.adddate ? `input-error` :``}`}
                                        placeholder="Add Date" value={formik.values.adddate} onChange={formik.handleChange} name="adddate" />
                                    <span style={{ color: "red" }}>{formik.errors.adddate}</span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <lable style={{ color: "black" }}>Card Id</lable>
                                    <input type="text" className="form-control form-control-user" id={`${formik.errors.cardid ? `input-error` :``}`}
                                        placeholder="Card Id" value={formik.values.cardid} onChange={formik.handleChange} name="cardid" />
                                    <span style={{ color: "red" }}>{formik.errors.cardid}</span>
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

export default Createbook