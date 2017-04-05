import React from 'react';

require('./tableRow.scss');



export default function({position,img, name, points, pointsTotal}) {

  const link = "http://www.github.com/"+name;

  return (
      <tr className='tbodies'>
        <td>{position}</td>
        <td>
          <a href={link}> 
            <img src={img} />
            <span>{name}</span>
          </a> 
        </td>
        <td>{points}</td>
        <td>{pointsTotal}</td>
      </tr>
  )
}