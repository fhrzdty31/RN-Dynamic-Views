/** 
 * Card View Component
 */

import { VStack } from "native-base"

import Card from "../contents/Card"

const CardView = ({
    data
}) => {
    return (
        <VStack mb={"5"}>
            {
                data && data.map(
                    (item, index) => (
                        <Card key={index} data={item}/>
                    )
                )
            }
        </VStack>
    )
}

export default CardView