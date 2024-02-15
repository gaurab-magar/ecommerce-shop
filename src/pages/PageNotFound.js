import React from 'react'
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  useTitle('page not found')
  return (
    <main>
        <div className='container'>
            <div className='text-center'>
                <h2 className='fw-bold'>PageNotFound</h2>
                <Link to="/" className="btn btn-primary">Back To Home</Link>
            </div>
        </div>
    </main>
  )
}
