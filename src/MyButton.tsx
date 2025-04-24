import React from 'react'
import Button from '@mui/material/Button'

const MyButton = ({ label }: { label: string }) => {

  return <Button variant="contained">{label}</Button>
}

export { MyButton }