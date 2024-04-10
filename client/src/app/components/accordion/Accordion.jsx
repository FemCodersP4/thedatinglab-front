"use client";
import React, { useState } from "react";

export default function Accordion() {
  const [activeSections, setActiveSections] = useState({});

  const handleQuestionClick = (sectionIndex, questionIndex) => {
    setActiveSections((prevActiveSections) => ({
      ...prevActiveSections,
      [sectionIndex]:
        prevActiveSections[sectionIndex] === questionIndex
          ? null
          : questionIndex,
    }));
  };

  const sections = [
    {
      title: "Servicios",
      content: [
        {
          question: "¿Qué es Dating Lab?",
          answer:
            'The Dating Lab es una plataforma diferente que prioriza la conexión entre las personas. Ofreciendo una experiencia única para que los usuarios conozcan a otras personas de una manera diferente y divertida en la vida real. Nuestro objetivo es generar espacios y ambientes seguros que propicien la generación de conexiones entre personas reales.  A través de nuestra plataforma, los usuarios pueden reservar un espacio en nuestras experiencias, conocer 3 personas compatibles - o como diríamos en lenguaje dating posibles matches ;) - y disfrutar de una experiencia diferente.',
        },
        {
          question: "¿Cómo funciona Dating Lab?",
          answer:
            'Funciona mediante un formulario de compatibilidad que los usuarios deben completar, previo registro en nuestra plataforma. Después deberás seleccionar la o las actividades  en las que quieras participar, inscribirte,  esperar el envío de link de compra, y, posteriormente realizar el pago.   Queremos que tu experiencia en DatingLab sea la mejor, por eso intentamos que en nuestros eventos haya el mayor número de personas compatibles posibles. Además nuestra plataforma te mostrará perfiles de personas reales con un 70% o más de compatibilidad, con las que podrás coincidir y disfrutar en los eventos en los que te inscribas.',
            
        },
        {
          question: '¿Cómo puedo resgistrarme en Dating Lab?',
          answer: (
            <div>
              <p>
                Crear una cuenta en Dating Lab es totalmente gratuito. Sin embargo, para poder asistir a las experiencias, necesitas comprar una entrada.
              </p>
              <ol className="list-decimal pl-8">
                <li>Crea una cuenta en DatingLab</li>
                <li>Completa tu perfil, a través del test de compatibilidad</li>
                <li>Inscríbete en nuestras experiencias</li>
                <li>Recibe nuestro link de compra* y realiza el pago.</li>
              </ol>
              <br />
              <p>
                *Queremos que tu experiencia en DatingLab sea la mejor, por eso intentamos que en nuestros eventos haya el mayor número de personas compatibles posibles.
              </p>
            </div>
          ),
        },
        
      ],
    },
    {
      title: "Experiencias",
      content: [
        {
          question: '¿Qué son y cómo funcionan las experiencias de DatingLab?',
          answer: (
            <div>
              <p>Las experiencias DatingLab son una manera diferente de conectar con personas nuevas. Experiencias especialmente diseñadas para ayudar a conectar de una forma divertida, a través de los sentidos, en un entorno seguro. Es una oportunidad donde tendrás 3 divertidas citas en persona y donde además podrás conocer al resto de personas del grupo. Estas experiencias tendrán aproximadamente una hora y media de duración. Una vez terminado el evento podréis tomar algo en el mismo local - estos extras no están incluidos en el precio ;) -.</p>
              <br />
              <h3 className="text-red-300">¿Cuándo y cuánto dura? </h3>
              <p>Las experiencias  duran entre 1,30 aproximadamente. Donde habrá una primera dinámica grupal y luego tendrás tres citas de aproximadamente 20m. cada una de ellas. Al final de la experiencia recibirás un cuestionario de conexión experimentada para que 48 horas después de la realización del evento recibas el contacto de las personas con las que haya habido un nivel de conexión similar, para que podáis seguir explorando conjuntamente. </p>
              <br />
              <h3 className="text-red-300">¿Dónde? </h3>
              <p>La dirección se comunicará el día anterior por la tarde, dando tiempo suficiente para organizarse.</p>
              <br />
              <h3 className="text-red-300"><strong>Coste</strong></h3>
              <p>cada experiencia tiene su propio coste que puede oscilar entre 20 y 35 euros dependiente de la experiencia. No están incluidas las consumiciones posteriores a la finalización del evento. </p>
              <br />
              <h3 className="text-red-300"><strong>Cancelación</strong></h3>
              <p>Para obtener un reembolso, DEBES cancelar vía correo electrónico con 72 horas de antelación.  Una vez hecha la cancelación en el plazo, se procedera a reembolsar. Por respeto a otros participantes, si no puedes asistir, por favor cancela tu participación. Cualquiera que no cancele más de tres veces no podrá volver reservar con DatingLab.</p>
            
            <br />
            <h3 className="text-red-300"><strong>Dato importante</strong></h3>
            <p>vamos a experimentar con los sentidos - olfato, gusto, oido, propiocepción…-  que ayudan a generar las conexiones así que para ello parte de las citas serán a ciegas, es decir tendrás una venda / antifaz que tapará tus ojos durante las interacciones con tus citas. No te preocupes las verás al inicio del evento y durante parte de la cita también</p>
            </div>
          ),
        },
        {
          question: "¿Cómo puedo asistir a una experiencia?",
          answer:
            'Para asistir a una experiencia, debes inscribirte en la experiencia que más te guste, esperar el link de comprar y  elabonar el costo correspondiente. Luego, recibirás información detallada sobre el evento.',
        },
        {
          question: "¿Dónde se realizan las experiencias?",
          answer:
            "La ubicación de las experiencias puede variar dentro de Barcelona, así que asegúrate de revisar la información proporcionada en la página principal o la invitación al evento.",
        },
      ],
    },
    {
      title: "Pagos y contacto",
      content: [
        {
          question: "¿Qué métodos de pago aceptan para las experiencias?",
          answer:
            'Una vez que te hayas inscrito a la experiencia, post análisis del perfil, recibirás un enlace para realizar el pago de la experiencia. Una vez abonado recibirás la información del evento. Para cancelaciones se  deberá comunicar con al menos 72 horas de antelación a través del correo electrónico  datinglab.experiences@gmail.com.',
        },
        {
          question:
            '¿Cómo puedo obtener más información sobre una experiencia después de realizar el pago?',
          answer:(
            <div>
              <p>Una vez que hayas realizado el pago, te proporcionaremos información detallada sobre la experiencia, incluyendo la ubicación, fecha y hora, y cualquier otra información relevante.</p>
              <br />
              <p>Te comunicaremos la hora y lugar exactos con 24 horas de antelación a tu correo electrónico.</p>
            </div>
          ),
        },
      ],
    },
    {
      title: "Requisitos de seguridad",
      content: [
        {
          question:
            "¿Por qué se solicita información sobre alergias para asistir a las experiencias?",
          answer:
            "Solicitamos información sobre alergias para garantizar la seguridad de todos los asistentes a nuestros eventos. Algunas experiencias pueden incluir alimentos y bebidas, por lo que es importante conocer las alergias de los participantes.",
        },
        {
          question: "¿Cómo se manejarán mis datos personales en Dating Lab?",
          answer:
            'La privacidad y seguridad de tus datos son una prioridad para nosotros. No compartimos información personal a los participantes. Durante la experiencia, queda a tu criterio descubrir a los demás y compartir lo que desees. Puedes consultar nuestra política de privacidad para obtener más información sobre cómo manejamos tus datos.Es posible cambiar las respuestas de tu test de compatibilidad solicitando un cambio al mail datinglab.experiences@gmail.com.',
            
        },
        {
          question: '¿Política de privacidad?',
          answer:(
            <div>
              <p>Esta política de privacidad explica cómo utilizamos la información personal que recopilamos sobre ti cuando usas nuestro sitio web y participas en nuestros eventos</p>
              <br />
              <h3 className="text-red-300"><strong>¿Qué información recopilamos sobre ti?</strong></h3>
              <p>Recopilamos información sobre ti cuando te registras en nuestra plataforma,  cuando realizas el test de compatibilidad y al asistir a nuestros eventos.. También recopilamos información cuando proporcionas comentarios voluntariamente y/o nos contactas.</p>
              <br />
              <h3 className="text-red-300"><strong>¿Cómo usamos esta información?</strong></h3>
              <p>Recopilamos información sobre ti para gestionar tu cuenta y, si aceptas, enviarte correos electrónicos sobre nuestros otros productos y servicios. También usamos esta información para  realizar los matches con las personas más afines a ti.
                  No compartimos información personal a los participantes del evento. Durante la experiencia, queda a tu criterio descubrir a los demás y compartir lo que desees.
              </p>
              <br />
              <h3 className="text-red-300">Acceso a tu información y corrección</h3>
              <p>Tienes derecho a solicitar una copia de la información que tenemos sobre ti. Si deseas solicitar una copia de parte o toda tu información personal, o realizar alguna corrección en las respuestas de tu test de compatibilidad puedes envíanos un correo electrónico  a <strong>datinglab.experiences@gmail.com</strong></p>
              <br />
              <h3 className="text-red-300">Cambios en nuestra política de privacidad</h3>
              <p>Revisamos nuestra política de privacidad regularmente y publicaremos cualquier actualización en esta página web</p>
            </div>
          ),
        },
        {
          question:
            '¿Cómo contactarnos?',
          answer:(
            <div>
              <p>Si tienes alguna pregunta sobre nuestra política de privacidad o la información que tenemos sobre ti, contáctanos en <strong>datinglab.experiences@gmail.com</strong>  de lunes a jueves de 9 a 17h. o vía WhatsApp de lunes a jueves  de 10h a 16h. al +34 669 945 836.</p>              
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4  mb-24 lg:px-16 ol:px-28 ol:mt-[10rem]">
      <h1 className="text-3xl font-bold text-center mb-4  text-red-400 mt-20 ol:text-[3rem]">
        Preguntas Frecuentes{" "}
      </h1>
      <h2 className="text-xl text-center text-red-300 mb-28 ol:text-[1.5rem]">
        Aqui algunas preguntas frecuentes que nos hacen a menudo nuestros
        usuarios
      </h2>
      {sections.map((section, sectionIndex) => (
        <div
          key={section.title}
          className="section border-t-0 border-gray-200 pb-8 "
        >
          <h3 className="flex justify-center text-2xl cursor-pointer mb-4 ease-in-out text-red-900 my-8 font-bold ol:mb-10 ol:text-[2rem]">
            {section.title}
          </h3>
          <ul>
            {section.content.map((item, questionIndex) => (
              <li
                key={item.question}
                className="cursor-pointer hover:bg-gray-100 transition-all duration-300 rounded  border-2 border-red-200 bg-red-50 my-2 lg:py-[0.5rem]"
                onClick={() => handleQuestionClick(sectionIndex, questionIndex)}
              >
                <h4 className="p-4 text-xl text-red-400 font-bold ol:!text-[1.4rem] ol:px-8">
                  {item.question}
                </h4>
                {activeSections[sectionIndex] === questionIndex && (
                  <p className="text-lg p-8">{item.answer}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
