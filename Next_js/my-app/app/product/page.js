'use client'


import React from 'react'
import Link  from 'next/link';

const page = () => {
  return (
    <div>
      <h2>Prduct  Page </h2>
        <Link href="/product/1">productId page</Link>
    </div>
  )
}

export default page