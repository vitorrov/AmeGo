import styled from 'styled-components/native';

export const Image = styled.Image`
    height: ${props => props.size}px;
    width: ${props => props.size}px;

    border-radius: 27px;
    /* box-shadow: 2px 2px 2px ${props => props.theme.colors.text}; */
`;
