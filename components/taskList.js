import { Box, Container, IconButton, useColorModeValue } from "@chakra-ui/react"
import { IoAddCircleOutline } from "react-icons/io5"


export default function TaskList({ tasks, adding, startAdding, children }) {
    const addingColor = useColorModeValue("gray.400", "gray.600")
    return (
        <Container>
            <Box>
                {tasks.map((task, i) => children(task, i))}
            </Box>
            {!adding &&
                <Box >
                    <IconButton
                        bg=""
                        icon={<IoAddCircleOutline />}
                        onClick={startAdding}
                        color={addingColor}
                    />
                </Box>}
        </Container >
    )
}