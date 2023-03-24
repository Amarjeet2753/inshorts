import React from 'react'
import { Box,styled} from '@mui/material'

import { useEffect } from 'react'
import { getNews } from '../service/api'

const Articles = () => {
  
    useEffect(()=>{
        dailyNews();
    },[]);

    const dailyNews = async ()=>{
        let response =await getNews();
    }

  return (
    <Box>Articles</Box>
  )
}

export default Articles