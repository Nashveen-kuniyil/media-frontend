import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { uploadVideoAPI } from '../service/allAPI';



function Add({setVideoResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);

    setUploadVideo({
      id:"",vname:"",url:"",link:""
    })
  }

  const handleShow = () => setShow(true);

  const[uploadVideo,setUploadVideo]=useState({
    id:"",vname:"",url:"",link:""
  })

  https://www.youtube.com/watch?v=Pt3syVmQqdg
  
  console.log(uploadVideo);

  const getyoutubelink=(e)=>{
    const {value}=e.target

    if(value.includes("v=")){
      let VID=value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${VID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
    }
    else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  const handleAdd=async()=>{
    const{id,vname,url,link}=uploadVideo

    if(!id || !vname || !url || !link){
      Swal.fire({
        icon: 'error',
        iconColor: 'white',
        title: 'Error',
        text: 'please fill all the states',
        confirmButtonColor: 'white',
        confirmButtonText: '<span style="color: black;">OK</span>',
       background: 'red',
        color: 'white',
    });    }
    else{
      // api call - upload video to json server
      const result=await uploadVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        Swal.fire({
          icon: 'success',
          iconColor: 'white', 
          title: 'Success',
          text: `${vname} uploaded successfully!`,
          confirmButtonColor: 'white',  
          confirmButtonText: '<span style="color: black;">OK</span>',
          background: 'green',  
          color: 'white',
        });
        
               handleClose()
               setVideoResponse(result.data)
      }
      else{
        Swal.fire({
          icon: 'error',
          iconColor: 'white',
          title: 'Error',
          text: result.message,
          confirmButtonColor: 'white',
          confirmButtonText: '<span style="color: black;">OK</span>',
         background: 'red',
          color: 'white',
      });  }
      
    }
  }

  
  
  

  return (
    <>
 <Button variant="primary"  onClick={handleShow}>
        Upload Videos <i class="fa-solid fa-upload fa-bounce"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header style={{backgroundColor:"#e36300"}} closeButton>
          <Modal.Title>Enter Details</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{backgroundColor:"#e36300"}}>

        <FloatingLabel controlId="floatingInput1"label="Video ID" className="mb-3" >
        <Form.Control type="text" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} placeholder="enter video ID" />
      </FloatingLabel>

        <FloatingLabel controlId="floatingInput2"label="Video Name" className="mb-3" >
        <Form.Control type="text"  onChange={(e)=>setUploadVideo({...uploadVideo,vname:e.target.value})} placeholder="enter video name" />
      </FloatingLabel>

        <FloatingLabel controlId="floatingInput3"label="Image URL" className="mb-3" >
        <Form.Control type="text"  onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} placeholder="image url" />
      </FloatingLabel>

        <FloatingLabel controlId="floatingInput4"label="Video URL" className="mb-3" >
        <Form.Control type="text" onChange={getyoutubelink}  placeholder="Video url" />
      </FloatingLabel>

        </Modal.Body>

        <Modal.Footer style={{backgroundColor:"#e36300"}}>
          <Button variant="danger" onClick={handleClose}> Cancel  </Button>
          <Button onClick={handleAdd} variant="success">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
