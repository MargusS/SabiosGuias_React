export const infoRoutes = [
  {
    id: 1,
    color: "rgb(195, 214, 47)",
    name: "Agüimes",
    description: "Ruta por el casco histórico de Agüimes realizando las 5 paradas que constituyen nuestra visita: (1) Camino a la iglesia, (2) Iglesia, (3) Plaza del Rosario, (4) Casa de los Camellos y (5) Casa de la cámara episcopal",
    music: "",
    stops: [
      {
        idStop: 1,
        name: "Camino a la iglesia",
        description: "",
        video: "",
        location: [27.9086217, -15.3886205]
      }, {
        idStop: 2,
        name: "Iglesia",
        description: "",
        video: "",
        location: [27.9066994, -15.4490244]
      }, {
        idStop: 3,
        name: "Plaza del Rosario",
        description: "",
        video: "",
        location: [27.9066994, -15.4490244]
      }, {
        idStop: 4,
        name: "Casa de los Camellos",
        description: "",
        video: "",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 5,
        name: "Casa de la cámara episcopal",
        description: "",
        video: "",
        location: ""
      },
    ]
  }, {
    id: 2,
    color: "rgb(16, 126, 115)",
    name: "La Isleta",
    description: "Ruta por el antigüo barrio de La Isleta teniendo en cuenta los siguientes puntos de interés: (1) Juan Rejón, (2) Castillo de la Luz, (3) Club Victoria y (4) Fábrica Escobio",
    music: "",
    stops: [
      {
        idStop: 1,
        name: "Juan Rejón",
        description: "",
        video: "",
        location: [28.148989336012654, -15.42077263372809],
        nextPortal: [
          {
            visible: "true",
            position: "-5 1.7 2.2",
            animation: "0 150 0",
            rotation: "0 90 0",
            titleStop: "Castillo de la Luz",
          }
        ],
        prevPortal: [
          {
            visible: "false",
            position: "3 1.7 2.2",
            animation: "",
            rotation: "",
            titleStop: "",
          }
        ]

      }, {
        idStop: 2,
        name: "Castillo de la Luz",
        description: "",
        video: "",
        location: [28.148989336012654, -15.42077263372809],
        nextPortal: [
          {
            visible: "true",
            position: "-5 2 -1.5",
            animation: "0 110 0",
            rotation: "0 50 0",
            titleStop: "Club Victoria",
          }
        ],
        prevPortal: [
          {
            visible: "true",
            position: "5 1.8 -2",
            animation: "0 -45 0",
            rotation: "0 -125 0",
            titleStop: "Juan Rejon",
          }
        ]
      }, {
        idStop: 3,
        name: "Club Victoria",
        description: "",
        video: "",
        location: [28.148989336012654, -15.42077263372809],
        nextPortal: [
          {
            visible: "true",
            position: "-5 2 -1.5",
            animation: "0 110 0",
            rotation: "0 50 0",
            titleStop: "Fabrica Escobio",
          }
        ],
        prevPortal: [
          {
            visible: "true",
            position: "5 1.8 -2",
            animation: "0 -45 0",
            rotation: "0 -125 0",
            titleStop: "Castillo de la Luz",
          }
        ]
      }, {
        idStop: 4,
        name: "Fabrica Escobio",
        description: "",
        video: "",
        location: [28.148989336012654, -15.42077263372809],
        nextPortal: [
          {
            visible: "false",
            position: "3 1.7 2.2",
            animation: "",
            rotation: "",
            titleStop: "",
          }
        ],
        prevPortal: [
          {
            visible: "true",
            position: "5 1.8 -2",
            animation: "0 -45 0",
            rotation: "0 -125 0",
            titleStop: "Club Victoria",
          }
        ]
      }
    ]
  }, {
    id: 3,
    color: "rgb(195, 214, 47)",
    name: "Tras las huellas británicas",
    description: "Tras las Huellas Británicas es una ruta por Ciudad Jardín (Las Palmas de G.C.) donde se destacan visitan los principales elementos que recuerdan a día de hoy el pasado británico de la ciudad. Se trata de una visita caracterizada y acompañada (en diversos puntos) de elementos culturales británicos (música, vestimenta, etc.)",
    music: "",
    stops: [
      {
        idStop: 1,
        name: "Antiguo Hospital Inglés",
        description: "",
        video: "",
        location: [28.1219283, -15.4378989]
      }, {
        idStop: 2,
        name: "Mirador de la Cornisa",
        description: "",
        video: "Route-3-Stop-2.mp4",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 3,
        name: "Estatua de Fernando L. y Castillo",
        description: "",
        video: "Route-3-Stop-3.mp4",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 4,
        name: "Parque Doramas Parte Alta",
        description: "",
        video: "Route-3-Stop-4.mp4",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 5,
        name: "Parque Doramas Parte Baja",
        description: "",
        video: "Route-3-Stop-5.mp4",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 6,
        name: "Hotel Santa Catalina",
        description: "",
        video: "Route-3-Stop-6.mp4",
        location: ""
      },
    ]
  }, {
    id: 4,
    color: "rgb(16, 126, 115)",
    name: "Inmersión Lingüística",
    description: "Ruta de inmersión lingüística Canaria, en la que a través de personajes relevantes de nuestra literatura, los turistas practican nuestro idioma",
    music: "",
    stops: [
      {
        idStop: 1,
        name: "Rotonda del árbol del responso",
        description: "",
        video: "",
        location: [28.0961117, -15.4161696]
      }, {
        idStop: 2,
        name: "Natalia Sosa Ayala",
        description: "",
        video: "",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 3,
        name: "Domingo J Navarro",
        description: "",
        video: "",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 4,
        name: "Agatha Christie",
        description: "",
        video: "",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 5,
        name: "Tomás Morales",
        description: "",
        video: "",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 6,
        name: "Josefina de la Torre",
        description: "",
        video: "",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 7,
        name: "Carmen Laforet",
        description: "",
        video: "",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 8,
        name: "Benito Pérez Galdós",
        description: "",
        video: "",
        location: [27.9560056, -15.4518982]
      },
    ]
  }, {
    id: 5,
    color: "rgb(195, 214, 47)",
    name: "Jardín Canario",
    description: "Ruta por el Jardín Canario realizando las 3 paradas que constituyen nuestra visita: (1) Iglesia de Santa Brígida, (2) Bosque de Laurisilva y (3) Fuente de los Sabios",
    music: "",
    stops: [
      {
        idStop: 1,
        name: "Iglesia de Santa Brígida",
        description: "",
        video: "",
        location: [28.0653687, -15.4627028]
      }, {
        idStop: 2,
        name: "Bosque de Laurisilva",
        description: "",
        video: "",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 3,
        name: "Fuente de los Sabios",
        description: "",
        video: "",
        location: [28.0653687, -15.4627028]
      },
    ]
  }, {
    id: 6,
    color: "rgb(16, 126, 115)",
    name: "Transhumancia",
    description: "Ruta por el casco histórico de Agüimes realizando las 5 paradas que constituyen nuestra visita: (1) Camino a la iglesia, (2) Iglesia, (3) Plaza del Rosario, (4) Casa de los Camellos y (5) Casa de la cámara episcopal",
    music: "",
    stops: [
      {
        idStop: 1,
        name: "Camino a la iglesia",
        description: "",
        video: "",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 2,
        name: "Iglesia",
        description: "",
        video: "",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 3,
        name: "Plaza del Rosario",
        description: "",
        video: "",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 4,
        name: "Casa de los Camellos",
        description: "",
        video: "",
        location: [27.9560056, -15.4518982]
      }, {
        idStop: 5,
        name: "Casa de la cámara episcopal",
        description: "",
        video: "",
        location: [27.9560056, -15.4518982]
      },
    ]
  },
];