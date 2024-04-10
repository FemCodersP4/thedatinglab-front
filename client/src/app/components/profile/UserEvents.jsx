

import React from 'react';

const UserEvents = ({ events }) => {
  return (
    <div>
      <h2>Mis Eventos</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserEvents;

















// "use client"


// export default function UserEvents({ userData }) {
//     return (
//       <div>
//         <h2>Eventos Registrados</h2>
//         {userData.events.map((event) => (
//           <div key={event.id}>
           
//             <p>{event.title}</p>
//             <p>{event.date}</p>
            
//           </div>
//         ))}
//       </div>
//     );
//   }