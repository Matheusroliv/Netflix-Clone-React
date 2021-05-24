import React from 'react';
import styled from 'styled-components';

const MovieRow = styled.div`
    margin-bottom: 30px;

    h2 {
       margin: 0 0 0 30px;
    }
`
const MovieRowListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`
const MovieRowList = styled.div`
    width: 999999px;
`
const MovieRowItem = styled.div`
    display: inline-block;
    width: 200px;
    cursor: pointer;

    img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
    }
    img:hover{
        transform: scale(1);
    }
`

export default ({title, items}) => {
    return (
        <MovieRow>
            <h2>{title}</h2>
            <MovieRowListArea>
                <MovieRowList>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                      <MovieRowItem key={key}>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                      </MovieRowItem>
                    ))}
                </MovieRowList>
            </MovieRowListArea>
        </MovieRow>
    )
}