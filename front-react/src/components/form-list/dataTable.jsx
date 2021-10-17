import React from 'react';
import Header from "../common/header"


const DataTable = () => {
    return (
        <div className="container mt-4">
          <Header titleText="Forms List Page"/>
            <table className="table">
              <thead >
                <tr className="d-flex ">
                  <td className="flex-fill">Form Id </td>
                  <td className="flex-fill" >Form Name</td>
                  <td className="flex-fill"># Submissions</td>
                  <td className="flex-fill">Submit Page</td>
                </tr>
              </thead>
              <tbody>
                <tr className="d-flex ">
                  <td className="flex-fill">1</td>
                  <td className="flex-fill">Car campaign</td>
                  <td className="flex-fill">15</td>
                  <td><button className='btn btn-primary'>View Button</button></td>
                </tr>
                <tr className="d-flex">
                  <td className="flex-fill">1</td>
                  <td className="flex-fill">Jobs Apllication</td>
                  <td className="flex-fill">15</td>
                  <td><button className='btn btn-primary'>View Button</button></td>
                </tr>
                
              </tbody>
            </table>
        </div>
      );
}
 
export default DataTable;