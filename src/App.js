import React from 'react'

import "../src/style.css"

import {AddUser} from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App(props) {
  const [userList,setUserList] = React.useState([])

  const onAddHandler=(UserName,age)=>{
    setUserList((prevState)=>{
      return [...prevState,{userName:UserName,userAge:age,id:Math.random().toString()}]
    })
    // console.log(userList)
  }

  return (
    <div>
       <AddUser onAddUser={onAddHandler}/>
       <UsersList users={userList}/>
    </div>
  )
}

export default App