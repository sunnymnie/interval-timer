
import { Box, Center, Circle, Flex, HStack, Spacer, Text, useColorModeValue } from "@chakra-ui/react"
export default function Task({ task, bg, index }) {
    const circleEmpty = useColorModeValue('gray.400', 'gray.800')
    const circleFull = useColorModeValue('white', 'gray.300')
    let right = useColorModeValue('gray.300', 'gray.700')
    let left = useColorModeValue('gray.100', 'gray.600')


    let progress = [] // Do not use new Array(task.get("length").fill(0))
    for (let i = 0; i < task.get("length"); i++) {
        progress.push(0)
    }
    for (let i = 0; i < task.get("progress"); i++) {
        progress[i] = 1
    }

    return (
        < Box my="2" key={index} bg={right} rounded="md" >
            <Flex >
                <Box bg={left} px="4" py="4" rounded="md">
                    <Text>{task.get("name")}</Text>
                </Box>
                <Spacer />
                <Center mx="4" py="4">
                    {progress.map((e, i) => {
                        return (<Circle size="5" key={i} bg={e === 1 ? circleFull : circleEmpty} ml="1" />)
                    })}
                </Center>
            </Flex>
        </Box >
    )
}