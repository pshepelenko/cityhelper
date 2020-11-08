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
                        <CardImg top width="100%" src={img1} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Убрать мусор на улице Московской</CardTitle>
                            <CardText><b>Категория:</b> Экология</CardText>
                            <CardText><b>Описание:</b> Соберите мусор на улице Московской. Процесс можно заснять на видео либо сфотографировать пакеты с мусором.</CardText>
                            <CardText><b>Награда:</b> 10 баллов</CardText>
                            <CardText><b>Дата старта:</b> 1 мая 2020</CardText>
                            <CardText><b>Дата окончания:</b> 1 июня 2021</CardText>
                            <Button>Остановить</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body>
                        <CardTitle>Отчет №100820-3</CardTitle>
                        <CardText>Добрый день! Мы прибрались 9 августа. Фотографии в приложении</CardText>
                        <Button>Проверить</Button>
                    </Card>
                    <Card body>
                        <CardTitle>Отчет №100820-2</CardTitle>
                        <CardText>Здравствуйте! Приборка проведа 8 августа с утра. Фотографии с мешками с мусором прилагаем.</CardText>
                        <Button>Проверить</Button>
                    </Card>
                    <Card body>
                        <CardTitle>Отчет №100820-1</CardTitle>
                        <CardText>Делаем город чище :-)</CardText>
                        <Button>Проверить</Button>
                    </Card>
                </Col>
            {/* --------------------------------------------------------------------------------*/}
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
}

export default Cards;


