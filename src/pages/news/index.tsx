import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import { getNews } from '../../store/thunks/news';
import { Box, Grid, Link, Typography } from '@mui/material';
import { StyledRoot, StyledBlockTitle, StyledNewsBlock, StyledNewsTitle, StyledReadMore } from './styles';

const NewsPage: FC = (): JSX.Element => {
    const [newsItem, setNewsItem] = useState([]);
    const [offset, setOffset] = useState([0, 10]);
    const dispatch = useAppDispatch();
    const { news } = useAppSelector((state) => state.news);

    const handleChangeOffset = (offset: any) => {
        setOffset([offset[0], offset[1] + 10]);
    };

    useEffect(() => {
        setNewsItem(news.slice(offset[0], offset[1]));
    }, [news, offset]);

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    useEffect(() => {
        const handleScroll = (e: any) => {
            if (
                e.target.documentElement.scrollHeight -
                (e.target.documentElement.scrollTop + window.innerHeight) <
                100
            ) {
                handleChangeOffset(offset);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [offset]);


    const renderNewsBlock = newsItem.map((element: any) => (
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
