import { styled } from "styled-components";


export const MovieDetailsStyled = styled.section`

.back-link{    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    width: 150px;
    height: 40px;
    border-radius: 50px;
    border: 3px solid #fff;
    background-color: ${props => props.theme.color.green};
    color: ${props => props.theme.color.white_w};
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s, color 0.3s;
  
    &:hover {
    background-color: ${props => props.theme.color.yellow_star}; 
    color: ${props => props.theme.color.black};
    }
}

.main-content{
    display: flex;
    gap: 20px;
}

.main-img{
    width: 100%;
    height: auto;
    max-width: 350px;
}

.main-decr{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-title{
    /* text-align: center; */
    font-weight: 700;
    margin-bottom: 20px;
}

.card-score{
    margin-bottom: 20px;
}

.card-overview{
    margin-bottom: 10px;
}

.text-overview{
    margin-bottom: 20px;
}

.genres-title{
    margin-bottom: 10px;
}

.information-title{
    margin-bottom: 10px;
}

.info-link{
    margin-bottom: 10px;
    display: inline-block;
    padding: 5px 15px;
    border-radius: 15px;
    text-decoration: none;
    text-align: center;
    color: rgb(0, 0, 0);
    background-color: ${props => props.theme.color.green};
    font-weight: 500;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
    color: ${props => props.theme.color.white_w};
    }
}

.last-link{
    margin-bottom: 0;
}
`