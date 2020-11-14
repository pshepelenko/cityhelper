import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
    Col
} from 'reactstrap';


import img1 from '../../assets/images/big/img1.jpg';
import img7 from '../../assets/images/background/img5.jpg';

const Cards = () => {
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col sm="8">
                    <Card>
                        <CardHeader tag="h5">Отчет по выполнению задания</CardHeader>
                        <CardBody>
                            <CardText><b>Задание</b> <a href="#/task1">Собрать мусор на улице Московской</a></CardText>
                            <CardText><b>ID отчета</b> 15351</CardText>
                            <CardText><b>Текст отчета:</b> Собрали мусор на улице Московской. Фотографии во вложении.</CardText>
                            <CardText><b>Награда:</b> 10 баллов</CardText>
                            <CardText><b>Дата отправления</b> 10 мая 2020</CardText>
                            <div className="button-group">
                                <Button className="btn" color="success">
                                    Подтвердить
                                </Button>
                                <Button className="btn" color="link">
                                   
                                </Button>
                                <Button className="btn" color="danger">
                                    Отклонить
                                </Button>
                                
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                     
            {/* --------------------------------------------------------------------------------*/}
            </Row>
            <Row>
                <Col>
                    <Carousel>
                        <div>
                             <img src="https://s.yimg.com/uu/api/res/1.2/OGi8M9tOaGlZinxhBl0shg--~B/aD01MzY7dz03Njg7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en_us/News/afp.com/c23e8f9a8243118fa1b51e278ef6ffe637930306.jpg" />
                            
                        </div>
                        <div>
                              <img src="https://english.alaraby.co.uk/english/file/getimagecustom/595dc48a-c516-4d44-b2d2-a69011e4a5f3/850/479" />
                             
                        </div>
                        </Carousel>                
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
}

export default Cards;


