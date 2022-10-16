import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from './features/store/store'
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#126FA4',
        },
        secondary: {
            main: '#3A444C'
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <StyledEngineProvider injectFirst>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <App />
                    </ThemeProvider>
                </BrowserRouter>
            </StyledEngineProvider>
        </React.StrictMode>
    </Provider>
);