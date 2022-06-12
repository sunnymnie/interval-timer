
import {
    Box,
    Center,
    Circle,
    Flex,
    Button,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Spacer,
    Text,
    useColorModeValue,
    IconButton,
    Input,
    HStack
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { IoPencil, IoChevronDown, IoChevronUp, IoTrashBinOutline } from 'react-icons/io5'

export default function Task({ task, index, changePlan, deletePlan }) {
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
        <Popover placement='right-start' trigger="hover">
            <PopoverTrigger>
                < Box my="2" key={index} bg={right} rounded="md" >
                    <Flex >
                        <Box bg={left} px="4" py="4" rounded="md">
                            <Text>
                                {task.get("name")}</Text>
                        </Box>
                        <Spacer />
                        <Center mx="4" py="4">
                            {progress.map((e, i) => {
                                return (<Circle size="5" key={i} bg={e === 1 ? circleFull : circleEmpty} ml="1" />)
                            })}
                        </Center>
                    </Flex>
                </Box >
            </PopoverTrigger>
            <PopoverContent border="0" shadow="0" bg="0">
                <HStack spacing="2">
                    {/* <IconButton
                        icon={<IoPencil />}
                    /> */}
                    <IconButton
                        icon={<IoChevronUp />}
                        disabled={task.get("length") > 9}
                        onClick={() => changePlan(index, "length", task.get("length") + 1)}
                    />
                    <IconButton
                        icon={<IoChevronDown />}
                        disabled={task.get("length") - 1 <= task.get("progress")}
                        onClick={() => changePlan(index, "length",
                            task.get("length") - 1)}
                    />
                    <IconButton
                        icon={<IoTrashBinOutline />}
                        disabled={task.get("progress") > 0}
                        onClick={() => deletePlan(index)}
                    />

                </HStack>
            </PopoverContent>
        </Popover>
    )
}