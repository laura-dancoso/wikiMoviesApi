const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})

const movies = require('./movies.json');
const genres = require('./genres.json');
const theaters = require('./theaters.json');

app.get('/api/genres', (req, res) => {
    res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(g=>g.id == req.params.id);
    (genre) ? res.send(genre) : res.sendStatus(404);
});

app.get('/api/theaters', (req, res) => {
    res.send(theaters);
});

app.get('/api/theaters/:id', (req, res) => {
    const theater = theaters.find(t=>t.id == req.params.id);
    (theater) ? res.send(theater) : res.sendStatus(404);
});

app.get('/api/movies', (req, res) => {
    const filterGenders = (req.query.genres ? [...req.query.genres] : null)?.map(g => parseInt(g));
    const filterTheaters = (req.query.theaters ? [...req.query.theaters] : null)?.map(g => parseInt(g));
    let resp;
    if (filterGenders || filterTheaters)
        resp = movies.filter(m=>{
            let genderMatch = filterGenders?.some(filter=> m.genres.map(g=>g.id).includes(filter)) ?? true;
            let theaterMatch = filterTheaters?.some(filter=> m.showtimes.map(s=>s.theater.id).includes(filter)) ?? true;
            return genderMatch && theaterMatch;
        });
    else
        resp = movies;
    res.send(resp.map(m=>({id: m.id, title: m.title, imageUrl: m.imageUrl})));
});

app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(m=>m.id == req.params.id);
    (movie) ? res.send(movie) : res.sendStatus(404);
});