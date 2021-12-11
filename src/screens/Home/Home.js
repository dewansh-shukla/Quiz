import { Button, Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
  main: {},
})
function Home() {
  const classes = useStyles()
  return (
    <>
      <Container
        fluid
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection: 'column',
        }}
        className={classes.main}
      >
        <Typography
          align='center'
          gutterBottom={true}
          variant='h2'
          sx={{
            fontWeight: 900,
            color: '#041C32',
            fontSize: '2rem',
            fontFamily: `'Readex Pro', sans-serif`,
          }}
        >
          Welcome To The Quiz Game
        </Typography>
        <Button
          variant='outlined'
          color='info'
          sx={{
            marginTop: 2,
            borderRadius: 5,
            borderColor: 'lightblue',
            border: 1.5,
          }}
          onClick={(event) => (window.location.href = '/quiz')}
        >
          Click To Play
        </Button>
      </Container>
    </>
  )
}

export default Home
