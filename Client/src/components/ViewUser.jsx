import React from 'react'

const ViewUser = () => {
  return (
    <div>
        <table>
            <thead>

            </thead>
            <tbody>
                {error || users.map((user, index) => (
                    <tr key = {user.email}>
                        <td>{++index}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ViewUser