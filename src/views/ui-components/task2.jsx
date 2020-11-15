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
    Col
} from 'reactstrap';


import img1 from '../../assets/images/big/survey.png';
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
                            <CardTitle>Опрос по поводу изменения транспортной развязки на ул. Кирова</CardTitle>
                            <CardText><b>Категория:</b> Опросы</CardText>
                            <CardText><b>Описание:</b> Пожалуйста пройдите опрос по ссылке: <a href="https://docs.google.com/forms/u/0/"> Ссылка на опрос</a></CardText>
                            <CardText><b>Награда:</b> 10 баллов</CardText>
                            <CardText><b>Дата старта:</b> 1 мая 2020</CardText>
                            <CardText><b>Дата окончания:</b> 1 июня 2021</CardText>
                            
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


