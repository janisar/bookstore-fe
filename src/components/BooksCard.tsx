import { Badge, Card, ListGroup } from "react-bootstrap";
import React, { FunctionComponent } from "react";
import { Book } from "../models/Book";

type PageProps = {
    book: Book;
}
export const BooksCard: FunctionComponent<PageProps> = ({book}) => {
    return (
        <Card style={{ width: '18rem' }} className="align-self-center m-auto mb-0 mt-0">
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle
                    className="mb-2 text-muted">{book?.authors[0]?.name}</Card.Subtitle>
                {book.topics.map(topic => (
                    <Badge bg="secondary">{topic}</Badge>
                ))}
                <Card.Img src={book.imageUrl} alt={book.title} className="mt-2"/>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Hind: {book.price}</ListGroup.Item>
                    <ListGroup.Item>Väljaandja: {book.publisher}</ListGroup.Item>
                    <ListGroup.Item>Aasta: {book.year}</ListGroup.Item>
                    <ListGroup.Item>Lehekülgi: {book.pages}</ListGroup.Item>
                    <ListGroup.Item>Pood: {book.bookStore}</ListGroup.Item>
                </ListGroup>
                <Card.Link href={book.link}>Vaata poes</Card.Link>

            </Card.Body>
        </Card>
    )
}