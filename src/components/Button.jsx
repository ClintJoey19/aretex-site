import React from 'react'
import { styles } from '../style'

const Button = ({name}) => {
  return (
    <button className={styles.primaryBtn}>{name}</button>
  )
}

export default Button