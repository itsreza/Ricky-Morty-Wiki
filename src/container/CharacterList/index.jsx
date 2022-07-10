import React , {useState } from 'react'
import Card from '../../components/widgets/Card';
import CardSkeleton from '../../components/widgets/CardSkeleton';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { getRequestMethod } from '../../services/httpService';

import classes from "./index.module.scss"

export default function CharacterList() {
    const INITIAL_CHARACTER_STATE = {meta : { next : process.env.REACT_APP_BASE_API_URL + "/character" } , results : []}

    const [character , setCharacter] = useState(INITIAL_CHARACTER_STATE)
    const [isFetchingAllPage , setIsFetchingAllPage] = useState(false)
    const [isFetching, setIsFetching] = useInfiniteScroll(handleGetCharacters);


    const onSuccessGetCharacters = (response)=> {
      const nextPage = response?.data?.info?.next
      setCharacter((prevState)=> ({meta : response?.data?.info , results : [...prevState.results , ...response.data.results]}))
      if(!nextPage){
        return setIsFetchingAllPage(true)
      }
      setIsFetching(false)
    }
    

    function handleGetCharacters() {
      getRequestMethod(character.meta.next).then(onSuccessGetCharacters)
      }
      
  
        const renderCharacter = character?.results?.map((character)=> {
          const {id ,image , name , status , episode , location, gender , species } = character;
          return <Card hasFooter={true} characterID={id} key={id} thumbnail={image} name={name} status={status} episodes={episode?.length} location={location?.name} bodyBadges={[gender , species]} />
       
        })

  return (
    <>
    <div className={classes.card_section}>
    {renderCharacter}
    {isFetching && !isFetchingAllPage && <div className={classes.loading}>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
      </div>}
      </div>
      {isFetchingAllPage && <div className={classes.finish_record}>All Character Has Been Fetched .. There is No More Record</div>}
    </>
  )
}
