import React, { Component } from 'react';

import ContentHeader from '../common/template/ContentHeader';
import Content from '../common/template/Content';
import ValueBox from '../common/widget/ValueBox';
import Row from '../common/layout/Row';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 6 3' color='green' icon='ion-social-usd-outline'
                            value="10,00" text="Total de Créditos" />
                        <ValueBox cols='12 6 3' color='red' icon='ion-ios-pricetag-outline'
                            value="10,00" text="Total de Débitos" />
                        <ValueBox cols='12 6 3' color='blue' icon='ion-ios-pie-outline'
                            value="10,00" text="Valor Consolidado" />
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard;