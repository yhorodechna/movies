
    export interface IHurtomItem {
        id: string;
        name: string;
        year: string;
        names: string[];
        uaName: string;
        enName: string;
        href: string;
    }

    export interface IImdbRating {
        Source: string;
        Value: string;
    }

    export interface IImdbInfo {
        Title: string;
        Year: string;
        Rated: string;
        Released: string;
        Runtime: string;
        Genre: string;
        Director: string;
        Writer: string;
        Actors: string;
        Plot: string;
        Language: string;
        Country: string;
        Awards: string;
        Poster: string;
        Ratings: IImdbRating[];
        Metascore: string;
        imdbRating: string;
        imdbVotes: string;
        imdbID: string;
        Type: string;
        DVD: string;
        BoxOffice: string;
        Production: string;
        Website: string;
        Response: string;
    }

    export interface IImdb {
        enName: string;
        year: string;
        info: IImdbInfo;
    }

    export interface IMovie {
        id: string;
        hurtom_items: IHurtomItem[];
        uaName: string;
        imdb: IImdb;
    }


