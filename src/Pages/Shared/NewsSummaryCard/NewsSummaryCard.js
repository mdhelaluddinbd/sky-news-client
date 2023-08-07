import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaShare, FaStar, FaEye } from "react-icons/fa6";

const NewsSummaryCard = ({ news }) => {
  const { _id, author, details, image_url, title, total_view, rating } = news;
 
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Image
              roundedCircle
              src={author.img}
              style={{ height: "3rem" }}
            ></Image>
            <div className="d-flex align-items-center flex-column">
              <p className="ms-3 fw-bold">{author.name}</p>
              <p className="m-0">{author.published_date}</p>
            </div>
          </div>

          <div>
            <span className="m-2">
              {" "}
              <FaBookmark />
            </span>
            <FaShare />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 250) + "..."}{" "}
                {<Link to={`/news/${_id}`}>Read More</Link>}
              </p>
            ) : (
              <p>{details}</p>
            )}
          </>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center text-muted">
          <div>
            <FaStar className="text-warning me-2"></FaStar>
            <span>{rating.number}</span>
          </div>

          <div>
            <p>
              {" "}
              <FaEye className="me-2"></FaEye>
              {total_view}
            </p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
