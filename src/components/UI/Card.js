import React from 'react'
import styled from './Crad.module.css'
export const Card = (props) => {
  return (
    <div className={`${styled.card} ${props.className}`}>{props.children}</div>
  )
}

 