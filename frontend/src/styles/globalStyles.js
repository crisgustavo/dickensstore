// globalStyles.ts
import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: none;
    font-family: 'Poppins', sans-serif;
  }
  
  button {
    cursor: pointer;
  }

  // ========== CUSTOMIZAÇÕES MUI ==========

  // FormControl
  .MuiFormControl-root {
    height: 30px !important;
    width: 100%;
    margin: 8px 0;
  }

  // InputLabel (para OutlinedInput)
  .MuiInputLabel-root {
    color: #fff !important;
    font-size: 12px;
    font-weight: 500;
    top: -12px !important;
    
    
    &.Mui-focused {
      color: #fff !important;
      top: 0 !important;
    }
    
    &.Mui-error {
      color: #d32f2f !important;
      top: 0 !important;
    }

    &.MuiInputAdornment-positionStart {
      top: 0;
    }
  }

  .MuiOutlinedInput-root {
    background-color: #8e8e8ed7;
    border-radius: 8px;
    height: 30px;

    &:hover {
      background-color: #8e8e8ed7;
    }
    
    &.Mui-focused {
      background-color: #8e8e8ed7;
      transform: '';
    }
    
    // Campo de input
    .MuiOutlinedInput-input {
      color: #fff;
      display: flex;
      padding: 20px 12px;
      font-size: 12px;
      
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
        opacity: 0.5;
      }
    }
    
    // Borda do OutlinedInput
    .MuiOutlinedInput-notchedOutline {
      border-color: #fff !important;
    }
    
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #fff !important;
      border-width: 2px !important;
      box-shadow: 0px 0px 10px 1px #FFF;
    }
    
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #fff !important;
      border-width: 2px !important;
    }
    
    // Estado de erro
    &.Mui-error .MuiOutlinedInput-notchedOutline {
      border-color: #d32f2f;
    }
    
    .MuiOutlinedInput-input.Mui-disabled {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  // InputAdornment
  .MuiInputAdornment-root {    
    &.MuiInputAdornment-positionEnd {
      margin-left: 8px;

      .MuiSvgIcon-root {
        color: #fff !important;
        font-size: 25px;
        cursor: pointer;

      }
    }
    
    &.MuiInputAdornment-positionStart {
      margin-right: 8px;

      .MuiSvgIcon-root {
        color: #fff !important;
        font-size: 30px;
        cursor: pointer;
      }
    }

  }
`;

export default globalStyles;
