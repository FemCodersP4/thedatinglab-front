import TermsService from "@/app/components/TermsText.jsx";

export default function TermsPage() {
  return (
    <main className="gap-12 px-[4rem] py-[3rem] flex flex-col text-center bg-pink-grey-bg lg:px-[6rem] lg:py-[6rem] ol:px-[12rem] ol:py-[10rem] xxl:px-[14rem]">
      <section className="mb-12">
        <h1 className="text-2xl font-bold text-red-600 lg:mb-8 lg:text-[2rem]">Términos del Servicio</h1>
        <br /><br />
        <p className="text-left font-nunito text-base ol:text-[1.1rem]">Hola y bienvenid@ a DatingLab! Antes de sumergirte en nuestra comunidad, te
          pedimos que leas con atención los siguientes términos y condiciones que rigen tu
          experiencia con nosotros, tanto online como offline. Al unirte a nuestra plataforma,
          aceptas cumplir con estos términos y condiciones en su totalidad.
        </p>
        <br /><br />

        <TermsService
          title="Elegibilidad y Registro"
          text={
            <>
              1.1 Para unirte a DatingLab, debes tener al menos 18 años y contar con la capacidad
              legal para celebrar contratos vinculantes. Al registrarte, confirmas que cumples con
              estos requisitos.
              <br /><br />
              1.2 Por favor, proporciona información precisa y completa durante el proceso de
              registro. Es importante que mantengas tus datos actualizados en todo momento. Si
              notamos información falsa o inexacta, nos reservamos el derecho de suspender o
              cancelar tu cuenta.
              <br /><br />
            </>
          }
        />
        <br /><br />
        <TermsService
          title="Uso de la Plataforma Online"
          text={
            <>
              2.1 Como miembro de nuestra plataforma online, te pedimos que respetes las
              normas de comportamiento y conducta establecidas. No toleramos
              comportamientos inapropiados, incluyendo acoso, discriminación, lenguaje abusivo
              o contenido ofensivo.
              <br /><br />
              2.2 Es tu responsabilidad mantener la seguridad de tu cuenta y contraseña. Por
              favor, no compartas tus credenciales de inicio de sesión con terceros y notifícanos
              de inmediato si sospechas que tu cuenta ha sido comprometida.
              <br /><br />
            </>
          }
        />
        <br /><br />
        <TermsService
          title="Eventos Presenciales"
          text="3.1 Nos encanta organizar eventos presenciales donde los miembros pueden 
          conocerse en persona. Al asistir a estos eventos, te pedimos que sigas las normas y pautas de comportamiento establecidas por DatingLab. No toleramos 
          comportamientos inapropiados, incluyendo acoso, discriminación, lenguaje abusivo 
          o contenido ofensivo."
        />
        <br /><br />

        <TermsService
          title="Modificaciones y Terminación"
          text={
            <>
              4.1 Nos reservamos el derecho de modificar o actualizar estos Términos y
              Condiciones. Te recomendamos que revises periódicamente esta página para
              mantenerte informado sobre cualquier cambio.
              <br /><br />
              4.2 En DatingLab, nos reservamos el derecho de suspender o cancelar tu cuenta si
              se produce un incumplimiento de estos términos y condiciones o por cualquier otra
              razón que consideremos apropiada.
              <br /><br />
              ¡Gracias por unirte a DatingLab! Si tienes alguna pregunta o inquietud sobre estos
              términos, no dudes en ponerte en contacto con nuestro equipo de soporte.
              contáctanos en datinglab.experiences@gmail.com  de lunes a jueves de 9 a 17h. o
              vía WhatsApp de lunes a jueves  de 10h a 16h. al +34 669 945 836. Estamos aquí
              para ayudarte.
            </>
          }
        />
      </section>
      <section className="mb-12">
        <h1 className="text-2xl font-bold text-red-600 lg:mb-8 lg:text-[2rem]">Política de Privacidad</h1>
        <br /><br />
        <p className="text-left font-nunito text-base ol:text-[1.1rem]">Esta política de privacidad explica cómo utilizamos la información personal que recopilamos sobre ti
        cuando usas nuestro sitio web y participas en nuestros evento.
        </p>
        <br /><br />
        <TermsService
          title="¿Qué información recopilamos sobre ti?"
          text="Recopilamos información sobre ti cuando te registras en nuestra plataforma,  cuando realizas el test
          de compatibilidad y al asistir a nuestros eventos.. También recopilamos información cuando
          proporcionas comentarios voluntariamente y/o nos contactas."
        />
        <br /><br />
        <TermsService
          title="¿Cómo usamos esta información?"
          text="Recopilamos información sobre ti para gestionar tu cuenta y, si aceptas, enviarte correos electrónicos
          sobre nuestros otros productos y servicios. También usamos esta información para   realizar los
          matches con las personas más afines a ti.
          No compartimos información personal a los participantes del evento. Durante la experiencia, queda a 
          tu criterio descubrir a los demás y compartir lo que desees."
        />
        <br /><br />
        <TermsService
          title="Acceso a tu información y corrección"
          text="
          Tienes derecho a solicitar una copia de la información que tenemos sobre ti. Si deseas solicitar una
          copia de parte o toda tu información personal, o realizar alguna corrección en las respuestas de tu
          test de compatibilidad puedes envíanos un correo electrónico  a datinglab.experiences@gmail.com."
        />
        <br /><br />
        <TermsService
          title="Cambios en nuestra política de privacidad"
          text="
          Revisamos nuestra política de privacidad regularmente y publicaremos cualquier actualización en
          esta página web."
        />
        <br /><br />
        <TermsService
          title="¿Cómo contactarnos?"
          text="
          Si tienes alguna pregunta sobre nuestra política de privacidad o la información que tenemos sobre ti,
          contáctanos en datinglab.experiences@gmail.com  de lunes a jueves de 9 a 17h. o vía WhatsApp de
          lunes a jueves  de 10h a 16h. al +34 669 945 836."
        />
      </section>
    </main>
  );
}