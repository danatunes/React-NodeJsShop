import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className={'d-flex'}>
            {device.brands.map(brand =>
                <Card
                    key={brand.id}
                    className={'p-3 m-lg-2'}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device._selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;