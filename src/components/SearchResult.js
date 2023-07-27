import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../styles/PageHeader.css";
import "../styles/Card.css";
import "../styles/Button.css";

const SearchResult = ({ resultBooks }) => {
    console.log(resultBooks)
    return (
      <Container className="mb-5">
        <h1 className="page-header mb-3 mt-5">Search Result</h1>
        <div className="d-flex justify-content-center align-content-center flex-wrap">
          {resultBooks.listings &&
            resultBooks.listings.map((listingData, index) => (
              <Card
                key={`${index}`}
                className="card-available m-2"
              >
                <Row>
                  <Col xs={4}>
                    <img
                      src={resultBooks.book.imgUrl}
                      alt={resultBooks.book.title}
                      style={{
                        width: "100px",
                        height: "140px",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                  <Col xs={8}>
                    <p className="mb-2">
                      <b>{resultBooks.book.title}</b>
                    </p>
                    <p>{resultBooks.book.author}</p>
                    <p>{resultBooks.book.page} pages</p>
                    <p>{resultBooks.book.releaseYear}</p>
                  </Col>
                </Row>
                <Row className="second-row-available">
                  <Col
                    xs={12}
                    className="mt-1 mb-1 d-flex flex-column align-items-start justify-content-center"
                  >
                    <p className="fw-bold">Status: {listingData.availability} </p>
                    <p>Lender: {listingData.lender.first_name} </p>
                    <p>Email: {listingData.lender.email} </p>
                    <p>Location: {listingData.location}</p>
                    <p>Condition: {listingData.condition}</p>
                  </Col>
                </Row>
              </Card>
            ))}
        </div>
      </Container>
    );
  };
  

export default SearchResult;
