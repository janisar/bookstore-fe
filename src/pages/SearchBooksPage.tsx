import React, { useState } from 'react';
import '../App.css';
import axios, { AxiosError, AxiosResponse } from "axios";
import { Alert, Button, Col, Container, Form, Nav, Row, Spinner } from "react-bootstrap";
import { Book } from "../models/Book";
import { BooksCard } from "../components/BooksCard";

function SearchBooksPage() {
    const [category, setCategory] = useState("");
    const [loadingBooks, setLoadingBooks] = useState(false);
    const [books, setBooks] = useState<Book[]>([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchBooks = async () => {
        setLoadingBooks(true);
        setErrorMessage("");
        try {
            const response: AxiosResponse<Book[]> = await axios.get<Book[]>('http://localhost:8021/api/v1/books?category=' + category);
            setBooks(response.data)
        } catch (e: any | AxiosError<{ message: string }>) {
            setErrorMessage(e.response?.data.message)
            setBooks([]);
        }
        setLoadingBooks(false);
    }
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <Form className="col-md-3 align-self-center align-items-center justify-content-center row m-auto">
                        {errorMessage && (
                            <Alert variant="danger">
                                {errorMessage}
                            </Alert>
                        )}
                        <Form.Text className="mt-1">Teretulemast meie väiksesse raamatupoodi</Form.Text>
                        <Form.Control className="mt-2" type="text" placeholder="Otsi raamatut.."
                                      onChange={(event => setCategory(event.target.value))}/>
                        <Button className="mt-2" onClick={searchBooks}>Otsi!</Button>
                    </Form>
                </Col>
            </Row>
            {loadingBooks && (
                <Row className="justify-content-md-center mt-5">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Laeb...</span>
                    </Spinner>
                </Row>
            )}
            <Row xs={1} md={2} lg={3} className="justify-content-md-center mt-5 align-items-center">
                {
                    books.map(book => {
                        return (
                            <Col className="justify-content-md-center align-items-center mt-5">
                                <BooksCard book={book}/>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
}

export default SearchBooksPage;
