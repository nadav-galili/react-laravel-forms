import React, { useEffect, useState } from "react";
import Header from "../common/header";
import formService from "../../../services/formService";
import { Link } from "react-router-dom";

const DataTable = () => {
    const [forms, setForms] = useState([]);
    useEffect(() => {
        const getForms = async () => {
            let forms = await formService.getAllForms();
            forms = forms.data;
            setForms(forms);
        };
        getForms();
    }, []);

    return (
        <div className="container mt-4">
            <Header titleText="Forms List Page" />
            <table className="table">
                <thead>
                    <tr className="d ">
                        <th className="fl">Form Id </th>
                        <th className="fle">Form Name</th>
                        <th className="fle"># Submissions</th>
                        <th className="fl">Submit Page</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Display all the forms that were submitted */}
                    {forms.map((form) => (
                        <tr  key={form._id}>
                            <td >{form._id}</td>
                            <td >{form.form_name}</td>
                            <td >15</td>
                            <td>
                                <Link
                                    to={`/submit/${form._id}`}
                                    className="btn btn-primary"
                                >
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
