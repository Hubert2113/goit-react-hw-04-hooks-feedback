import styled from 'styled-components';

export const FeedbackBtn = styled.button`
    padding: 5px;
    border: #bdbdbd solid 1px;
    border-radius: 5px;
    box-shadow: 0px 8px 24px -9px rgba(66, 68, 90, 1);
    margin-left: 10px;
    background-color: white;

    &:active{
        background-color: #335cff;
        box-shadow: inset 4px 30px 31px -8px rgba(66, 68, 90, 1);
    }
`;