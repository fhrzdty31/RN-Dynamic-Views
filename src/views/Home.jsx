/**
 * Home View 
 */

import { useState } from "react"
import { Box, ScrollView } from "native-base"

import data from '../data/data.json'

import Navigation from "../components/layouts/Navigation"
import ListView from "../components/screens/ListView"
import GridView from "../components/screens/GridView"
import CardView from "../components/screens/CardView"

const Home = () => {

    const [view, setView] = useState("list")

    return (
        <>
        <Navigation view={view} setView={setView} />
        <Box borderTopWidth={"1"} mt={"3"} mx={"1"} p={"3"}>
            <ScrollView p={"2"} h={"92%"}>
                {
                    view == "list" ? (
                        <ListView data={data} />
                    ) : view == "grid" ? (
                        <GridView data={data} />
                    ) : view == "card" && (
                        <CardView data={data} />
                    )
                }
            </ScrollView>
        </Box>
        </>
    )
}

export default Home