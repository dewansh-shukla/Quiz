import {
  Container,
  Grid,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormHelperText,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import questions from '../config/questions.json'

const useStyles = makeStyles({
  main: {
    backgroundColor: `#331521`,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23D18'/%3E%3Cstop offset='1' stop-color='%23331521'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FF6464' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FF6464' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.5'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundAttachment: `fixed`,
    backgroundSize: `cover`,
  },
})
const genRandomSequence = (length = 0) => {
  let temp = []
  if (length > 0) {
    for (let i = 0; i < length; i++) {
      temp.push(i)
    }
    temp = temp.sort((a, b) => {
      if (Math.random() < Math.random()) {
        return -1
      } else {
        return 1
      }
    })
  }
  return temp
}
function Quiz() {
  const classes = useStyles()
  const [questionSeq] = useState(genRandomSequence(questions.length))
  const [quesNo, setQuesNo] = useState(questionSeq[0])
  const [questionCount, setQuestionCount] = useState(1)
  const [confirm, setConfirm] = useState(true)
  const [error, setError] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [helperText, setHelperText] = React.useState('Choose wisely')
  const [score, setScore] = useState(0)
  const handleRadioChange = (event) => {
    setValue(event.target.value)
    setError(false)
  }
  const handlesubmit = (event) => {
    event.preventDefault()
    console.log('Submitted')
    setConfirm(false)
    if (value === questions[quesNo].answer) {
      setHelperText('You got it! Yiiipppee')
      setScore(score + 1)
      setError(false)
    } else {
      setHelperText('Choose Correct Option')
      setError(true)
    }
  }
  return (
    <>
      <Grid container sx={{ height: '100vh' }} className={classes.main}>
        <Grid item lg md xs></Grid>
        <Grid
          item
          lg={8}
          md={8}
          xs={8}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            padding: '10px',
          }}
        >
          {questionCount - 1 < questions.length ? (
            <Container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '15rem',
                minWidth: '14rem',
                backgroundColor: 'white',
                borderRadius: 5,
                padding: 5,
              }}
            >
              <Container sx={{ padding: 0, marginLeft: 3 }}>
                <form id='myform' noValidate onSubmit={handlesubmit}>
                  <FormControl
                    component='fieldset'
                    variant='standard'
                    error={error}
                  >
                    <FormLabel component='legend'>
                      Ques {questionCount}
                      &nbsp;&nbsp; {questions[quesNo].questionText}
                    </FormLabel>

                    <RadioGroup
                      aria-label='quiz'
                      name='quiz'
                      value={value}
                      onChange={handleRadioChange}
                    >
                      <FormControlLabel
                        value={questions[quesNo].choices[0]}
                        control={<Radio />}
                        label={`${questions[quesNo].choices[0]}`}
                      />
                      <FormControlLabel
                        value={questions[quesNo].choices[1]}
                        control={<Radio />}
                        label={`${questions[quesNo].choices[1]}`}
                      />
                      <FormControlLabel
                        value={questions[quesNo].choices[2]}
                        control={<Radio />}
                        label={`${questions[quesNo].choices[2]}`}
                      />
                      <FormControlLabel
                        value={questions[quesNo].choices[3]}
                        control={<Radio />}
                        label={`${questions[quesNo].choices[3]}`}
                      />
                    </RadioGroup>
                    <FormHelperText sx={{ fontSize: '20px' }}>
                      {helperText}
                    </FormHelperText>

                    <Container
                      sx={{
                        display: 'flex',
                        padding: 0,
                      }}
                    >
                      <Button
                        variant='outlined'
                        type='submit'
                        size='small'
                        form='myform'
                        color='success'
                        sx={{ marginRight: '10px' }}
                      >
                        Confirm
                      </Button>
                      <Button
                        disabled={confirm}
                        fullWidth={false}
                        variant='outlined'
                        size='small'
                        color='secondary'
                        onClick={() => {
                          setQuestionCount(questionCount + 1)
                          setQuesNo(questionSeq[questionCount])
                          console.log(quesNo, questionSeq)
                          setConfirm(true)
                          setError(false)
                          setHelperText('Choose Wisely')
                        }}
                      >
                        Next
                      </Button>
                    </Container>
                  </FormControl>
                </form>
              </Container>
            </Container>
          ) : (
            <>
              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '15rem',
                  minWidth: '15rem',
                  backgroundColor: 'white',
                  alignItems: 'center',
                  borderRadius: 5,
                  padding: 5,
                }}
              >
                <Typography
                  variant='h4'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: `'Readex Pro', sans-serif`,
                    fontWeight: 900,
                    color: '#781D42',
                    fontSize: '1.5em',
                  }}
                >
                  Thank You For participating
                </Typography>
                <Typography
                  sx={{
                    marginTop: 3,
                    fontSize: 20,
                    fontWeight: '700',
                    fontFamily: 'monospace',
                  }}
                >
                  Your Score Was {score}/{questions.length}
                </Typography>
                <Typography
                  sx={{
                    marginTop: 6,
                    fontSize: 20,
                    fontWeight: '700',
                    fontFamily: 'monospace',
                  }}
                >
                  Made with ❤️ By Dewansh Shukla
                </Typography>
              </Container>
            </>
          )}
        </Grid>
        <Grid item lg md xs></Grid>
      </Grid>
    </>
  )
}

export default Quiz
