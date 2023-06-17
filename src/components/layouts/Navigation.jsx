/** 
 * Header Component
 */

import { Box, Button, HStack, Text } from "native-base"

const Navigation = ({
    view,
    setView
}) => {

    const navigate = [
        {
            name: "list",
            view: "List View"
        },
        {
            name: "grid",
            view: "Grid View"
        },
        {
            name: "card",
            view: "Card View"
        }
    ]

    return (
        <Box mx={"10"} mt={"5"}>
            <HStack justifyContent={"space-between"}>
                {
                    navigate.map(
                        (nav, index) => (
                            <Button onPress={() => setView(nav.name)} key={index} variant="ghost" colorScheme="dark" rounded={"none"} borderBottomWidth={nav.name == view ? "2" : "0"}>
                                <Text fontWeight={"bold"}>{nav.view}</Text>
                            </Button>
                        )
                    )
                }
            </HStack>
        </Box>
    )
}

export default Navigation