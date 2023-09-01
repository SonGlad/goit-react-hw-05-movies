import { styled } from "styled-components";

export const HomePageSection = styled.section`
text-align: center;

.hero-section-title{
    font-weight: 800;
    margin-bottom: 20px;
}
.movie-list{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.movie-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 210px;
    background-color: silver;
    border-radius: 15px;
    overflow: hidden;
}

.movie-img{
    width: 100%;
    height: auto;
}

.film-name{
    font-weight: 700;
    text-align: center;
    min-height: 48px;
    width: 100%;
}
`
