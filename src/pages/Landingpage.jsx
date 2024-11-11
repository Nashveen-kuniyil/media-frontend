import React from 'react'
import { Row,Col,Button } from 'react-bootstrap'
import {  MDBCard,  MDBCardBody,  MDBCardTitle,  MDBCardText,  MDBCardImage, MDBBtn, MDBRipple} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



function Landingpage() {
  return (
    <div>
      <Row className="mt-5 align-items-center justify-content-between w-100">
<Col></Col>
<Col lg={5}>
<h1 style={{color:"#e36300",fontSize:"40px"}}>Welcome To VLC</h1>
<p>VLC media player (previously the VideoLAN Client and commonly known as simply VLC) is a free and open-source, portable, cross-platform media player software and streaming media server developed by the VideoLAN project. VLC is available for desktop operating systems and mobile platforms, such as Android, iOS and iPadOS. VLC is also available on digital distribution platforms such as Apple's App Store, Google Play, and Microsoft Store.</p>

<Link to={"/home"} ><Button  style={{backgroundColor:"#e36300"}} className=''>Get started</Button>
</Link>
</Col>
<Col lg={5}>
<img src="https://www.gifservice.fr/img/gif-vignette-large/3cc4691a0883562e1dfff69c1863840e/363942-vlc-media-player-computer-software-multimedia.gif" alt="" />
</Col>
<Col></Col>

      </Row>


{/* card section */}
      <div className="container mt-3 mb-5 d-flex justify-content-center align-items-center flex-column w-100">
        <h2 className='text-center'>Features</h2>
        <div className="card mb-5 mt-5 d-flex flex-row align-items-center justify-content-between w-100">

{/* 1 */}
        <MDBCard style={{width:"18rem"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://img.icons8.com/Dusk_Wired/200w/FD7E14/video.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Managing Videos</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Manage</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    {/* 2 */}
    <MDBCard style={{width:"18rem"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfIuIKYrpLkm93xKYVdzn1BbqzpVA7fkxsA&s' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Categorized Video</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Categorize</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    {/* 3 */}
    <MDBCard style={{width:"18rem"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://i.pinimg.com/originals/86/85/f8/8685f846ca6b891b096bb6c8a382a219.gif' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Watch History</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>history</MDBBtn>
      </MDBCardBody>
    </MDBCard>

        </div>
      </div>



{/* details section */}
<div className="container border d-flex align-items-center justify-content-center w-100">
  <div className="col-lg-5">

<h4 style={{color:"#e36300"}} className='fw-bolder'>Simple,Powerful & Fast</h4>
<h6 style={{color:"#e36300"}} className='m-3'><span  className='text-black fw-bolder'>Play Everything :</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo minima laborum nam officia eos magnam, neque temporibus blanditiis rem corporis modi quasi in. Molestias labore illo debitis nesciunt. Nam, quisquam. </h6>
 
 
<h6 style={{color:"#e36300"}} className='m-3'><span className='text-black fw-bolder'>Categorize Videos :</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo minima laborum nam officia eos magnam, neque temporibus blanditiis rem corporis modi quasi in. Molestias labore illo debitis nesciunt. Nam, quisquam. </h6>


<h6 style={{color:"#e36300"}} className='m-3'><span className='text-black fw-bolder'>Managing Videos :</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo minima laborum nam officia eos magnam, neque temporibus blanditiis rem corporis modi quasi in. Molestias labore illo debitis nesciunt. Nam, quisquam. </h6>
  </div>

  <div className="col-lg-5 ms-5 mt-3 mb-3">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/MQM7CNoAsBI?si=HJe018wWgkRcFOjN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
  </div>
</div>


    </div>









  )
}

export default Landingpage
