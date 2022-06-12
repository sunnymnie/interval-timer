import { Box, Container, Text, Button } from "@chakra-ui/react"

import { formatTime } from '@components/helpers';



export default function TimerUI({ mode, timeLeft, startJourney, plan, ticking, stop, start, finish, addingTasks }) {
    const currentTask = () => {
        return plan.filter(e => e.get("progress") < e.get("length"))[0].get("name")
    }

    const status = () => {
        if (mode === "work") {
            if (plan.length < 1) {
                return "Setting up tasks"
            }
            return `Currently working on ${currentTask()}`
        } else if (mode === "break") {
            return "Currently taking a short break"
        } else if (mode === "longBreak") {
            return "Currently taking a long break"
        }
    }
    return (
        <Container
            pt="10"
            align="center"
            justify="space-between">
            <Box>
                <Text fontSize="xl">{status()}</Text>
            </Box>
            <Box>
                <Text fontSize="6xl">{timeLeft}</Text>
            </Box>
            {addingTasks ?
                <Button onClick={startJourney} disabled={plan.length === 0}>
                    Start Journey
                </Button>
                :
                <Container>
                    <Button onClick={ticking ? stop : start} disabled={mode === "finish"} mr="4">
                        {ticking ? "Stop" : "Start"}
                    </Button>
                    <Button onClick={finish} disabled={mode === "finish"}>
                        End
                    </Button>
                </Container>
            }
        </Container>
    )
}