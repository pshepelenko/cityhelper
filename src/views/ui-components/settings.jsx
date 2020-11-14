import React, { useState } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    Tooltip,
    Button
} from 'reactstrap';



const TooltipComponent = () => {

    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-image-filter-vintage mr-2"> </i>
                    Настройки
                </CardTitle>
                <CardBody className="">
                    <>
                        {[]}
                    </>
                </CardBody>
            </Card>
            {/* -------------------------------------------------------------------------------- */}
            {/* Row */}
            {/* -------------------------------------------------------------------------------- */}
        </div>
    );
}

export default TooltipComponent;
