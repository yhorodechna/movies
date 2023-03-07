import { IMovie } from '../../interfaces';
import { Card } from './card/Card';

interface IProps {
    movies: IMovie[]
}

export function Main({ movies }: IProps) {
    return (
        <main style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {movies.map((movie) =>
                <Card key={movie.id} movie={movie} />
            )}
        </main>
    )
}