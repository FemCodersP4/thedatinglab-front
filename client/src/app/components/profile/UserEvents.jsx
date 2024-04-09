import React from 'react';

const UserEvents = ({ events }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Eventos Registrados</h2>
      {events.length === 0 ? (
        <p>No estás registrado en ningún evento.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {events.map((event) => (
            <li key={event.id} className="py-4">
              <div className="flex space-x-3">
                <div className="flex-1 space-y-1">
                  <p className="text-lg font-medium text-gray-900">{event.title}</p>
                  <p className="text-gray-500">{event.date} - {event.time}</p>
                  <p className="text-gray-500">{event.location}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

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