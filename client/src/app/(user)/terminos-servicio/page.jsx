import TermsService from "@/app/components/TermsText.jsx";

export default function TermsPage() {
  return (
    <main className="gap-12 px-[4rem] py-[3rem] flex flex-col text-center bg-pink-grey-bg lg:px-[6rem] lg:py-[6rem] ol:px-[12rem] ol:py-[10rem] xxl:px-[14rem]">
      <h1 className="text-2xl font-bold text-red-600 lg:mb-8 lg:text-[2rem]">Términos del Servicio y Política de privacidad</h1>
      <p className="text-left font-nunito text-base ol:text-[1.1rem]">Esta política de privacidad explica cómo utilizamos la información personal que recopilamos sobre ti
        cuando usas nuestro sitio web y participas en nuestros evento</p>
        
      <TermsService
        title="¿Qué información recopilamos sobre ti?"
        text="Recopilamos información sobre ti cuando te registras en nuestra plataforma,  cuando realizas el test
        de compatibilidad y al asistir a nuestros eventos.. También recopilamos información cuando
        proporcionas comentarios voluntariamente y/o nos contactas."
      />
      <TermsService
        title="¿Cómo usamos esta información?"
        text="Recopilamos información sobre ti para gestionar tu cuenta y, si aceptas, enviarte correos electrónicos
        sobre nuestros otros productos y servicios. También usamos esta información para   realizar los
        matches con las personas más afines a ti.
        No compartimos información personal a los participantes del evento. Durante la experiencia, queda a 
        tu criterio descubrir a los demás y compartir lo que desees."
      />
      <TermsService
        title="Acceso a tu información y corrección."
        text="Tienes derecho a solicitar una copia de la información que tenemos sobre ti. Si deseas solicitar una
        copia de parte o toda tu información personal, o realizar alguna corrección en las respuestas de tu
        test de compatibilidad puedes envíanos un correo electrónico  a datinglab.experiences@gmail.com"
      />
      <TermsService
        title="Cambios en nuestra política de privacidad"
        text="Revisamos nuestra política de privacidad regularmente y publicaremos cualquier actualización en
        esta página web"
      />
      <TermsService
        title="¿Cómo contactarnos?"
        text="i tienes alguna pregunta sobre nuestra política de privacidad o la información que tenemos sobre ti,
        contáctanos en datinglab.experiences@gmail.com  de lunes a jueves de 9 a 17h. o vía WhatsApp de
        lunes a jueves  de 10h a 16h. al +34 669 945 836."
      />
    </main>
  );
}
