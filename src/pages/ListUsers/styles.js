import styled from 'styled-components';

export const Container = styled.div`
    background-color: #181f36;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    min-height: 100vh;`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px 0;

    @media (max-width: 770px) {
        grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 500px;

    p {
        color: #ffffff;
        font-size: 14px;
        font-weight: 200;
        text-align: left;
    }

    h3 {
        color: #ffffff;
        font-size: 24px;
        margin-bottom: 3px;
        text-align: left;
        text-transform: capitalize;
    }

    @media (max-width: 400px) {
        max-width: 350px;

    p {
        color: #ffffff;
        font-size: 12px;
        font-weight: 200;
        text-align: left;
    }

    h3 {
        color: #ffffff;
        font-size: 20px;
        margin-bottom: 3px;
        text-align: left;
    }  
    }  
`

export const AvatarUser = styled.img`
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    background-color: ${(props) => props.$bgColor};
    border: 3px solid #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 400px) {
        height: 60px;
    }
`

export const Texts = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 10px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`