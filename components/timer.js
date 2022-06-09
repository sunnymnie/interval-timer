import { Heading } from "@chakra-ui/react"


const Timer = ({ heading, children }) => {
    return (
        <div>
            <Heading as="h3" variant="section-title">{heading}</Heading>
            {children}
        </div>
    )
}

export default Timer