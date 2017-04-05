import React from 'react';

import TableRow from './tableRow/TableRow';


// styling
require('./table.scss')

export default function Table({error, list, showingTotal, showTotal, showRecent}) {

  return (



    <table className='table-responsive'>
      <thead>
        <tr className='theads'>
          <th>#</th>
          <th>Camper Name</th>
          <th className="toggler" onClick={showRecent}>Points (last 30 days) {showingTotal ? '' : '▼'}</th>
          <th className="toggler" onClick={showTotal}>Points (total) {showingTotal ? '▼' : ''}</th>
        </tr>
      </thead>

      <tbody>

        {list.map((entry, pos) => <TableRow 
          key={pos}
          position={pos+1}
          img={entry.img}
          name={entry.username}
          points={entry.recent}
          pointsTotal={entry.alltime}
          />)}

      </tbody>


    </table>

  )
}