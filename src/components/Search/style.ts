import styled from 'styled-components'

export const SearchWrapper = styled.div`
    width: 650px;
    margin: 0 auto;
    font-family: 'Raleway', sans-serif;
    
    @media (max-width: 767px) {
        width: 100%;
    }
`

export const SearchContainer = styled.div`
    padding-top: 64px;

    & h1 {
        //font-size: 22px;
        font-weight: 900;
        text-align: center;
        color: slategrey;
    }

    & input {
        font-family: 'Consolas', sans-serif;
        width: 100%;
        padding: 12px 24px;
        background-color: transparent;
        transition: transform 250ms ease-in-out;
        font-size: 16px;
        line-height: 18px;
        color: #575756;
        background-color: transparent;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 18px 18px;
        background-position: 95% center;
        border-radius: 50px;
        border: 1px solid #575756;
        transition: all 250ms ease-in-out;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        
        @media (max-width: 767px) {
            padding: 12px 5px;
        }

        &::placeholder {
            color: rgba(87, 87, 86, 0.8);
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        &:hover,
        &:focus {
            padding: 12px 0;
            outline: 0;
            border: 1px solid transparent;
            border-bottom: 1px solid #575756;
            border-radius: 0;
            background-position: 100% center;
        }
    }
`

export const SearchResults = styled.div`
    width: 640px;
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    margin-top: 20px;
    
    @media (max-width: 767px) {
        width: 100%;
        gap: 0.5rem;
        justify-content: space-between;
        margin-top: 10px;
    }
    
    & a div {
        flex: 46%;
        & img {
            width: 140px;
            @media (max-width: 767px) {
                width: 160px;
            }
        }
        & h2 {
            font-size: 16px;
            max-width: 140px;
            @media (max-width: 767px) {
                width: 90px;
            }
        }
    }
`

export const SearchItem = styled.div`

`
