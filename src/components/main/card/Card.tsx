import { IMovie } from "../../../interfaces"


interface IProps {
    movie: IMovie;
}

export function Card({ movie }: IProps) {
    return (
        <a href={`/${movie.id}`} style={{boxShadow: " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" , margin:"6px", width:"18%", maxWidth:"260px", height:"auto", cursor:"pointer"}}>
            <img src={movie.imdb.info.Poster} alt=""  style={{  width: '100%', height: 'auto'}}/>
            <p style={{margin:"0px", textAlign:"center"}}>{movie.uaName}</p>
        </a>
    )
}
