const http = require('http');
const fs = require('fs/promises')
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



const server = http.createServer(async (req, res) => {
    console.log(req.url)
    if (req.url == "/") {

      
        const homeHtml = await fs.readFile('./resources/views/home/index.html', 'utf-8');
          const catHtml = await fs.readFile('./resources/views/cat.html','utf-8');
          const catsHtml = cats.map(x => catHtml.replaceAll('{{catName}}', x.name).replaceAll('{{imageUrl}}', x.imageUrl).replaceAll('{{breed}}', x.breed).replaceAll('{{description}}', x.description))
          console.log(catHtml)
          const homeResult = homeHtml.replace('{{cats}}', catsHtml)
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write(homeResult)
    } else if (req.url == "/styles/site.css") {
        const siteCSS = await fs.readFile('./resources/content/styles/site.js', 'utf-8')
        res.writeHead(200, {
            'Content-Type': 'text/css'
        })
        res.write(siteCSS)
    } else if (req.url == '/cats/add-breed') {
        const addBreedHtml = await fs.readFile('./resources/views/addBreed.html', 'utf-8')
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write(addBreedHtml)
    }
    res.end()

});
server.listen(5000, () => console.log('This server is running on port 5000...'))