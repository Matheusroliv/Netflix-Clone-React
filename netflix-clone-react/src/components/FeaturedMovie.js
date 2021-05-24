import React from 'react';
import styled from 'styled-components';

const Featured = styled.div`
    height: 100vh;
`
const FeaturedVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`
const FeaturedHorizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 150px;
    padding-top: 70px;
`
const FeaturedName = styled.div`
    font-size: 60px;
    font-weight: bold;
`
const FeaturedInfo = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
`
const FeaturedPoints = styled.div`
    display: inline-block;
    color: #46d369;
    margin-right: 15px;
`
const FeaturedYear = styled.div`
    display: inline-block;
    margin-right: 15px;
`
const FeaturedSeasons = styled.div`
    display: inline-block;
    margin-right: 15px;
`
const FeaturedDescription = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;
`
const FeaturedButtons = styled.div`
    margin-top: 15px;
`
const WatchButton = styled.a`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    background-color: #FFF;
    color: #000;
    opacity: 1;

    &:hover {
        opacity: 0.7;
        transition: 0.2s;
    }
`
const MyListButton = styled.a`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    background-color: #333;
    color: #000;
    opacity: 1;
    
    &:hover {
        opacity: 0.7;
        transition: 0.2s;
    }
`
const FeaturedGenres = styled.a`
    margin-top: 15px;
    font-size: 18px;
    color: #999;
`

export default ({item}) => {


    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name)
    }


    return (
        <Featured style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <FeaturedVertical>
                <FeaturedHorizontal>
                    <FeaturedName>{item.original_name}</FeaturedName>
                    <FeaturedInfo>
                        <FeaturedPoints>{item.vote_average} points</FeaturedPoints>
                        <FeaturedYear>{firstDate.getFullYear()}</FeaturedYear>
                        <FeaturedSeasons>{item.number_of_seasons} season{item.number_of_seasons !== 1 ? 's' : ''}</FeaturedSeasons>
                    </FeaturedInfo>
                    <FeaturedDescription>{item.overview}</FeaturedDescription>
                    <FeaturedButtons>
                        <WatchButton href={`/watch/${item.id}`}>► Assistir</WatchButton>
                        <MyListButton href={`/list/add/${item.id}`}>+ Minha Lista</MyListButton>
                    </FeaturedButtons>
                    <FeaturedGenres><strong>Genres:</strong> {genres.join(', ')}</FeaturedGenres>
                </FeaturedHorizontal>
            </FeaturedVertical>
        </Featured>
    )  
}