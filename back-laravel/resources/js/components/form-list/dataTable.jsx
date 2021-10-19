import React, { useEffect, useState } from "react";
import Header from "../common/header";
import formService from "../../../services/formService";

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

    console.log(typeof forms);
    console.log(forms, "ll");
    return (
        <div className="container mt-4">
            <Header titleText="Forms List Page" />
            <table className="table">
                <thead>
                    <tr className="d-flex ">
                        <td className="flex-fill">Form Id </td>
                        <td className="flex-fill">Form Name</td>
                        <td className="flex-fill"># Submissions</td>
                        <td className="flex-fill">Submit Page</td>
                    </tr>
                </thead>
                
                <tbody>
                 {/* Display all the forms that were submitted */}
                        {forms.map((form) => (
                       
                                 <tr className="d-flex " key={form._id}>
                                <td className="flex-fill">{form._id}</td>
                                <td className="flex-fill">{form.form_name}</td>
                                <td className="flex-fill">15</td>
                                <td>
                                    <button className="btn btn-primary">
                                        View Button
                                    </button>
                                </td>
                                </tr>
                      
                        ))}
                   
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
