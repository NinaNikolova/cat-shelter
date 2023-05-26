const cats = [{
    id: 1,
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*",
    name: 'Navcho',
    breed: 'Persian',
    description: 'Very cute cat'
},
{
    id: 2,
    imageUrl:'https://cdn.theatlantic.com/thumbor/d8lh_KAZuOgBYslMOP4T0iu9Fks=/0x62:2000x1187/1600x900/media/img/mt/2018/03/AP_325360162607/original.jpg',
    name: 'Mishi',
    breed: 'Angora',
    description: 'Very fluffy'
},
{
    id: 3,
    imageUrl:'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg',
    name: 'Garry',
    breed: 'Persian',
    description: 'Very fat cat'
},
]
exports.getAll=()=>cats.slice(); 