import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { getSummary } from './DashboardActions';
import ContentHeader from '../common/template/ContentHeader';
import Content from '../common/template/Content';
import ValueBox from '../common/widget/ValueBox';
import Row from '../common/layout/Row';

class Dashboard extends Component {

    componentWillMount(){
        this.props.getSummary();
    }

    render() {
        const { credit, debt } = this.props.summary;

        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 6 3' color='green' icon='ion-social-usd-outline'
                            value={credit} text="Total de Créditos" />
                        <ValueBox cols='12 6 3' color='red' icon='ion-ios-pricetag-outline'
                            value={debt} text="Total de Débitos" />
                        <ValueBox cols='12 6 3' color='blue' icon='ion-ios-pie-outline'
                            value={credit - debt} text="Valor Consolidado" />
                    </Row>
                </Content>
            </div>
        )
    }
}

//informa como extrair do estado a informação a ser adicionada
//nas propriedades deste componente
const mapStateToProps = state => ({ summary: state.dashboard.summary });
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);