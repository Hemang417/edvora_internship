import React from 'react';
import '../css/sidebar.css';

const Sidebar = () => {
  return (
  <div className='sidebar-container'>
      <h4>Filter</h4>
      <hr />
      <div className='product-div'>Products<div className='dropdown-arrow'></div></div>
      <div className='product-div'>State<div className='dropdown-arrow'></div></div>
      <div className='product-div'>City<div className='dropdown-arrow'></div></div>
  </div>
  );
};

export default Sidebar;
