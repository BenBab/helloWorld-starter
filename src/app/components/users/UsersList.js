import React, { useEffect } from 'react'
import UsersListItem from './UsersListItem'

import Spinner from '../../UI/Spinner'
import ErrorModal from '../../UI/errorModal'

function UsersList({ fetchUsers, users, loading, error }) {

    useEffect(() => {
        if(!users.length && !error){
            fetchUsers('https://jsonplaceholder.typicode.com/users')
        }
        console.log(users, error)
    })

    if (loading) return <Spinner large/>
    if (error) return <ErrorModal error={error}/>

    return (
        <div>
            {users.map((item, idx) => <UsersListItem key={item.id} {...item}/> )}
        </div>
    )
}

export default UsersList

