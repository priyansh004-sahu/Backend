import React from 'react'
import  Link from 'next/link';

const page = () => {
  return (
    <div>
        <h2>courses page</h2>
        <Link className="m-2 text-2xl" href="/courses/cohort-1" >Cohort-1</Link>
    </div>

  )
}

export default page