import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import CommentForm from './CommentForm';
import LoadComments from './LoadComments';

const DishDetail = props => {
    return (
        <div>
            <Card style={{marginTop: "10px"}}>
                <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>
                <CardBody style={{ textAlign: 'left'}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>{props.dish.price}/-</p>
                    </CardText>
                    <hr/>
                    <LoadComments comments={props.comments}></LoadComments>
                    <hr/>
                    <CommentForm dishId={props.dish.id} addComment={props.addComment}></CommentForm>
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetail;