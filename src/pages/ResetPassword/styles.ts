import styled from 'styled-components';
import { FaCheck as FaCheckBase } from 'react-icons/fa';
import { ButtonMain as ButtonMainBase } from '../../components';
import { Colors, Spacings } from '../../utils';

const { large, medium, huge, insane, small, short } = Spacings;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  padding: ${medium}px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.light?.primary.main};
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  max-width: 400px;
  padding: ${huge}px;
  background-color: ${Colors.light?.text.lighter};

  box-shadow: 3px 4px 13px rgba(0, 0, 0, 0.19);
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin: ${medium}px 0;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const InstructionsWrapper = styled.div`
  display: flex;
  margin-top: ${large}px;
`;

export const Text = styled.p`
  max-width: 340px;
  text-align: center;
`;

export const InputWrapper = styled.div`
  margin-top: ${insane}px;
`;

export const IconWrapper = styled.div`
  margin: ${large}px 0;
`;

export const FaCheck = styled(FaCheckBase).attrs({
  size: 40,
})`
  color: ${Colors.light?.success};
`;

export const TextFieldWrapper = styled.div`
  display: flex;
  margin: ${short}px 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin: ${insane}px 0 ${small}px 0;
`;

export const ButtonMain = styled(ButtonMainBase)`
  background-color: ${Colors.light?.text.darker};
`;
