/** 
 * Card Component
 */

import { Box, HStack, Image, Text, VStack } from "native-base"
import overflow from "@fhrzdty31_/textoverflow"

const Card = ({
    data
}) => {
    if (data) return (
        <Box m={"1"}>
            <HStack p={"2"} shadow={"2"} borderRadius={"xl"} bg="white">
                <Image source={{ uri: data.photo }} w={90} h={120} rounded={"xl"} alt={data.name} resizeMode={"cover"} />
                <VStack ml={"4"} display={"flex"} flexWrap={"nowrap"}>
                    <Text fontSize={"lg"} fontWeight={"bold"} mb={"1"}>{data.name}</Text>
                    <Text w={180}>{overflow(data.bio, true, 12)}</Text>
                </VStack>
            </HStack>
        </Box>
    )
}

export default Card