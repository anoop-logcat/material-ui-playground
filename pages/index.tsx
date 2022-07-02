import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { ThemeProvider,Button } from '@mui/material';

const Home: NextPage = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <main className="app">
          <div className="w-full h-screen flex flex-col items-center justify-start">
            <Button color="primary" variant="contained">Hello World</Button>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Home
