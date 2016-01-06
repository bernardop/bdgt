import React from 'react';

import './SidebarPeriod.scss';

const SidebarPeriod = ({ period }) => (
    <li>{period.name}</li>
);

export default SidebarPeriod;