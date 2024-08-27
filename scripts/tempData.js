const tempData = [
    {
        title: "The Lord of the Ring: The Fellowship oh the Ring",
        year: 1990,
        director:"Peter Jackson",
        duration:" 2hr 56min",
        gender: ["Action", "Adventure", "Drama", "Fantasy"],
        rate: 8.7, 
        poster: "https://www.google.com/imgres?q=the%20lord%20of%20the%20rings%202%20film%20poster&imgurl=https%3A%2F%2Fpostercity.com.ar%2Fwp-content%2Fuploads%2F2021%2F07%2FLord-of-the-Rings-two-towers.jpg&imgrefurl=https%3A%2F%2Fpostercity.com.ar%2Fproducto%2Fthe-lord-of-the-rings-the-two-towers%2F&docid=JA5i01e72ufKgM&tbnid=9SewtfjLXUDhGM&vet=12ahUKEwib356PqJaIAxUXrpUCHUZQN1wQM3oECB0QAA..i&w=500&h=750&hcb=2&ved=2ahUKEwib356PqJaIAxUXrpUCHUZQN1wQM3oECB0QAA",

    },
    {
        title: "The Lord of the Ring: The Two Towes",
        year: 1993,
        director:"Peter Jackson",
        duration: "2hr 45min",
        gender:  ["Action", "Adventure", "Drama", "Fantasy"],
        rate: 7.5,
        poster: "https://www.google.com/imgres?q=the%20lord%20of%20the%20rings%201%20film%20poster&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0120737%2F&docid=EG_nUnHoVl_RiM&tbnid=6-f04EV6lrjNxM&vet=12ahUKEwjpr_LYpZaIAxXyrpUCHUTcGTAQM3oECBgQAA..i&w=1978&h=2936&hcb=2&ved=2ahUKEwjpr_LYpZaIAxXyrpUCHUTcGTAQM3oECBgQAA",

    },
    {
        title: "The Lord of the Ring: The return of the King",
        year: 1996,
        director:"Peter Jackson",
        duration:"2hr 10min",
        gender: ["Action", "Adventure", "Drama", "Fantasy"],
        rate: 8.2,
        poster: "https://www.google.com/imgres?q=the%20lord%20of%20the%20rings%203%20film%20poster&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0167260%2F&docid=jZBx8udFimKQRM&tbnid=10vLxbpqzJRrcM&vet=12ahUKEwjdueD3pZaIAxUdqJUCHXMhDjAQM3oECBgQAA..i&w=800&h=1185&hcb=2&ved=2ahUKEwjdueD3pZaIAxUdqJUCHXMhDjAQM3oECBgQAA",

    },
    {
        title: "Back to the Future I",
        year: 1986,
        director: "George Zemeckis",
        duration:"1hr 10min",
        gender:  ["Accion", "Sci-Fic", "Adventure"],
        rate: 8.3,
        poster: "https://www.google.com/imgres?q=back%20to%20the%20future%20%20film%20poster&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51bhPIm%2B6VL._AC_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.ca%2FBack-Future-Movie-Poster-inches%2Fdp%2FB07X5BJDYT&docid=_H4HjetIb1t-4M&tbnid=jbRHFj6MkppntM&vet=12ahUKEwjY_OaOppaIAxU7iJUCHYrYBBgQM3oFCIEBEAA..i&w=326&h=500&hcb=2&itg=1&ved=2ahUKEwjY_OaOppaIAxU7iJUCHYrYBBgQM3oFCIEBEAA",

    },
    {
        title: "Back to the Future II",
        year: 1989,
        director: "George Zemeckis",
        duration: "2hr 1min",
        gender: ["Accion", "Sci-Fic", "Adventure"],
        rate: 7.9,
        poster: "https://www.google.com/imgres?q=back%20to%20the%20future%20II%20film%20poster&imgurl=https%3A%2F%2Fxl.movieposterdb.com%2F21_08%2F1989%2F96874%2Fxl_96874_a20cbf38.jpg&imgrefurl=https%3A%2F%2Fwww.movieposterdb.com%2Fback-to-the-future-part-ii-i96874%2Fa20cbf38&docid=muDsOdIuajHPxM&tbnid=9VjtGG3vajcemM&vet=12ahUKEwjsgeCcppaIAxWTqZUCHZBPMDsQM3oECHUQAA..i&w=600&h=900&hcb=2&ved=2ahUKEwjsgeCcppaIAxWTqZUCHZBPMDsQM3oECHUQA",
    }, 
    {
        title: "Back to the Future III",
        year: 1990,
        director: "George Zemeckis",
        duration: "1hr 59min",
        gender: ["Accion", "Sci-Fic", "Adventure"],
        rate: 8.6,
        poster:"https://www.google.com/imgres?q=back%20to%20the%20future%20III%20film%20poster&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71sPGYXUl%2BL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.mx%2FBack-Future-III-Movie-Poster%2Fdp%2FB0016DDVRO&docid=bpno2gponsUT7M&tbnid=_nC-te9DVo_4CM&vet=12ahUKEwjlgbupppaIAxVfpZUCHfRuOeMQM3oECBoQAA..i&w=676&h=1000&hcb=2&ved=2ahUKEwjlgbupppaIAxVfpZUCHfRuOeMQM3oECBoQAA",

    },
]