import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { JournalPlus } from "react-bootstrap-icons";

import EditModal from "./EditModal";

import { useDeleteListing } from "../hooks/useDeleteListing";
import {
  classNameSelector,
  classNameSelectorRow,
} from "../utils/classNameSelector";

import "../styles/PageHeader.css";
import "../styles/Card.css";
import "../styles/Button.css";
import "../styles/Page.css";

const LenderListing = ({ books, handleEdit, handleListingDelete, error }) => {
  // state variables to manage the edit modal's visibility and the book to be edited
  const [showEditModal, setShowEditModal] = useState(false);
  const [editBook, setEditBook] = useState(null);

  // custom hook to handle the delete listing process
  const { deleteListing, error: hookError, loading } = useDeleteListing();

  // function to handle the Edit button click and set the book to be edited
  const handleClickEdit = (bookId) => {
    // find the book in the books array using bookId
    const bookToEdit = books.find(
      (bookData) => bookData.book._id.toString() === bookId.toString()
    );
    // set the state with the bookToEdit value
    setEditBook(bookToEdit);
    // open modal for editing
    handleShowEditModal();
  };

  // functions to manage the edit modal's visibility
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = () => setShowEditModal(true);

  // function to handle the Delete button click and delete the listing
  const handleClickDelete = async (listingId) => {
    // call deleteListing to manage the api delete request
    const result = await deleteListing(listingId);
    // if the request was successful
    if (result) {
      // call handleListingDelete function from the parent to delete the listing from the state
      handleListingDelete(listingId);
    }
  };

  // Lender listing cards conditional rendering is necessary as the api requests are asynchronous
  // i.e.:  {books &&  books.map((bookData) => ( ...
  // card buttons are also conditionally rendered depending on the book creator status
  return (
    <div className="pt-1">
      <Container className="mb-4">
        <h1 className="page-header my-2 mb-3">Listed books</h1>
        <div className="d-flex justify-content-center align-content-center flex-wrap">
          {error && <div className="error-message">{error}</div>}
          <Card key="info" className="card-add">
            <Row className="my-2">
              <JournalPlus
                className="icon-hover mx-2"
                size={100}
                color="#233565"
              />
            </Row>
            <Row className="second-row-add my-2">
              <Col
                xs={12}
                className=" d-flex flex-column align-items-start justify-content-center"
              >
                <p className="my-2 fw-semibold">
                  To add a book to the listing, click on the 'Jump to Add Book'
                  button below and fill out the form.
                </p>
              </Col>
            </Row>
            <Row className="">
              <Col
                xs={12}
                className="d-flex align-items-center justify-content-center"
              >
                <Button href="#add-book" className="btn-custom-bkg">
                  Jump to Add Book
                </Button>
              </Col>
            </Row>
          </Card>

          {books &&
            books.map((bookData) => (
              <Card
                key={`${bookData.book._id}-${bookData.listing._id}`}
                className={classNameSelector(bookData.listing.availability)}
              >
                <Row>
                  <Col xs={4}>
                    <img
                      src={bookData.book.imgUrl}
                      alt={"No Image Provided for: " + bookData.book.title}
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
                    <p>
                      {bookData.book.page ? bookData.book.page + " pages" : ""}
                    </p>
                    <p>
                      {bookData.book.releaseYear
                        ? bookData.book.releaseYear
                        : ""}{" "}
                    </p>
                  </Col>
                </Row>
                <Row
                  className={classNameSelectorRow(
                    bookData.listing.availability
                  )}
                >
                  <Col
                    xs={12}
                    className="mt-1 mb-1 d-flex flex-column align-items-start justify-content-center"
                  >
                    <p className="fw-bold">
                      Status: {bookData.listing.availability}
                    </p>
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
