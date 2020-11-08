import React from "react";

import img1 from '../../assets/images/users/1.jpg';
import img2 from '../../assets/images/users/2.jpg';
import img3 from '../../assets/images/users/3.jpg';
import img4 from '../../assets/images/users/4.jpg';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const Projects = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/

        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Ваши задания</CardTitle>
                        <CardSubtitle>Общая информация</CardSubtitle>
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
                            <th className="border-0">Название</th>
                            <th className="border-0">Категория</th>

                            <th className="border-0">Статус</th>
                            <th className="border-0">Необработано</th>
                            <th className="border-0">Всего</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                        <div className="">
                                        <a href="#/task1"> <h5 className="mb-0 font-16 font-medium"></h5><span>Убрать мусор на улице Московской</span></a></div>  
                                </div>
                            </td>
                            <td>Экология</td>

                            <td>
                                <i className="fa fa-circle text-orange" id="tlp1"></i>

                            </td>
                            <td>5</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">15</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                     
                                    
                                    <div className="">
                                    <a href="#/task2"><h5 className="mb-0 font-16 font-medium"></h5><span>Опрос по поводу изменения транспортной развязки на ул. Кирова</span></a></div>
                                </div>
                            </td>
                            <td>Опросы</td>

                            <td>
                                <i className="fa fa-circle text-success" id="tlp2"></i>

                            </td>
                            <td>0</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">120</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                        <div className="">
                                        <a href="#/task3"><h5 className="mb-0 font-16 font-medium"></h5><span>Сфотографировать состояние дорожного полотна на ул. Мяснцикой</span></a></div>
                                </div>
                            </td>
                            <td>Дороги</td>

                            <td>
                                <i className="fa fa-circle text-success" id="tlp3"></i>

                            </td>
                            <td>3</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">10</td>
                        </tr>                      
                    </tbody>
                </Table>
            </CardBody>
        </Card >
    );
}

export default Projects;
