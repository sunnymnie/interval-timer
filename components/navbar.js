import { Box, Button, Container, Heading, IconButton, Spacer, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
export default function Navbar() {
    const { toggleColorMode } = useColorMode()

    return (
        < Box as="nav" w="100%" align="center">
            <Container
                display="flex"
                maxW="container.md"
                w="40%"
                my="2"
                wrap="wrap"
            >
                <Heading size="md" color={useColorModeValue("gray.600", "gray.200")}>
                    Interval Timer
                </Heading>
                <Spacer />
                <IconButton size='sm' onClick={toggleColorMode} icon={useColorModeValue(<IoMoonOutline />, <IoSunnyOutline />)}></IconButton>
            </Container>
        </Box >
    )
}