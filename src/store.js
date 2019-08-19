import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    practices: [
    
    {
    name: 'TRABAJA CON NOSOTROS',
    title: 'TRABAJA CON NOSOTROS',
    content: "En Entel nos mueve la pasión por todo lo que hacemos y lo transmitimos al poner lo\n" +
      "mejor de nosotros de manera dinámica, innovadora, disruptiva y digital. Por esta\n" +
      "razón, desde 2018 mejoramos nuestro proceso de reclutamiento y selección,\n" +
      "reduciéndolo de 21 a 18 días. De esta manera, atendemos a nuestros clientes y\n" +
      "ponemos énfasis en seleccionar a colaboradores que sientan el latir de Entel con skills\n" +
      "que encajen con nuestra Cultura, basándonos en nuestros 5 Pilares Culturales (mayor\n" +
      "detalle en la sección Inspiración):",
      links: {
        documents: 'https://issuu.com/entellovers/docs/1trabaja_con_nosotros_web.pptx',
        videos: '#',
        otherFiles: '#'
       
      },
    list: [
      {
        name: 'Liderazgo Entel',
        
      },
      {
        name: 'Hazlo Increible'
      },
      {
        name: 'Experimenta y Cambia'
      },
      {
        name: 'Se parte de la Solución'
      },
      {
        name: 'Siente como tu cliente'
      }
    ]
  },
      {
        name: 'ENTREVISTA POR VIDEO LLAMADA ENTELINA',
        title: 'ENTREVISTA POR VIDEO LLAMADA ENTELINA',
        content: `Los candidatos deben llegar a conocernos tanto como nosotros a ellos y qué mejor a través del medio que nosotros ofrecemos. Esa es la premisa de nuestra Cultura que se refleja en cada interacción con ellos durante todo el proceso conectando con sus intereses y motivaciones a través de señales que inspiran y les pedimos que nos envíen un video por WhatsApp, contándonos quiénes son y qué es lo que les motiva a trabajar con nosotros.Cada nuevo candidato debe pasar por las siguientes instancias:
`,
        links: {
          video:'https://vimeo.com/showcase/6225572',
          documents: '#',
          otherFiles: '#'
        },
        list: [
          {
            name: `Video de presentación`
          },
          {
            name: `Entrevista con el área solicitante`
          },
          {
            name: `Entrevista personal con el área de Atracción del Talento`
          },
          {
            name: `Dinámica de selección`
          },
          {
            name: `Evaluación psicotécnica`
          },
          {
            name: `Assessment`
          },
          {
            name: `Verificación académica, laboral y antecedentes penales, policiales, web y redes sociales`
          },
          {
            name: `Examen médico pre - ocupacional`
          }
          
          
        ]
      },
      {
        name: `UN NUEVO TALENTO SE INCORPORA AL EQUIPO. ¿YA ESTÁS LISTO?`,
        title: 'UN NUEVO TALENTO SE INCORPORA AL EQUIPO. ¿YA ESTÁS LISTO?',
        content: `Esta práctica incorpora una nueva forma de apoyar a los líderes de Entel a gestionar sus equipos desde el inicio. Se envía un flyer a los jefes de equipos cada vez que un nuevo ingreso se incorpora. En este flyer se encuentran los tips que necesitan los jefes para acompañar el Onboarding del nuevo colaborador y así asegurar que éste viva la mejor experiencia desde su ingreso, propiciando el inicio de una conexión transformadora. En cuanto a nuestros diversos canales de reclutamiento, presentamos:`,
       
        links: {
          documents: 'https://issuu.com/entellovers/docs/2_un_nuevo_talento_se_incorpora_a_tu_equipo.pptx',
          videos:'#',
          otherFiles: '#'
        } ,
        list: [
          {
            name: `Postulaciones internas:`,
        
          },
          {
            name: `Referidos`
          },
          {
            name: `Postulaciones Externas`
          }
       
        ]
      },
      {
        name: `AIRA - PLATAFORMA DE RECLUTAMIENTO `,
        title: 'AIRA - PLATAFORMA DE RECLUTAMIENTO',
        content: `Desde este año 2019, contamos con una nueva plataforma que nos ayuda a reducir nuestro proceso de selección con ayuda de inteligencia artificial.

AIRA es un software de inteligencia artificial que tiene la capacidad de filtrar y seleccionar miles de currículum en segundos dependiendo de las características de la persona que una empresa necesita.

El robot aprende en base a algoritmos para calificar cuáles curriculum son "buenos" o "malos" dependendiendo de las habilidades que tiene la persona que se necesita. Luego `,
        links: {
          documents: 'https://issuu.com/entellovers/docs/3aira.pptx',
          videos: 'https://vimeo.com/354503042',
          otherFiles: '#'
        },
        list: [
        
        ]
      },
      {
        name: 'TUS PRIMEROS DÍAS EN ENTEL ',
        title: 'TUS PRIMEROS DÍAS EN ENTEL ',
        content: `
        Como parte de nuestro proceso de bienvenida, incluimos una nueva buena práctica: hacer seguimiento de tus primeros días en la empresa. Enviamos una breve encuesta sobre cómo se están sintiendo hasta el momento. Esto ayuda a iniciar el camino de relación entre cada Entel Lover con Entel y así se empieza a sentir el latido.`,
        links: {
          documents: 'https://issuu.com/entellovers/docs/4tus_primeros_d_as_entel.pptx',
          videos:'#',
          otherFiles: '#'
        },
        list: [
       
        ]
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
