import React from 'react';
import '../scss/workFlow.scss'
import {useHistory} from 'react-router-dom'
export const WorkFlow = () =>{
    const createData = (issueTitle, progress, assignee, createOn) =>{
        return {issueTitle, progress, assignee, createOn}
    }
    const body = [
        createData('Design login','doing','kiwi','6/4/2021'),
        createData('Design Home','doing','kiwi','6/4/2021'),
        createData('Design Detail','doing','kiwi','6/4/2021'),
        createData('Design SingOut','doing','kiwi','6/4/2021'),
        createData('Design Cart','doing','kiwi','6/4/2021'),
    ]
    const handleSubmit = () =>{}
    const history = useHistory();
    return(
        <div>
            <div className="search">
            <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Search"></input>
          <button type="submit">Find</button>
          </form>
            </div>
            <div className="list-work">
            <table>
                <thead>
              <tr>
                  <th>Issue Title</th>
                  <th>Progress</th>
                  <th>Assignee</th>
                  <th>Create On</th>
              </tr>
              </thead>
              <tbody>
              {body.map((bd)=>(
                  <tr key={bd.issueTitle} onClick={()=>{
                        history.push("/detail")
                  }}>
                  <td>{bd.issueTitle}</td>
                  <td>{bd.progress}</td>
                  <td>{bd.assignee}</td>
                  <td>{bd.createOn}</td>
                  </tr>
              ))}
              </tbody>
            </table>
            </div>
        </div>
    )
}