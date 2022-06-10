
import { Box, Center, Circle, Flex, HStack, Spacer, Text, useColorModeValue } from "@chakra-ui/react"
export default function Task({ task, bg, index }) {
    const circleEmpty = useColorModeValue('gray.400', 'gray.800')
    const circleFull = useColorModeValue('white', 'gray.300')
    let b = useColorModeValue('gray.300', 'gray.700')
    let c = useColorModeValue('gray.200', 'gray.600')
    // if (task.get("progress") === task.get("length")) {
    //     b = useColorModeValue('gray.300', 'gray.700')
    // }
    let progress = new Array(task.get("length")).fill(0)

    for (let i = 0; i < task.get("progress"); i++) {
        progress[i] = 1
    }
    console.log(`key = ${index} e = ${progress}`)

    return (
        < Box my="2" key={index} bg={b} rounded="md" >
            <Flex >
                <Box bg={c} px="4" py="4" rounded="md">
                    <Text>{task.get("name")}</Text>
                </Box>
                <Spacer />
                <Center mx="4" py="4">
                    {/* <Text>Progress: {task.get("progress")}/{task.get("length")}</Text> */}
                    {progress.map((e, i) => {
                        return (<Circle size="5" key={i} bg={e === 1 ? circleFull : circleEmpty} ml="1" />)
                    })}
                    {/* <Circle size="5" bg='gray.300' ml="1" />
                    <Circle size="5" bg='gray.800' ml="1" /> */}
                </Center>
            </Flex>
        </Box >
    )
}