import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'

import View from '../components/View'
import Category from '../components/Category'


function Home() {

const [videoresponse,setVideoResponse]=useState({})
const [dropvideoresponse,setDropVideoResponse]=useState({})

  return (
    <>
      <div className="container mt-5 d-flex justify-content-between mb-3">
<div className="add-videos">
  <Add setVideoResponse={setVideoResponse}/>
</div>
<Link to={'/watch-history'} style={{textDecoration:"none"}} className='fw-bolder fs-2 text-primary'>  Watch History <i class="fa-solid fa-arrow-right-to-bracket"></i>
</Link>
      </div>

<div className="container-fluid mt-5 w-100 row">
  <div className="col-lg-9 all-videos">
<View videoresponse={videoresponse} setDropVideoResponse={setDropVideoResponse}/>

  </div>

  <div className="col-lg-3 all-category">
    <Category dropvideoresponse={dropvideoresponse}/>
  </div>
</div>

    </>
  )
}

export default Home
