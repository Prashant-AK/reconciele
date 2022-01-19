import styled from 'styled-components';

export const Banner = styled.div`
    background: #002366;
    height: 530px;
`;

export const Left = styled.div`
    padding-top: 108.45px;
    background-repeat: no-repeat!important;
    background-size: 332px!important;
    background-position: 0 0!important;
    padding-left: 115px;
    margin-left: -110px;
    p{
        color: #F2F2F2;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
        ::after{
            content: '';
            width: 100px;
            background: azure;
            position: absolute;
            height: 2px;
            bottom: 0;
            margin-left: 26px;
        }
    }
    h1{
        font-weight: bold;
        font-size: 68px;
        line-height: 80px;
        color: #F2F2F2;
        width: 462px;
    }
    span{
        font-weight: 500;
        font-size: 18px;
        line-height: 125%;
        color: #F2F2F2;
        width: 499px;
        display: block;
        padding-top: 10px;
    }
`;

export const Right = styled.div`
    img{
        height: 698px;
        margin-top: 40px;
        width: 100%;
        object-fit: contain;
    }
`;