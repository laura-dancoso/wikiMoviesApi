# Api para el proyecto final WikiMovies
*** este proyecto fue realizado para fines acádemicos/prácticos para ser consumido por la app [wikiMovies](https://github.com/laura-dancoso/wikiMovies) y aún no está trabajando con datos en tiempo real ***
## Get Genres
Retorna la lista de todos los géneros disponibles.
### Request

`GET /api/genres`

### Response

``` json
[
    {
        "id": "number",
        "description": "string"
    }
]
```
## Get Genre
Retorna el género disponible que coincide con el parámetro dado.
### Request

`GET /api/genres/{id}`

### Param
`id`

El id del género

### Response
`200 OK | 404 Not Found`

``` json
{
    "id": "number",
    "description": "string"
}
```
## Get Theaters
Retorna la lista de todos los cines disponibles.
### Request

`GET /api/theaters`

### Response

``` json
[
    {
        "id": "number",
        "description": "string"
    }
]
```
## Get Theater
Retorna el cine disponible que coincide con el parámetro dado.
### Request

`GET /api/theaters/{id}`
### Param
`id`

El id del cine

### Response
`200 OK | 404 Not Found`

``` json
{
    "id": "number",
    "description": "string"
}
```
## Get Movies
Retorna la lista de las peliculas disponibles.
### Request

`GET /api/movies`

### Query params
`theaters`

array de ids de los cines que se desea filtrar

Ejemplo: `/api/movies?teathers=1&teathers=2`

`genres`

array de ids de los géneros que se desea filtrar

Ejemplo: `/api/movies?genres=1&genres=2`


### Response

``` json
[
    {
        "id": "number",
        "title": "string",
        "imageUrl": "string"
    }
]
```
## Get Movie
Retorna el detalle de la pelicula que coincide con el parámetro dado.
### Request

`GET /api/movies/{id}`
### Param
`id`

El id de la pelicula

### Response
`200 OK | 404 Not Found`

``` json
[
        {
            "id": "number",
            "title": "string",
            "releaseDate": "shortdate: MM/DD/YYYY",
            "genres":[
                {
                    "id": "number",
                    "description": "string"
                }
            ],
            "description": "string",
            "duration": "number",
            "imageUrl": "string",
            "showtimes":[
                {
                    "theater": {
                        "id": "number",
                        "description": "string",
                        "url": "string"
                    },
                    "dates":[
                        {
                            "date": "shortdate: MM/DD/YYYY",
                            "times":[
                                "string"
                            ]
                        }
                    ]
                }
            ]
        }
    ]
```


