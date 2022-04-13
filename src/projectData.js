const projects = [
  {
    title: 'Lotje McDonald Photography',
    images: [
      {
        url: './images/projects/lotje-mcdonald.jpg'
      },
      {
        url: './images/projects/lotje-mcdonald-2.jpg'
      },
      {
        url: './images/projects/lotje-mcdonald-3.jpg'
      },
      {
        url: './images/projects/lotje-mcdonald-4.jpg'
      },
      {
        url: './images/projects/lotje-mcdonald-5.jpg'
      },
      {
        url: './images/projects/lotje-mcdonald-6.jpg'
      }
    ],
    description: "Website built with a custom child theme designed for a professional photographer based in AU.", // <-- add this later: This project was paid freelance contract work.
    tools: ['Wordpress', 'WooCommerce', 'SEO'],
    github: 'https://github.com/Joshvdw/lotje-mcdonald-photography',
    link: 'https://lotjemcdonaldphotography.com.au',
  },
  {
    title: 'Torotoro',
    images: [
      {
        url: './images/projects/torotoro.jpg'
      },
      {
        url: './images/projects/torotoro-2.jpg'
      },
      {
        url: './images/projects/torotoro-3.jpg'
      },
      {
        url: './images/projects/torotoro-4.jpg'
      },
      {
        url: './images/projects/torotoro-5.jpg'
      }
    ],
    description: 'An interactive storybook / point-and-click adventure game to get kids thinking about some important "human-skill" concepts.',
    tools: ['React / Redux', 'Node', 'Express'],
    github: 'https://github.com/Joshvdw/torotoro',
    behance: 'https://behance.net/gallery/133579459/Torotoro',
    link: 'https://torotoro.herokuapp.com/',
  },
  {
    title: 'Prelude 2021',
    images: [
      {
        url: './images/projects/prelude.jpg' 
      },
      {
        url: './images/projects/prelude-2.jpg' 
      },
      {
        url: './images/projects/prelude-3.jpg' 
      }
    ],
    description: "I was part of the development team that created the graduation website for Yoobee Colleges. I was nominated to be the dev lead & was mainly in charge of the JavaScript, making sure the data dynamically renders to the DOM.",
    tools: ['HTML / CSS', 'JavaScript', 'Figma'],
    github: 'https://github.com/Joshvdw/Prelude-Yoobee-Gradsite',
    behance: 'https://www.behance.net/gallery/122682407/Prelude-Yoobee-Graduation-Site-2021',
    link: 'https://nataliacatalina.github.io/prelude-portfolio/index.html',
  },
  {
    title: 'Jack Robert Photography',
    images: [
      {
        url: './images/projects/jack-robert.jpg'
      },
      {
        url: './images/projects/jack-robert-2.jpg'
      },
      {
        url: './images/projects/jack-robert-3.jpg'
      },
      {
        url: './images/projects/jack-robert-4.jpg'
      },
      {
        url: './images/projects/jack-robert-5.jpg'
      },
      {
        url: './images/projects/jack-robert-6.jpg'
      }
    ],
    description: "Photography website designed and build from the ground up using a custom Wordpress theme - as well as custom post types, metaboxes, plugins and taxonomies. ",
    tools: ['Wordpress', 'PHP', 'JavaScript'],
    github: 'https://github.com/Joshvdw/Jack-Robert-Photography-Site',
    behance: 'https://www.behance.net/gallery/122393875/Jack-Robert-Photography-Website'
  },
  {
    title: 'Ticket Trade',
    images: [
      {
        url: './images/projects/ticket-trade.jpg'
      },
      {
        url: './images/projects/ticket-trade-2.jpg'
      },
      {
        url: './images/projects/ticket-trade-3.jpg'
      },
      {
        url: './images/projects/ticket-trade-4.jpg'
      },
      {
        url: './images/projects/ticket-trade-5.jpg'
      },
      {
        url: './images/projects/ticket-trade-6.jpg'
      },
      {
        url: './images/projects/ticket-trade-7.jpg'
      }
    ],
    description: "A user-generated marketplace app for buying or selling event tickets online. This app allows users to create an account, log in and post or edit their event tickets, as well as view other user's tickets, buy them or leave comments.",
    tools: ['Node', 'Express', 'MongoDB', 'Figma'],
    github: 'https://github.com/Joshvdw/Ticket-Trade-Ecommerce-Site',
    behance: 'https://www.behance.net/gallery/119618593/Ticket-Trade-User-Generated-Ecommerce-Site'
  },
  {
    title: 'Toughlove Redesign',
    images: [
      {
        url: './images/projects/toughlove.jpg'
      },
      {
        url: './images/projects/toughlove-2.jpg'
      },
      {
        url: './images/projects/toughlove-3.jpg'
      },
      {
        url: './images/projects/toughlove-4.jpg'
      }
    ],
    description: "A redesign for non-for-profit org, Toughlove. Built using Wordpress with a custom theme, custom post types, taxonomies and admin customisations.",
    tools: ['Wordpress', 'PHP', 'JavaScript'],
    github: 'https://github.com/Joshvdw/Toughlove-Redesign-Custom-WP-Site',
    behance: 'https://www.behance.net/gallery/120386611/Toughlove-Redesign'
  },
  {
    title: 'Tourism NZ Booking App',
    images: [
      {
        url: './images/projects/booking-app.jpg'
      },
      {
        url: './images/projects/booking-app-2.jpg'
      },
      {
        url: './images/projects/booking-app-3.jpg' 
      },
      {
        url: './images/projects/booking-app-4.jpg'
      },
      {
        url: './images/projects/booking-app-5.jpg'
      },
      {
        url: './images/projects/booking-app-6.jpg' 
      },
      {
        url: './images/projects/booking-app-7.jpg'
      },
      {
        url: './images/projects/booking-app-8.jpg'
      }
    ],
    description: "Web app that allows users to book accommodation in Queenstown from the few selected options available. This project was a Summative assignment for Yoobee Colleges to practice using APIs.",
    tools: ['Maps API', 'JS', 'Bootstrap', 'SASS'],
    github: 'https://github.com/Joshvdw/Tourism-NZ-Booking-App',
    behance: 'https://www.behance.net/gallery/109211249/Queenstown-Accommodation-Booking-Website'
  },
  {
    title: 'Earth Tongue',
    images: [
      {
        url: './images/projects/earth-tongue.jpg'
      },
      {
        url: './images/projects/earth-tongue-2.jpg'
      },
      {
        url: './images/projects/earth-tongue-3.jpg'
      },
      {
        url: './images/projects/earth-tongue-4.jpg'
      }
    ],
    description: "Website made for Wellington-based rock band, Earth Tongue. Created to develop my UX / UI design skills and basic programming knowledge.",
    tools: ['HTML / CSS', 'UX Research', 'Figma'],
    github: 'https://github.com/Joshvdw/Earth-Tongue-Band-Website',
    behance: 'https://www.behance.net/gallery/93691719/Earth-Tongue-Website'
  },
];

export default projects;
