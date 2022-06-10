import { Box } from "@chakra-ui/react"


export default function TaskList({ tasks, children }) {
    return (
        <Box>
            {tasks.map((task, i) => children(task, i))}
        </Box>
    )
}