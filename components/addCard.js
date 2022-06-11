import { Box, Container, Input, Button, Flex, HStack, Spacer, Text, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react"

export default function AddCard({ show, add }) {

    const [name, setName] = useState("")
    const [length, setLength] = useState(1)


    const addToPlan = () => {
        add(name, length)
        setName("")
        // setLength(1)
    }


    return (
        <Container>
            {show ?
                <Container>
                    < Box
                        justify="space-between"
                        // bg="white"
                        py="6"
                    // display="flex" 
                    >
                        <Box mx="4" align="left">
                            <Input
                                variant="flushed"
                                onChange={(event) => setName(event.target.value)}
                                placeholder='Name of workout'
                                value={name}></Input>
                            {/* <Spacer my="4" /> */}
                            <Text mt="4" mb="2" align="left">Number of Blocks</Text>
                            <Flex>
                                <Input
                                    onChange={(event) => setLength(event.target.value)}
                                    value={length}
                                    variant="flushed"
                                    width="2em"></Input>
                                <Button
                                    mx="2"
                                    onClick={() => setLength(Number(length) + 1)}
                                    disabled={Number(length) > 9}>+1</Button>
                                <Button
                                    onClick={() => setLength(Number(length) - 1)}
                                    disabled={Number(length) < 2}>-1</Button>
                                <Spacer />
                                <Button onClick={addToPlan} disabled={length === "" | !!!Number.isInteger(Number(length)) || length > 10 || name === ""}>
                                    Add to plan
                                </Button>
                            </Flex>
                        </Box>
                    </Box >

                </Container>
                :
                <></>
            }
        </Container >
    )
}