import { Box, Container, IconButton, useColorModeValue } from "@chakra-ui/react"
import { IoAddCircleOutline } from "react-icons/io5"


export default function TaskList({ tasks, adding, startAdding, children }) {
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
                        color={useColorModeValue("gray.400", "gray.600")}
                    />
                </Box>}
        </Container >
    )
}