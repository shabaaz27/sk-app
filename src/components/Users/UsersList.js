import React from 'react'
import { Card } from '../UI/Card'
import styled from './UsersList.module.css'
const UsersList = (props) => {
    console.log("props.users===>",props.users)
  return (
      <Card className={styled.users}>
        <ul>
            {
                props.users.map((item,i)=>{
                   return <li key={i}>{item?.userName} {item?.userAge} Years Old</li>
                })
            }
        </ul>
        </Card>
  )
}

export default UsersList