import React from 'react';
import MenuItem from './MenuItem';
import MenuTree from './MenuTree';

export default props =>(
    <ul className='sidebar-menu'>
        <MenuItem path='/#/' label="Dashboard" icon='dashboard'/>
        <MenuTree label='Cadastro' icon='edit'>
        </MenuTree>
    </ul>
);