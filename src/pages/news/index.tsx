import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import { getNews } from '../../store/thunks/news';
import { Box, Grid, Link, Typography } from '@mui/material';
import { StyledRoot, StyledBlockTitle, StyledNewsBlock, StyledNewsTitle, StyledReadMore } from './styles';

const NewsPage = () => {
    const dispatch = useAppDispatch();
    const { news } = useAppSelector((state) => state.news)

    useEffect(() => {
        dispatch(getNews())
    }, [])

    const renderNewsBlock = news.map((element: any) => (
        <StyledNewsBlock container key={element.id}>
            <Grid item xs={12} md={3}>
                <img src={element.imageurl} alt={element.category} />
            </Grid>
            <Grid item xs={12} md={9}>
                <StyledNewsTitle>
                    <Typography variant="h3">{element.title}</Typography>
                </StyledNewsTitle>
                <Box>
                    <Typography variant="body1">{element.body}</Typography>
                </Box>
            </Grid>
            <StyledReadMore item xs={12} md={12} >
                <Typography variant="h4">
                    <Link href={element.url}>Read more</Link>
                </Typography>
            </StyledReadMore>
        </StyledNewsBlock>
    ))

    return (
        <StyledRoot>
            <StyledBlockTitle>
                <Typography variant="h2">Новости</Typography>
            </StyledBlockTitle>
            <Grid>{renderNewsBlock}</Grid>
        </StyledRoot>
    )
}

export default NewsPage
