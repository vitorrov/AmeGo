import { Animated } from "react-native";
import styled from "styled-components/native";

import { rgba } from "polished";
import { LinearGradient } from "expo-linear-gradient";

import input from "@components/Input";
import button from "@components/Button";

// scrollView
export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.background};
  /* justify-content: center; */
  /* align-items:center; */
`;

export const Content = styled(Animated.View)`
  flex: 1;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 35%;
`;

export const Header = styled(Animated.View)`
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export const Img = styled(Animated.Image)`
  width: 280px;
  height: 280px;

  /* resize-mode: contain; */
`;

export const FormContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-bottom: 100px;

  background: ${({ theme }) => theme.colors.background};
`;

export const Form = styled(LinearGradient).attrs((props) => ({
  colors: [props.theme.colors.tertiary, "transparent"],
}))`
  width: 96%;
  height: 100%;
  padding-top: 15%;
  /* margin-top: 10%; */

  border-top-left-radius: 28px;
  border-top-right-radius: 28px;

  /* justify-content: center;  */
  align-items: center;
`;

export const Input = styled(input).attrs((props) => ({
  labelColor: props.theme.colors.secundary,
}))``;

export const Button = styled(button).attrs((props) => ({
  labelColor: props.theme.colors.secundary,
}))``;
