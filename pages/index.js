import { Box, Button, Container, Input, Select, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import useCountdown from '@components/useCountdown'
import { audioPlayer } from '@components/audioPlayer';
import TaskList from '@components/taskList';
import Task from '@components/task';
import { formatTime } from '@components/helpers';
import AddCard from '@components/addCard';
import Navbar from '@components/navbar';


export default function Home() {

  const [plan, setPlan] = useState([])
  const [mode, setMode] = useState("work")
  const [addingTasks, setAddingTasks] = useState(true)

  const lengths = {
    work: 25 * 60,
    break: 5 * 60,
    longBreak: 40 * 60
  }

  const startJourney = () => {
    setAddingTasks(false)
    start()
  }

  const newBlock = (n, l, p, s) => {
    let block = new Map()
    block.set("name", n)
    block.set("length", l)
    block.set("progress", p)
    return block
  }

  const addToPlan = (name, length) => {
    setPlan([...plan, newBlock(name, length, 0)])
  }

  const updateProgress = () => {
    let newPlan = []
    let changed = false
    plan.forEach(e => {
      if (!changed && e.get("progress") < e.get("length")) {
        e.set("progress", e.get("progress") + 1)
        changed = true
      }
      newPlan.push(e)
    })
    return newPlan
  }

  const getCurrBreak = (plan) => {
    for (let i = 0; i < plan.length; i++) {
      if (plan[i].get("progress") < plan[i].get("length")) {
        if (plan[i].get("progress") === 0) {
          console.log("setting longbreak")
          return "longBreak"
        } else {
          console.log("setting break")
          return "break"
        }
      }
    }
    return "finish"
  }
  const next = useCallback(() => {
    // debugger
    console.log(`mode is currently ${mode}`)
    if (mode === "work") {
      let newPlan = updateProgress()
      setMode(getCurrBreak(newPlan))
      setPlan(newPlan)
    } else {
      setMode("work")
    }

  })

  const [breakSound, setBreakSound] = useState(null)
  const [startSound, setStartSound] = useState(null)


  useEffect(() => {
    setBreakSound(new Audio('/sounds/end.mp3')) // only call client
    setStartSound(new Audio('/sounds/start.mp3'))

  }, [])

  useEffect(() => {
    if (plan.length > 0) {
      mode !== "finish" && reset(lengths[mode])
      if (mode === "work") {
        startSound.play()
      } else {
        breakSound.play()
      }
    }
  }, [mode])

  const finish = () => {
    next()
  }
  const { ticking, start, stop, reset, timeLeft, progress } = useCountdown({
    seconds: lengths[mode],
    onStart: () => {
      // updateFavicon(mode);
      console.log('started')
    },
    onStop: () => {
      // updateFavicon();
      console.log('ended')
    },
    onComplete: () => {
      next();
      // alarmAudio.play();
      console.log('completed')
    },
  });

  return (
    <div className="HEader">
      <Navbar />
      <Head>
        <title>{ticking && formatTime(timeLeft) + " Interval Timer"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        pt="10"
        align="center"
        justify="space-between">
        <Box>
          <Text fontSize="xl">Currently {mode}</Text>
        </Box>
        <Box>
          <Text fontSize="6xl">{formatTime(timeLeft)}</Text>
        </Box>
        {addingTasks ?
          <Button onClick={startJourney} disabled={plan.length === 0}>
            Start Journey
          </Button>
          :
          <Container>
            <Button onClick={ticking ? stop : start}>
              {ticking ? "Stop" : "Start"}
            </Button>
            <Button onClick={finish}>
              Finish
            </Button>
          </Container>
        }
      </Container>

      <Container
        pt="10"
        align="center"
      >
        <AddCard show={addingTasks} add={addToPlan} />
        <TaskList tasks={plan}>
          {(task, i) => {
            return (
              <Task task={task} bg={bg} index={i} key={i} />
            )
          }}
        </TaskList>
      </Container>



    </div >
  )
}
