import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = () => {
  const news = useLoaderData();
  const { image_url, title, details,category_id } = news;

  return (
    <div>
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details}
          </Card.Text>
         <Link to={`/category/${category_id}`} className="text-decoration-none"> <Button variant="primary">Back to Category</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
