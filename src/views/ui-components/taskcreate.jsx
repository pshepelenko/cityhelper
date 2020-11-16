import React from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';


import img1 from '../../assets/images/default.png';
import img7 from '../../assets/images/background/img5.jpg';

const Cards = () => {
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* <Row> */}
                <Col sm="8">
                    <Card>
                        <CardImg top width="100%" src={img1} alt="Card image cap" />
                        <CardBody>
                            <Form action="#/">
                                <CardTitle>Название задания <Input type="text" name="taskname"/></CardTitle>
                                <FormGroup row>
                                    <Label for="selectcategory" sm={2}><b>Категория:</b></Label>
                                    <Col md={4}>
                                          <Input type="select" name="selectcategory" id="exampleSelect">
                                            <option>Экология</option>
                                            <option>Опросы</option>
                                            <option>Сбор информации</option>                                        
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <CardText>
                                    <b>Описание:</b> 
                                    <Input type="textarea" name="taskdescription" id="taskdescription" />
                                </CardText>
                                <FormGroup row>
                                    <Label for="rewardinput" sm={3}><b>Награда в баллах:</b></Label>
                                    <Col md={2}>
                                            <Input type="text" name="rewardinput" id="rewardinput" value="15"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleDate" sm={3}><b>Дата старта</b></Label>
                                    <Col md={4}>
                                        <Input
                                        type="date"
                                        name="date"
                                        id="exampleDate"
                                        placeholder="date placeholder"
                                    />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleDate" sm={3}><b>Дата окончания</b></Label>
                                    <Col md={4}>
                                        <Input
                                        type="date"
                                        name="date"
                                        id="exampleDate"
                                        placeholder="date placeholder"
                                    />
                                    </Col>
                                </FormGroup>
                                <Col className=".col-6 .col-sm-3">
                                    <Input type="submit"/>
                                </Col>
                            </Form>
                        
                        </CardBody>
                    </Card>
                </Col>
               
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
}

export default Cards;


