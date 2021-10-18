import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const FormsList = () => {

    const [forms, setForms] = useState([]);
    useEffect(()=>{
        axios.get('/api/forms').then(response=>{
            setForms(response.data);
        })
    })
    return (  
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="card">
                        <div className="card-header">All forms</div>
                   <div className="card-body">
                       <Link className='btn btn-primary' to='/create'>
                           create new form
                       </Link>
                       <ul className='list-group list-group-flush'>
                           {forms.map(form=>(
                               <Link className='list-group-item-action d-flex justify-content-between align-items-center'
                           to={`${form.id}`}
                           key={form.id}>
                            {form.name}
                            <span className='badge badge-primary badge-pill'>
                                {form.questions_count}
                            </span>
                            </Link>
                               ))}
                       </ul>
                   </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FormsList;