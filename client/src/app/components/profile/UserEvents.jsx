"use client"


export default function UserEvents({ userData }) {
    return (
      <div>
        <h2>Eventos Registrados</h2>
        {userData.events.map((event) => (
          <div key={event.id}>
           
            <p>{event.title}</p>
            <p>{event.date}</p>
            
          </div>
        ))}
      </div>
    );
  }