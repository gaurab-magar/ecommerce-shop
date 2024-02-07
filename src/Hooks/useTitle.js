import React, { useEffect } from 'react'

export const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} | E-BOOKS`;
    },[title])
  return null
}
