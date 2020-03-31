import React from 'react';

export default props => (
    <ul className="sidebar-menu tree" data-widget="tree">
        <li className='treeview'>
            <a href='#'>
                <i className={`fa fa-${props.icon}`}></i>
                <span>{props.label}</span>
                <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <ul className='treeview-menu'>
                {/* <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li> */}
                {props.children}
            </ul>
        </li>
    </ul>

);