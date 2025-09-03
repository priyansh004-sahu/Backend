'use client'


import { useParams } from 'next/navigation'
import React from 'react'

const app = () => {

    const paramas = useParams();
    console.log(paramas.id);

  return (
    <div>
        <h2> {paramas.id} Collection</h2>
    </div>
  )
}

export default app