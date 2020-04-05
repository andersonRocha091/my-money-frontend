import React, { Component } from 'react';
import Axios from 'axios';

import ContentHeader from '../common/template/ContentHeader';
import Content from '../common/template/Content';
import ValueBox from '../common/widget/ValueBox';
import Row from '../common/layout/Row';
const BASE_URL = 'http://localhost:3003/api';

export default class DashboardNoRedux extends Component {

    constructor(props) {
        super(props);
        this.state = { credit: 0, debt: 0 }
    }
    componentWillMount() {
        Axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(resp=>this.setState(resp.data));
    }

    render() {
        const { credit, debt } = this.state;

        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 6 3' color='green' icon='ion-social-usd'
                            value={credit} text="Total de Créditos" />
                        <ValueBox cols='12 6 3' color='red' icon='ion-ios-pricetag'
                            value={debt} text="Total de Débitos" />
                        <ValueBox cols='12 6 3' color='blue' icon='ion-ios-pie'
                            value={credit - debt} text="Valor Consolidado" />
                    </Row>
                </Content>
            </div>
        )
    }
}
