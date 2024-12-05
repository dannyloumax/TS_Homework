type TFaculty = {
    id: number,
    faculty: string,
    subjects: string[],
    countStudents: number
}

export type FacultiesArray = TFaculty[];

type TMovie = {
    id: number,
    title: string,
    year: number,
    released: string,
    runtime: string,
    genre: string[],
    director: string,
    writer: string,
    actors: string[],
    plot: string,
    country: string,
    poster: string,
    imdbRating: number,
    imdbVotes: number,
    type: string,
    boxOffice: string,
    production: string,
}

export type MoviesArray = TMovie[];