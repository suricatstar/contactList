import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
    padding: 20px;
  }

  h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #2c3e50;
    font-size: 2.5rem;
  }

  h2 {
    color: #34495e;
    margin-bottom: 20px;
    font-size: 1.8rem;
  }

  h3 {
    color: #2c3e50;
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    background: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    margin-right: 10px;
    margin-bottom: 10px;
    transition: all 0.3s ease;

    &:hover {
      background: #2980b9;
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  button[type="button"] {
    background: #95a5a6;

    &:hover {
      background: #7f8c8d;
    }
  }

  form {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  input {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    font-size: 16px;
    margin-bottom: 15px;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #3498db;
    }

    &::placeholder {
      color: #95a5a6;
    }
  }

  div {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;