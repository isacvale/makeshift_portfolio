const projects = [
    {
        alias: 'governa',
        shortname: 'Governa System',
        name: 'The new Governa system',
        description: "A system for the Presidency of Brazil, used throughout the government. It's use is restricted to oficials, and allows the communication and coordination of the three levels of the Executive Power.My contribution was the design of the new UI and implementation with React, MobX and Ant Design.",
        icon: 'library',
        images: [1, 2, 3, 4, 5]
    },
    {
        alias: 'esial',
        shortname: 'E-sial System',
        name: 'The new E-sial system',
        description: 
        `Another system for the Presindency of Brazil, again with restricted access. It allows the management of the presidential schedule, and event to which dignataries may attend.
        My contribution was the overall UI design and implementation with React, MobX and Semantic UI.`,
        icon: 'profile',
        images: []
    },
    {
        alias: 'weather',
        shortname: 'Weather Calendar',
        name: 'A weather calendar app',
        description: "This app was a challenge from a recruiting company. It was designed and built in five days using React and MobX, and relies on Open Weather APIs for weather forecast.",
        icon: 'sun',
        website: {
            label: 'You can see it here.',
            link: 'https://weather-calendar.netlify.app/',
        },
        images: []
    },
    {
        alias: 'tictactoe',
        shortname: 'Tic-tac-toe',
        name: 'A game of tic-tac-toe',
        description: `This game implementation was created as a project for freeCodeCamp towards a front end certification. It uses good ol' jQuery and I consider it a sort of an "early work" I grew fond of.`,
        icon: 'cross',
        website: {
            label: 'Take a look.',
            link: 'https://codepen.io/isacvale/full/dmwOKg',
        },
        images: []
    },
    {
        alias: 'stamp',
        shortname: 'Stamp Components',
        name: 'Stamp: a componentization tool',
        description: `This is a tool for creating simple components without frameworks. I'm very interested in vanilla/core web technologies, and and I feel componentization is key for modern websites. This tool lets you to look for any <template> in your code and to stamp them where needed, leaving the template markup right there where it makes sense. It doesn't have runtime dependencies.`,
        icon: 'cogs',
        images: []
    },
    {
        alias: 'raven',
        shortname: 'Raven Store',
        name: 'Raven: a data binding tool',
        description: `This is a tool for creating stores. Named after the Odin's ravens, who could see everything, it uses a sub/pub pattern to allow vanilla HTML element to react to changes to data. This capability, also called "reactivity", is a fundamental element of modern front end architecture. And this easy tool allows you to have it in vanilla apps.`,
        icon: 'stack',
        images: []
    },
    {
        alias: 'vectorart',
        shortname: 'Vector Art',
        name: 'Some vector art',
        description: "Some vector art I developed for Ocastudios, a game studio company. I've been using Linux and free software for years, and used Inkscape to create these images directly on SVG. ",
        icon: 'brush',
        images: []
    },
    {
        alias: 'paper',
        shortname: 'Paper Games',
        name: 'Tabletop paper games',
        description: "During my years in Ocastudios, we've collected traditional games from around to create DIY paper versions you could print and play at home. The games were design to be visually pleasant, save on ink, being foldable and not requiring glue. I've learned a lot about design doing these project, so they're worth a mention.",
        icon: 'dice',
        images: []
    },
    {
        alias: 'oldsite',
        shortname: 'Me olde Website',
        name: 'Me olde website',
        icon: 'hour-glass',
        description: `This website was created as a capstone for a front end specialization at Coursera. It is outdated in content and technology, and has quite a lot of quirks: for example, it uses a loading screen, but only so I could show off a CSS animation for the capstone. I decided to recreate it, but never found the time, and that's why I know have a "provisional" portfolio. The old website used jQuery and Sass.`,
        images: []
    },
    {
        alias: 'faith',
        shortname: 'My Current Project',
        name: 'My current project',
        description: `I'm currently creating a website for Crafts by Faith, a Houston-based online store for handmade products. It's still early in the development but you can already see the overall picture. It's been developed in React and MobX.`,
        icon: 'play3',
        images: []
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
        images: []
    },
]

export {
    projects
}