import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideoAPI, getCategoryAPI, updateCategoryAPI } from '../service/allAPI'


function View({videoresponse,setDropVideoResponse}) {

  const [deleteVideoResponse,setDeleteVideoResponse]=useState(false);

const [allVideos,setAllVideos]=useState([])

const getAllVideos=async()=>{
  const result=await getAllVideoAPI()
  console.log(result);
  if(result.status==200)
{
  setAllVideos(result.data)
}  
else{
  console.log("api failed");
  setAllVideos([])
}
}

console.log(allVideos);

useEffect(()=>{
  getAllVideos()
  setDeleteVideoResponse(false)
},[videoresponse,deleteVideoResponse])


const DragOver=(e)=>{
  e.preventDefault() 
}


const videoDropped=async(e)=>{
  const{videoID,categoryID}=JSON.parse(e.dataTransfer.getData("data"))
  // console.log(videoID,categoryID);
  const {data}=await getCategoryAPI()
  const selectedCategory=data.find(item=>item.id==categoryID)
  let result=selectedCategory.allVideos.filter(video=>video.id!==videoID)
  console.log(result);
  let {id,categoryName}=selectedCategory
  let newCategory={id,categoryName,allVideos:result}
  const response=await updateCategoryAPI(categoryID,newCategory)
  setDropVideoResponse(response)
  
}


  return (
    <>

<h2>All Videos</h2>

    <Row droppable="true" onDragOver={e=>DragOver(e)} onDrop={e=>videoDropped(e)}>
{
  allVideos?.length>0?allVideos.map((video,index)=>(
    <Col key={index} sm={12} md={6} lg={4}>
    <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
    </Col>
  )):<p className='text-danger'>Nothing to display</p>
}

     
      
    </Row>
    </>
  )
}

export default View
