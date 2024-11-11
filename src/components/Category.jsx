import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../service/allAPI';
import VideoCard from './VideoCard';



function Category({dropvideoresponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName,setCategoryName]=useState("")
  const [allCategories,setAllCategories]=useState([])


  const handleadd=async()=>{
if(categoryName){
  const result=await addCategoryAPI({categoryName,allVideos:[]})
  // console.log(result);
  if(result.status>=200 && result.status<300){
    Swal.fire({
      icon: 'success',
      iconColor: 'white', 
      title: 'Success',
      text: `${categoryName} added successfully!`,
      confirmButtonColor: 'white',  
      confirmButtonText: '<span style="color: black;">OK</span>',
      background: 'green',  
      color: 'white',
    });
    handleClose()
    getCategories()
    setCategoryName("")
  }else{
    console.log(result.message); 
  }
}else{
  Swal.fire({
    icon: 'error',
    iconColor: 'white',
    title: 'Error',
    text: 'please fill the missing states',
    confirmButtonColor: 'white',
    confirmButtonText: '<span style="color: black;">OK</span>',
   background: 'red',
    color: 'white',
});  
}
  }



  // console.log(categoryName);

  const getCategories=async()=>{
    const {data}=await getCategoryAPI()
    setAllCategories(data)
  }

  console.log(allCategories);

  useEffect(()=>{
    getCategories()
  },[dropvideoresponse])
  





  const removecategory = async (id) => {
    Swal.fire({
      icon: 'warning',
      iconColor: 'white',
      title: 'Are you sure?',
      text: 'Do you want to delete this category?',
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
        await deleteCategoryAPI(id);
        getCategories();
      }
    });
  };







  
    const DragOver=(e)=>{
      console.log("video drag over the category");
      e.preventDefault() 
    }

    // console.log(allCategories);

    const  videoDrop=async(e,categoryID)=>{
      const videoID=e.dataTransfer.getData('videoID')
      console.log(videoID,'video dropped',categoryID);
      const {data}=await getAVideoAPI(videoID)
      console.log(data);
      const selectedCategory=allCategories.find(item=>item.id==categoryID)
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);
      await updateCategoryAPI(categoryID,selectedCategory)
      getCategories()
      
      
      
    }
    

    const videoDragStarted=(e,videoID,categoryID)=>{
      let datashare={videoID,categoryID}
      e.dataTransfer.setData("data",JSON.stringify(datashare))
    }
    



  return (
    <>
<div className='d-grid'>
<Button style={{backgroundColor:"#e36300"}}  onClick={handleShow}>Add category</Button>

  </div>    
  
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header style={{backgroundColor:"#e36300"}} closeButton>
          <Modal.Title>Enter Details</Modal.Title>
        </Modal.Header>
        
        <Modal.Body style={{backgroundColor:"#e36300"}}>

       

        <FloatingLabel controlId="floatingInput4"label="Enter Category" className="mb-3" >
        <Form.Control type="text" placeholder="Enter Category" value={categoryName}  onChange={e=>setCategoryName(e.target.value)} />
      </FloatingLabel>

        </Modal.Body>

        <Modal.Footer style={{backgroundColor:"#e36300"}}>
          <Button variant="danger" onClick={handleClose}> Cancel  </Button>
          <Button variant="success" onClick={handleadd}>add</Button>
        </Modal.Footer>
      </Modal>

     {
      allCategories?.length>0?allCategories.map(category=>(
        <div droppable="true" onDragOver={e=>DragOver(e)} onDrop={e=>videoDrop(e,category?.id)} className="border border-3 m-3 p-3">
        <div className="d-flex justify-content-between align-items-center">
          <h4>{category?.categoryName}</h4>
          <button onClick={()=>removecategory(category.id)} className='text-danger btn'><i class="fa-solid fa-trash"></i></button>
        </div>

<Row>
  {
    category?.allVideos.length>0?category?.allVideos.map(card=>(
<Col  sm={12} md={6} lg={4} draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
    <VideoCard video={card} insidecategory={true}/>
    </Col>
    )):null
  }

</Row>

      </div>
      )):<p className='text-danger fw-bolder mt-3 ms-3'>No categories Created</p>
     }

    </>
  )
}

export default Category
