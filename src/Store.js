const projects = [
    {
        alias: 'governa',
        shortname: 'Governa System',
        name: 'The new Governa system',
        description: "A system for the Presidency of Brazil, used throughout the government. Its use is restricted to officials, and allows the communication and coordination of the three levels of the Executive Power. I contributed to the design of the new UI and with its implementation with React, MobX and Ant Design.",
        icon: 'library',
        images: [1, 2, 3, 4, 5],
        alt: 'A system based on Ant Design.'
    },
    {
        alias: 'esial',
        shortname: 'E-sial System',
        name: 'The new E-sial system',
        description: 
        `Another system for the Presindency of Brazil, again with restricted access. It allows the management of the presidential schedule, and of events to which dignataries may attend.
        My contribution was the overall UI design and implementation with React, MobX and Semantic UI.`,
        icon: 'profile',
        images: [1, 2, 3, 4],
        alt: 'A system based on SemanticUI.'
    },
    {
        alias: 'weather',
        shortname: 'Weather Calendar',
        name: 'A weather calendar app',
        description: "This app was a challenge from a recruiting company. It was designed and built in five days using React and MobX, and relies on Open Weather APIs for weather forecast.",
        icon: 'sun',
        website: [{
            label: 'Check out the Weather Calendar.',
            link: 'https://weather-calendar.netlify.app/',
        }],
        images: [1, 2, 3, 4, 5, 6],
        alt: 'A calendar app that shows weather forecast for appointments.'
    },
    {
        alias: 'tictactoe',
        shortname: 'Tic-tac-toe',
        name: 'A game of tic-tac-toe',
        description: `This game implementation was created as a project for freeCodeCamp towards a front end certification. It uses good ol' jQuery and I consider it a sort of an "early work" I grew fond of.`,
        icon: 'cross',
        website: [{
            label: 'Check out tic-tac-toe.',
            link: 'https://codepen.io/isacvale/full/dmwOKg',
        }],
        images: [1, 2, 3, 4],
        alt: 'A simple yet stylish game of tica-tac-toe.'
    },
    {
        alias: 'stamp',
        shortname: 'Stamp Components',
        name: 'Stamp: a componentization tool',
        description: `This is a tool for creating simple components without frameworks. I'm very interested in vanilla/core web technologies, and and I feel componentization is key for modern websites. This tool lets you to look for any <template> in your code and to stamp them where needed, leaving the template markup right there where it makes sense. It doesn't have runtime dependencies.`,
        icon: 'cogs',
        images: [1, 2, 3, 4, 5],
        website: [
            {
                label: 'Check out Stamp\'s Github.',
                link: 'https://github.com/isacvale/dvo-stamp'
            },
            {
                label: 'Check out Stamp\'s example page.',
                link: 'https://stampexample.netlify.app/'
            }
        ],
        alt: 'A simple javascript tool for componentization.'
    },
    {
        alias: 'raven',
        shortname: 'Raven Store',
        name: 'Raven: a data binding tool',
        description: `This is a tool for creating stores. Named after Odin's ravens, who could see everything, it uses a sub/pub pattern to allow vanilla HTML elements to react to changes to data. Such capability, also called "reactivity", is a fundamental element of modern front end architecture, and this easy tool allows you to have it in vanilla apps.`,
        icon: 'stack',
        images: [1, 2, 3, 4],
        alt: 'A simple javascript tool for data binding.',
        website: [
            {
                label: 'Check out Raven\'s Github.',
                link: 'https://github.com/isacvale/dvo-raven'
            },
            {
                label: 'Check out Raven\'s example page.',
                link: 'https://ravenexample.netlify.app/'
            }
        ]
    },
    {
        alias: 'vector',
        shortname: 'Vector Art',
        name: 'Some vector art',
        description: "Some vector art I developed for Ocastudios, a game studio. I've been using Linux and free software for years, and used Inkscape to create these images directly on SVG. ",
        icon: 'brush',
        svgImages: true,
        images: [2, 3, 4],
        alt: 'Game artwork in svg.'
    },
    {
        alias: 'tabletop',
        shortname: 'Paper Games',
        name: 'Tabletop paper games',
        description: "During my years in Ocastudios, we've collected traditional games from around the word to create DIY paper versions you could print and play at home. The games were designed to be visually pleasant, save on ink, be foldable and not require glue. I've learned a lot about design doing these projects, so they're worth a mention.",
        icon: 'dice',
        images: [1, 2, 3, 4, 5, 6],
        alt: 'DIY tabletop paper games.',
        website: [
            {
                label: 'Check out some DIY tabletop games',
                link: 'https://ocastudios.com/classics/'
            },
        ]
    },
    {
        alias: 'old',
        shortname: 'Me olde Website',
        name: 'Me olde website',
        icon: 'hour-glass',
        description: `This website was created as a capstone for a front end specialization at Coursera. It is outdated in content and technology, and has quite a lot of quirks: for example, it uses a loading screen, but only so I could show off a CSS animation for the capstone. I decided to recreate it, but never found the time, and that's why I know have a "provisional" portfolio. The old website used jQuery and Sass.`,
        images: [1, 2, 3, 4],
        alt: 'And old personal website.',
        website: [
            {
                label: 'Check out my old web site.',
                link: 'https://isacvale.com'
            },
        ]
    },
    {
        alias: 'crafts',
        shortname: 'My Current Project',
        name: 'My current project',
        description: `I'm currently creating a website for Crafts by Faith, a Houston-based online store for handmade products. It's still early in the development but you can already see the overall picture. It's been developed in React and MobX.`,
        icon: 'play3',
        images: [1, 2, 3],
        alt: 'A cute webiste with a crochet theme.',
        website: [
            {
                label: 'Check out Crafts by Faith.',
                link: 'https://craftsbyfaith.netlify.app/'
            },
        ]
    },
    {
        alias: 'me',
        shortname: 'About Me',
        name: 'About me, eh?',
        description: "I'm Isac, front end developer and web designer based on Vancouver. I graduated in Architecture and worked as a game designer, but my search to combine the stuff I love—design and coding—led me to web design. I mostly work with React and vanilla, but I'm also very interested in Svelte and JAM stack. I'm interested in functional programming, test-driven development and user-centric design, but mostly what I want is to create useful and accessible sites that spark joy.",
        icon: 'neutral',
        images: []
    },
    {
        alias: 'stuff',
        shortname: 'Stuff I Like',
        name: 'Just some stuff I like',
        description: `This section holds links to some tools and other goodies that catch my eye. It is a reference for my future self, but it can teach something about me, after all, as the saying goes: "tell me with whom you walk, and I'll they you who you are".`,
        icon: 'smile',
        images: [],
        items: [
            {
                name: 'MobX',
                category: 'library',
                label: 'A very simple and flexible state management, which I favour with React. Mobx allows great flexibility to design your data flow, and fits like a glove both small and huge projects.',
                link: 'https://mobx.js.org/'
            },
            {
                name: 'Parcel',
                category: 'library',
                label: 'No configuration is a huge plus, especially in a bundler. I certainly flavour it in vanilla apps, as it keeps the code sane.',
                link: 'https://parceljs.org/'
            },
            {
                name: 'Standard JS',
                category: 'library',
                label: 'No configuration is a double blessing for a linter. It means putting universality of code before your preference over semicolons.',
                link: 'https://standardjs.com/'
            },
            {
                name: 'You don\'t know JS',
                category: 'book',
                label: 'This collection of books by getify (actually, the earier version) is how I really learned JS. It is an amazing journey through the language, and a great vaccine against nonsense. I cannot recommend it enough.',
                link: 'https://github.com/getify/You-Dont-Know-JS'
            },
            {
                name: 'CSS Secrets',
                category: 'book',
                label: 'It is true that this great book by Lea Verou is a bit dated, as new features have emerged to solve some of the problems. It is still a valuable resource to learn the fundamentals, to learn about the context in which CSS exists, and especially, to inspire us. Hats off, Lea.',
                link: 'https://www.goodreads.com/book/show/20830437-css-secrets'
            },
            {
                name: 'Svelte',
                category: 'framework',
                label: 'I\'m not a big fan of frameworks, but as frameworks go, Svelte is exceptional. It feels very much like web components used to feel when HTML Import was alive - i.e. when it was good. I\'m not saying it\'s flawless, but it is a promising tool.',
                link: 'https://svelte.dev/'
            },
            {
                name: 'Netlify',
                category: 'service',
                label: 'If you don\'t remember life before such services, I envy your amnesia. The first time I used Netlify, I could not believe my eyes! It did in few clicks and seconds what took me a couple of hours. I have no love for managing servers, so Netlify is indispensable. (They could spare a little more love for vanilla apps though, there\'s more to life than JAM Stack).',
                link: 'https://www.netlify.com/'
            },
            {
                name: 'Fun Fun Function',
                category: 'media',
                label: 'MPJ has stopped postings videos, but those he made are a treasure. Funny, insightful and inspiring, his videos are even credited by (the) getify in his books, which is quite a feat. I miss my good monday mornings dearly.',
                link: 'https://www.youtube.com/c/funfunfunction'
            },
            {
                name: 'React JS',
                category: 'framework',
                label: 'As many, I was at first dismayed by JSX, but once you get past that, React proves itself to be impressive. In particular, having a component be a function is practcial and beautiful, and Create React App allows for very quick prototype development.',
                link: 'https://reactjs.org/'
            },
        ]
    },
]

export {
    projects
}