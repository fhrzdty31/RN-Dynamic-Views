/** 
 * List View Component
 */

import { Box, VStack } from "native-base"
import List from "../contents/List"

const ListView = ({
    data
}) => {
    return (
        <VStack mb={"5"}>
            {
                data && data.map(
                    (item, index) => (
                        <Box key={index} borderBottomWidth={index != (data.length - 1) ? "1" : "0"} borderBottomColor={"gray.300"}>
                            <List data={item} />
                        </Box>
                    )
                )
            }
        </VStack>
    )
}

export default ListView