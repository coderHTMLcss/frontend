import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import { getFavoriteAssets } from '../../store/thunks/assets'
import { Grid } from '@mui/material'
import { StyledAssetsName, StyledCapitalize, StyledCardPrice, StyledCartItem, StyledItemsDetails, StyledRootBox } from './styles'
import AreaChart from '../../components/charts/area-chart'

const Home: FC = (): JSX.Element => {
    const favoriteAssets: any[] = useAppSelector(state => state.assets.favoriteAssets)
    const dispatch = useAppDispatch();
    const fetchDataRef = useRef(false);


    const favoritesAssetsName = useMemo(() => ['bitcoin', 'ethereum'], []);
    const filteredFavoritesAssetsName = favoriteAssets.filter((value, index, self) =>
        index === self.findIndex((t) => t.name === value.name));

    const fetchData = useCallback((data: string[]) => {
        data.forEach((item: string) => {
            dispatch(getFavoriteAssets(item))
        })
    }, [dispatch])

    useEffect(() => {
        if (fetchDataRef.current) return
        fetchDataRef.current = true
        fetchData(favoritesAssetsName)
    }, [favoritesAssetsName, fetchData]);

    const renderFavoriteBlock = filteredFavoritesAssetsName.map((item: any) => {
        const currentPrice = item.data.prices[0];
        const currentCap = item.data.market_caps[0];
        return (
            <Grid item xs={12} lg={6} md={6} key={item.name}>
                <StyledCartItem container >
                    <Grid item xs={12} lg={6} md={6}>
                        <StyledAssetsName>{item.name}</StyledAssetsName>
                        <StyledItemsDetails>
                            <StyledCardPrice>${currentPrice[1].toFixed(4)}</StyledCardPrice>
                            <StyledCapitalize>${currentCap[1].toFixed(0)}</StyledCapitalize>
                        </StyledItemsDetails>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6}>
                        <AreaChart data={item.data.prices} />
                        <h5>Chart</h5>
                    </Grid>
                </StyledCartItem>
            </Grid>
        )
    })

    return (
        <StyledRootBox>
            <Grid container spacing={2}>
                {renderFavoriteBlock}
            </Grid>
        </StyledRootBox>
    )
}

export default Home
