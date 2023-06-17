/** 
 * List Component
 */

import { Box, HStack, Image, Text, VStack } from "native-base"
import overflow from "@fhrzdty31_/textoverflow"

const List = ({
    data
}) => {
    if (data) return (
        <Box my={"2"}>
            <HStack alignItems={"center"}>
                <Image source={{ uri: data.photo }} w={55} h={55} rounded={"full"} alt={data.name} resizeMode={"cover"} />
                <VStack ml={"3"}>
                    <Text fontSize={"lg"} fontWeight={"bold"} mb={"1"}>{data.name}</Text>
                    <Text display={"flex"} flexWrap={"nowrap"}>{overflow(data.bio, true, 4)}</Text>
                </VStack>
            </HStack>
        </Box>
    )
}

export default List