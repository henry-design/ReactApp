import React from 'react';
import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import './MainDash.css'
function MainDash() {
  return (
    <div class="MainDash">      
      <h1>Dashboard</h1>
      <Cards/>
      <Table/>
    </div>
  );
}

export default MainDash;
