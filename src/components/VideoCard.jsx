import React, { useState } from 'react'
import {  Card, Modal } from 'react-bootstrap'
import { addHistoryAPI, deleteVideoAPI } from '../service/allAPI';




function VideoCard({video,insidecategory,setDeleteVideoResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true);


    

  const {vname,link}=video

  let today= new Date()
  // console.log(new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today))
  
  let timestamp=new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today)
let videohistory={vname,link,timestamp}

// apicall
await addHistoryAPI(videohistory)
  }

  


  const dragStarted=(e,id)=>{
    console.log('started dragging:',id);
    e.dataTransfer.setData('videoID',id)
    
  }


  // deleting video
  const removevideo = async (id) => {
    Swal.fire({
      icon: 'warning',
      iconColor: 'white',
      title: 'Are you sure?',
      text: 'Do you want to delete this video?',
      confirmButtonColor: 'white',
      confirmButtonText: '<span style="color: black;">OK</span>',
      cancelButtonColor: 'grey',
      cancelButtonText: '<span style="color: black;">Cancel</span>',
      background: 'red',
      color: 'white',
      showCancelButton: true,
      customClass: {
        confirmButton: 'swal2-confirm-btn',
        cancelButton: 'swal2-cancel-btn'
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteVideoAPI(id)
        setDeleteVideoResponse(true)
      }
    });
  };
  

  return (
    <>
       <Card draggable onDragStart={e=>dragStarted(e,video?.id)} className='mb-5' style={{ width: '18rem',backgroundColor:"#e36300",padding:"10px" }}>
      <Card.Img style={{cursor:"pointer"}} variant="top" width={"100%"} onClick={handleShow} src={video.url} />
      <Card.Body>
        <div className='d-flex justify-content-between'>
        <Card.Title>{video.vname}</Card.Title>
        
{  insidecategory?null: <button  style={{backgroundColor:"transparent",borderColor:"transparent"}} onClick={()=>removevideo(video?.id)}>
  <i class="fa-solid fa-trash fa-lg"></i></button>}        </div>
      </Card.Body>
    </Card>

    <Modal  show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor:"#e36300" }} closeButton>
          <Modal.Title>{video.vname}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor:"#e36300" }}><iframe width="100%" height="315" src={`${video.link}autoplay=1`}
         title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
        
      </Modal>

    </>
  )
}

export default VideoCard
