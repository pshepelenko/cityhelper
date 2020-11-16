import React from 'react';


import { Chart } from 'react-charts'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col
} from 'reactstrap';
import { SalesSummary, Projects, Feeds } from 'components/dashboard-components';
import img1 from 'assets/images/big/img1.jpg';
import img2 from 'assets/images/big/img2.jpg';
import img3 from 'assets/images/big/img3.jpg';
let sourceCode
const Starter = () => {
    const data = React.useMemo(
        () => [
          {
            series: 3   ,
            label: 'Series 1',
            //dataType: 'ordinal',
            data: [['first',1,3],['f-s',2],['third',2]]
          },
          {
            series: 2,
            label: 'Series 2',
            dataType: 'ordinal',
            data: [['first',2],['f-s',2],['third',3]]
          },
          
         
        ],
    )
    
    const series = React.useMemo(
        () => ({
          type: 'bar'
        }),
        []
      )
      const axes = React.useMemo(
        () => [
          { primary: true, type: 'ordinal', position: 'left' },
          { position: 'bottom', type: 'linear', stacked: true }
        ],
        []
      )
    return (
        <div>
            {/*<Row>
                <Col sm={6} lg={8}>
                    <SalesSummary />
                </Col>
                <Col sm={6} lg={4}>
                    <Feeds />
                </Col>
            </Row>
            */
            }
            
     
    {/*<div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
        <Chart data={data} series={series} axes={axes} tooltip />
    </div>*/} 
     
      
      <br />
      
        <a href="#/taskcreate"><Button>Создать задание</Button></a> 
            <Row></Row>
            <Row>
                <Col sm={12}>
                    <Projects />
                </Col>
            </Row>
            
        </div>
    );
}

export default Starter;
