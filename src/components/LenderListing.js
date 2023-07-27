import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import EditModal from "./EditModal";

import { useDeleteListing } from "../hooks/useDeleteListing";
import { classNameSelector, classNameSelectorRow } from "../utils/classNameSelector";

import "../styles/PageHeader.css";
import "../styles/Card.css";
import "../styles/Button.css";

const LenderListing = ({ books, handleEdit, handleListingDelete, error }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editBook, setEditBook] = useState(null);

  const { deleteListing, error: hookError, loading } = useDeleteListing();

  const handleClickEdit = (bookId) => {
    // find the book in the books array using bookId
    const bookToEdit = books.find(
      (bookData) => bookData.book._id.toString() === bookId.toString()
    );
    setEditBook(bookToEdit);
    handleShowEditModal();
  };

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = () => setShowEditModal(true);

  const handleClickDelete = async (listingId) => {
    const result = await deleteListing(listingId);
    if (result) {
      handleListingDelete(listingId);
    }
  };

  return (
    <div>
      <Container className="mb-5">
        <h1 className="page-header mb-3 mt-5">Listed books</h1>
        <div className="d-flex justify-content-center align-content-center flex-wrap">
          {error && <div className="error-message">{error}</div>}
          {books &&
            books.map((bookData) => (
              <Card
                key={`${bookData.book._id}-${bookData.listing._id}`}
                className= {classNameSelector(bookData.listing.availability)}
              >
                <Row>
                  <Col xs={4}>
                    <img
                      src={bookData.book.imgUrl}
                      alt={bookData.book.title}
                      style={{
                        width: "80px",
                        height: "120px",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                  <Col xs={8}>
                    <p className="mb-2">
                      <b>{bookData.book.title}</b>
                    </p>
                    <p>{bookData.book.author}</p>
                    <p>{bookData.book.page} pages</p>
                    <p>{bookData.book.releaseYear}</p>
                  </Col>
                </Row>
                <Row className={classNameSelectorRow(bookData.listing.availability)}>
                  <Col
                    xs={12}
                    className="mt-1 mb-1 d-flex flex-column align-items-start justify-content-center"
                  >
                    <p className="fw-bold">Status: {bookData.listing.availability}</p>
                    <p>Location: {bookData.listing.location} </p>
                    <p>Condition: {bookData.listing.condition} </p>
                  </Col>
                </Row>
                <Row className="">
                  <Col
                    xs={12}
                    className="d-flex align-items-center justify-content-center "
                  >
                    {bookData.book.isCreated ? (
                      <>
                        <Button
                          onClick={() => handleClickEdit(bookData.book._id)}
                          className="btn-custom-bkg m-2"
                        >
                          Edit book & listing
                        </Button>
                        <Button
                          onClick={() =>
                            handleClickDelete(bookData.listing._id)
                          }
                          
                          disabled={loading}
                          className="btn-custom-bkg-danger"
                        >
                          Delete listing
                        </Button>
                        {hookError && (
                          <div className="error-message">{hookError}</div>
                        )}
                      </>
                    ) : (
                      <>
                        <Button
                          onClick={() => handleClickEdit(bookData.book._id)}
                          className="btn-custom-bkg m-2"
                        >
                          Edit listing
                        </Button>
                        <Button
                          onClick={() =>
                            handleClickDelete(bookData.listing._id)
                          }
                          
                          disabled={loading}
                          className="btn-custom-bkg-danger"
                        >
                          Delete listing
                        </Button>
                        {hookError && (
                          <div className="error-message">{hookError}</div>
                        )}
                      </>
                    )}
                  </Col>
                </Row>
              </Card>
            ))}
        </div>
      </Container>
      {editBook && (
        <EditModal
          show={showEditModal}
          handleClose={handleCloseEditModal}
          bookData={editBook}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default LenderListing;
