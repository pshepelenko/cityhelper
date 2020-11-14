import React, { useState } from 'react';
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col,
    Input,
    Table,
    Badge
} from 'reactstrap';
import { SalesSummary, Projects, Feeds } from 'components/dashboard-components';

const Alerts = () => {
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col sm={6} lg={8}>
                    <SalesSummary />
                </Col>
            </Row>
            <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Отчеты по заданиям</CardTitle>
                        <CardSubtitle>Общий список</CardSubtitle>
                    </div>
                    <div className="ml-auto d-flex no-block align-items-center">
                        <div className="dl">
                            <Input type="select" className="custom-select">
                                <option value="0">За месяц</option>
                                <option value="1">За неделю</option>
                                <option value="2">За все время</option>
                                
                            </Input>
                        </div>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">ID отчета</th>
                            <th className="border-0">ID задания</th>
                            <th className="border-0">Статус</th>
                            <th className="border-0">User ID</th>
                            <th className="border-0">Создан</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                        <div className="">
                                        <h5 className="mb-0 font-16 font-medium"></h5><span>13562</span></div>  
                                </div>
                            </td>
                            <td><a href="#/task1">10234</a></td>

                            <td>
                                <Badge color="warning" >
                                    Ожидает
                                </Badge>

                            </td>
                            <td>5</td>
                            <td>10.05.2020</td>
                            <td className="blue-grey-text  text-darken-4 font-medium"><a href="#/report"><Button>Посмотреть</Button></a></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                     
                                    
                                    <div className="">
                                    <h5 className="mb-0 font-16 font-medium"></h5><span>103156</span></div>
                                    
                                </div>
                            </td>
                            <td><a href="#/task2">17622</a></td>

                            <td>
                                <Badge color="success" >
                                    Проверено
                                </Badge>

                            </td>
                            <td>0</td>
                            <td>09.05.2020</td>
                            <td className="blue-grey-text  text-darken-4 font-medium"><a href="#/report"><Button>Посмотреть</Button></a></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                        <div className="">
                                        <h5 className="mb-0 font-16 font-medium"></h5><span>15533</span></div>
                                </div>
                            </td>
                            <td><a href="#/task3">19232</a></td>

                            <td>
                                <Badge color="success" >
                                    Проверено
                                </Badge>

                            </td>
                            <td>3</td>
                            <td>11.05.2020</td>
                            <td className="blue-grey-text  text-darken-4 font-medium"><a href="#/report"><Button>Посмотреть</Button></a></td>
                        </tr>                      
                    </tbody>
                </Table>
            </CardBody>
        </Card >
        
            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
}

export default Alerts;
