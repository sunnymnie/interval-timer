import { Box, Container, Input, Button, Flex, HStack, Spacer, Text, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'


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
                                <IconButton
                                    mx="2"
                                    onClick={() => setLength(Number(length) + 1)}
                                    disabled={Number(length) > 9}
                                    icon={<IoChevronUp />} />
                                <IconButton
                                    onClick={() => setLength(Number(length) - 1)}
                                    disabled={Number(length) < 2}
                                    icon={<IoChevronDown />} />
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