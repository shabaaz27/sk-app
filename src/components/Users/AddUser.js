import React, { useReducer, useState } from 'react';
import Button from '../UI/Button';
import { Card } from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import UsersList from './UsersList';



export const AddUser = props =>{
    // const [userState,dispatch] = useReducer(reducer,{})
    const [enteredUsername,setEnteredUsername] = useState('');
    const [ageData,setAgeData] = useState('');
    const [error,setError] = useState()



    const addUserHandler = event =>{
        event.preventDefault()
       
        if(enteredUsername.trim().length == 0 || ageData.trim().length == 0 ){
            setError({
                title:"Invalid input",
                message:'Please enter a valid name and age'
            })
            return;

        }
        if( +ageData < 1){
            setError({
                title:"Invalid age",
                message:'Please enter a valid age > 0'
            })
            return;
        }
        props.onAddUser(enteredUsername,ageData)
        // console.log(ageData,enteredUsername)
        setEnteredUsername('')
        setAgeData('')
    }

    const nameChangeHandler = (e,name)=>{

        setEnteredUsername(e.target.value)
    }
    const ageHandler =  (e,name)=>{
        setAgeData(e.target.value)
    }
    const errorHandler = ()=>{
        setError(null)
    }
  
    return ( 
        <>
       {error && <ErrorModal onConfirm={errorHandler}
                    title={error?.title} message={error?.message}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                    <input id="username" type="text" 
                value={enteredUsername}
                onChange={nameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" 
                value={ageData  }
                type="number" onChange={ageHandler}/>
               <Button type="submit">
                   Add User
                </Button>
            </form>
          
        </Card>  
        </>  
    )
}

