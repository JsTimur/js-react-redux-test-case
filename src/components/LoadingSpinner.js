import Spinner from 'react-bootstrap/Spinner'
import React from 'react'

function LoadingSpinner () {
  return (
    <Spinner animation="border" variant="info">
      <span className="sr-only">Загрузка...</span>
    </Spinner>
  )
}

export default LoadingSpinner
