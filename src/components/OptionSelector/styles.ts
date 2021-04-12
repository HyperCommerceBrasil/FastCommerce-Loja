import styled from 'styled-components';
import {
  Select as SelectBase,
  FormControl as FormControlBase,
} from '@material-ui/core';
import { Colors } from '../../utils/theme';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;

  .MuiFormControl-root:after {
    color: ${Colors.light?.primary.main};
    border-color: ${Colors.light?.primary.main};
  }

  .MuiFormControl-root {
    color: ${Colors.light?.primary.main};
    border-color: ${Colors.light?.primary.main};
  }

  .MuiOutlinedInput-root {
    color: ${Colors.light?.primary.main};
    border-color: ${Colors.light?.primary.main};
  }

  .MuiSelect-outlined {
    color: ${Colors.light?.primary.main};
    border-color: ${Colors.light?.primary.main};
  }

  .MuiFormLabel-root.Mui-focused {
    color: ${Colors.light?.primary.main};
    border-color: ${Colors.light?.primary.main};
  }
  .MuiInput-underline:after {
    color: ${Colors.light?.primary.main};
    border-color: ${Colors.light?.primary.main};
  }
  .MuiOutlinedInput-root {
    color: ${Colors.light?.primary.main};
    border-color: ${Colors.light?.primary.main};
  }
`;

export const FormControl = styled(FormControlBase).attrs({
  fullWidth: true,
})`
  .MuiOutlinedInput-root {
    border-color: ${Colors.light?.primary.main};
  }
`;

export const Select = styled(SelectBase)`
  border-color: ${Colors.light?.primary.main};
  .Mui-focused:after {
    border-color: ${Colors.light?.primary.main};
  }

  .MuiSelect-outlined:focus {
    border-color: ${Colors.light?.primary.main};
  }

  .MuiOutlinedInput-root {
    border-color: ${Colors.light?.primary.main};
  }

  .MuiInput-underline:after {
    border-color: ${Colors.light?.primary.main};
  }
`;

export const Option = styled.option``;
