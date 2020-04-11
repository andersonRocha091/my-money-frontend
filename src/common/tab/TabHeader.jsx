import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectTab } from './TabActions';

class TabHeader extends Component {

    render() {
        return (
            <li>
                <a href='javascript:;'
                    data-toggle='tab'
                    onClick={()=>{this.props.selectTab(this.props.target)}}
                    data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}>{this.props.label}</i>
                </a>
            </li>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab });
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(TabHeader);