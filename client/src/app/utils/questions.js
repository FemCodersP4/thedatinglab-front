const questions = [
  { number: "birthdate", text: "Introduce tu fecha de nacimiento", options: [] },
  {
    number: "gender",
    text: "¿Con qué género te identificas?",
    options: [
      { value: "mujer", label: "Mujer" },
      { value: "hombre", label: "Hombre" },
      { value: "no binario", label: "No binario" },
    ],
  },
  {
    number: "looksFor",
    text: "Estoy interesada/o en conocer a...",
    options: [
      { value: "mujer", label: "Mujer" },
      { value: "hombre", label: "Hombre" },
      { value: "no binario", label: "No binario" },
      { value: "todo", label: "Todo" },
    ],
  },
  {
    number: "ageRange",
    text: "Rango de edad deseado:",
    options: [
      { value: "20-30", label: "De 20 a 30 años" },
      { value: "25-35", label: "De 25 a 35 años" },
      { value: "35-45", label: "De 35 a 45 años" },
      { value: "no importa", label: "La edad no es un criterio para mí" },
    ],
  },
  {
    number: "sexoAffective",
    text: "¿Qué tipo de relación sexo afectiva te gustaría tener?",
    options: [
      { value: "monogama", label: "Una relación monógama" },
      { value: "explorar", label: "Una relación monógama en la que explorar" },
      { value: "abierta", label: "Una relación abierta, poliamorosa, etc..." },
      { value: "beneficios", label: "Amig@s con beneficios" },
      { value: "fluir", label: "Lo que fluya, estoy abiert@ a cualquier formato" },
      { value: "casual", label: "Algo totalmente casual" },
    ],
  },
  {
    number: "heartState",
    text: "¿En qué estado se encuentra tu corazón?",
    options: [
      {
        value: "maduro",
        label: "Maduro y sereno y dispuesto a compartirlo. Con alegrías y traumas procesados e integrados",
      },
      { value: "solo", label: "Feliz y palpitante con ganas de conocer a personas" },
      { value: "feliz", label: "Un poco solito" },
      { value: "recuperarse", label: "Acabo de salir de una relación y busco recuperarme y distraerme" },
      { value: "despechado", label: "Más despechado que Shakira y Piqué" },
    ],
  },
  {
    number: "hasChildren",
    text: "¿Tienes hijos?",
    options: [
      { value: "si", label: "Sí" },
      { value: "no", label: "No" },
    ],
  },
  {
    number: "datesParents",
    text: "¿Saldrías con alguien que tiene hijos?",
    options: [
      { value: "si", label: "Sí" },
      { value: "no", label: "No" },
      { value: "no sabe", label: "No me lo he planteado" },
    ],
  },
  {
    number: "values1",
    text: "Indica un valor importante para ti:",
    options: [
      { value: "amabilidad", label: "Amabilidad" },
      { value: "amistad", label: "Amistad" },
      { value: "autenticidad", label: "Autenticidad" },
      { value: "aventura", label: "Aventura" },
      { value: "comunicacion", label: "Comunicación" },
      { value: "conciencia", label: "Conciencia" },
      { value: "creatividad", label: "Creatividad" },
      { value: "cuidado", label: "Cuidado" },
      { value: "desarrollo", label: "Desarrollo profesional" },
    ],
  },
  {
    number: "values2",
    text: "Indica un valor importante para ti:",
    options: [
      { value: "diversion", label: "Diversión" },
      { value: "empatia", label: "Empatía" },
      { value: "familia", label: "Familia" },
      { value: "fidelidad", label: "Fidelidad" },
      { value: "generosidad", label: "Generosidad" },
      { value: "integridad", label: "Integridad" },
      { value: "inteligencia", label: "Inteligencia" },
    ],
  },
  {
    number: "values3",
    text: "Indica un valor importante para ti:",
    options: [
      { value: "lealtad", label: "Lealtad" },
      { value: "libertad", label: "Libertad" },
      { value: "optimismo", label: "Optimismo" },
      { value: "resiliencia", label: "Resiliencia" },
      { value: "responsabilidad", label: "Responsabilidad" },
      { value: "afectiva", label: "Responsabilidad afectiva" },
      { value: "sencillez", label: "Sencillez" },
      { value: "solidaridad", label: "Solidaridad" },
      { value: "humor", label: "Sentido del humor" },
      { value: "valentia", label: "Valentía" },
    ],
  },
  {
    number: "prefers1",
    text: "Eres más de...",
    options: [
      { value: "netflix", label: "Netflix y mi sofá" },
      { value: "eventos", label: "Eventos, restaurantes, copeo" },
      { value: "gym", label: "Gymnasio, deporte y aire libre" },
      { value: "escapada", label: "Escapadas, playa, montaña" },
      { value: "todas", label: "Todas las anteriores" },
    ],
  },
  {
    number: "prefers2",
    text: "Eres más de...",
    options: [
      { value: "vino", label: "Catas de vino, cerveza, vermut... o lo que se tercie" },
      { value: "cafe", label: "Café, chai latte, mate, infusiones varias..." },
      { value: "agua", label: "Agua, zumos naturales, batidos detox" },
      { value: "segun", label: "Según el momento o casi todas las anteriores" },
      { value: "ninguna", label: "Ninguna, no ingiero líquidos" },
    ],
  },
  {
    number: "catsDogs",
    text: "Eres más de...",
    options: [
      { value: "gato", label: "Gato" },
      { value: "perro", label: "Perro" },
      { value: "todos", label: "Todos los animales" },
      { value: "de amigos", label: "Me gustan l@s de mis amig@s" },
    ],
  },
  {
    number: "rrss",
    text: "¿Podrías indicar tu perfil de Instagram?",
    options: [],
  },
];

export default questions;
