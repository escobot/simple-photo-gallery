// Everything specific to this gallery lives in assets/: this file plus the
// generated img/ and thumbs/ folders. Replace them to make the gallery yours.
const site = {
    title: 'pbgnz - adventure log',
    name: 'pbgnz',
    tagline: "What is the point of traveling if you don't share what you experience?",
    heading: 'Adventure log',

    // One entry per album, newest first. `id` is the folder name in
    // originals/, assets/img/ and assets/thumbs/; photos are named 01.jpg, 02.jpg, ...
    // `count` must equal the number of photos.
    albums: [
        { id: '2025-marrakech', label: "Marrakech '25", count: 10 },
        { id: '2024-panama', label: "Panama '24", count: 5 },
        { id: '2024-new-york', label: "New York '24", count: 5 },
        { id: '2024-beauharnois-bikepacking', label: "Beauharnois Bikepacking '24", count: 5 },
        { id: '2024-queretaro', label: "Queretaro '24", count: 10 },
        { id: '2023-osaka', label: "Osaka '23", count: 5 },
        { id: '2023-kyoto', label: "Kyoto '23", count: 10 },
        { id: '2023-hong-kong', label: "Hong Kong '23", count: 10 },
        { id: '2023-maui', label: "Maui '23", count: 10 },
        { id: '2022-prague', label: "Prague '22", count: 10 },
        { id: '2022-venice', label: "Venice '22", count: 10 },
        { id: '2022-yucatan', label: "Yucatan '22", count: 5 },
        { id: '2021-vancouver', label: "Vancouver '21", count: 10 },
        { id: '2020-toronto-islands', label: "Toronto Islands '20", count: 10 },
    ],
};
