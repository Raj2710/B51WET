import React from 'react'
import Card from 'react-bootstrap/Card';
function BlogCard({title,image,description}) {
  return <>
    <Card style={{ width: '30rem', padding:'5px', marginTop:'25px'}}>
      <Card.Img variant="top" src={image?image:"https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"} />
      <Card.Body>
        <Card.Title>{title?title:"Card Title"}</Card.Title>
        <Card.Text>
          {
            description?description:"Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        </Card.Text>
      </Card.Body>
    </Card>
  </>
}

export default BlogCard