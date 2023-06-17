/** 
 * List View Component
 */

import { Flex, Image, Box, Text  } from "native-base"

const GridView = ({
    data
}) => {

    return (
        <Flex direction={"row"} wrap={"wrap"} mb={"5"}>
            {
                data && data.map(
                    (item, index) => (
                        <Box key={index} positon={"relative"} p={1} flexBasis="50%">
                            <Image source={{ uri: item.photo }} h={200} resizeMode="cover" alt={item.name}/>
                            <Box position={"absolute"} bg={"gray.400"} bottom={"3"} left={"2"} px={"1"} rounded={"md"}>
                                <Text color={"white"} fontWeight={"bold"}>{item.name}</Text>
                            </Box>
                        </Box>
                    )
                )
            }
        </Flex>
    )
}

export default GridView