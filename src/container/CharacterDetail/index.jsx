import React, { useEffect , useState } from 'react'
import Accordion from '../../components/UI/Accordion'
import Badge from '../../components/UI/Badge'
import Paper from '../../components/UI/Paper'
import Card from '../../components/widgets/Card'
import LocationCard from '../../components/widgets/LocationCard'
import { getRequestMethod } from '../../services/httpService'
import classes from "./index.module.scss"
import {useLocation} from "react-router-dom"


export default function CharacterDetail() {
const [characterDetail , setCharacterDetail] = useState("")
const [episodes, setEpisodes] = useState([])
const [location,setLocation] = useState({})

  const queryParams = useLocation().search;   
  const CHARACTER_ID = new URLSearchParams(queryParams).get('id');






const stringifyEpisodeIDs = async (result , key)=> {
  return result?.data?.episode?.map((episode) => {
    const episodeID = episode.split("/")?.[5]
    return episodeID;
  })
}

const stringifyLocationID = async (result , key)=> {
 return result.data.location.url.split("/")?.[5]
}


const onFetchCharacterAsync = async ()=>{ 
        const result = await getRequestMethod(`${process.env.REACT_APP_BASE_API_URL}/character/${CHARACTER_ID}`)
        setCharacterDetail(result?.data)
        const episodeIDs = await stringifyEpisodeIDs(result)
        const episodes = await getRequestMethod(process.env.REACT_APP_BASE_API_URL + "/episode/" + episodeIDs?.join(","))
        setEpisodes(episodes?.data);
        const locationID = await stringifyLocationID(result);
        const locationResponse = await getRequestMethod(`${process.env.REACT_APP_BASE_API_URL}/location/${locationID}`)
        setLocation(locationResponse?.data)

}

const renderEpisodes = episodes?.map(({episode , name , air_date , characters})=> {
  return  <Accordion className={classes.episode_accordions} title={`${episode} - ${name}`}>
  <Badge label={`air date: ${air_date}`} />
  <div className={classes.episode_characters}>Characters played in this episode: {characters?.length ?? 0}</div>
</Accordion>
})

useEffect(onFetchCharacterAsync, [])

  return (
    <div className={classes.character_detail_container}>
        <div className={classes.left_side_container}>
        <Card hasFooter={false} key={characterDetail?.id} thumbnail={characterDetail?.image} name={characterDetail?.name} status={characterDetail?.status} episodes={characterDetail?.episode?.length} location={characterDetail?.location?.name} bodyBadges={[characterDetail?.gender , characterDetail?.species]} />
        <LocationCard className={classes.location_card} location={location?.name} dimension={location?.dimension} type={location?.type} residentsCount={location?.residents?.length} />
        </div>
        <Paper className={classes.right_side_container}>
        <div className={classes.title}>List of Episodes</div>
        {renderEpisodes}
        </Paper>
    </div>
  )
}
