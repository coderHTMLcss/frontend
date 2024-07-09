import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import { getFavoriteAssets } from '../../store/thunks/assets'
import { Grid } from '@mui/material'
import { StyledAssetsName, StyledCapitalize, StyledCardPrice, StyledCartItem, StyledItemsDetails, StyledLineChartBlock, StyledRootBox } from './styles'
import AreaChart from '../../components/charts/area-chart'
import LineChart from '../../components/charts/line-chart'
import { IChartData } from '../../common/types/assets/index'

const Home: FC = (): JSX.Element => {
    const favoriteAssets: IChartData[] = useAppSelector(state => state.assets.favoriteAssets);
    // const assetsArray: any = useAppSelector(
    //     (state) => state.assets.assets,
    // )
    const dispatch = useAppDispatch();
    const fetchDataRef = useRef(false);


    const favoritesAssetsName = useMemo(() => ['bitcoin', 'ethereum'], []);
    const filteredFavoritesAssetsName = favoriteAssets.filter((value, index, self) =>
        index === self.findIndex((t) => t.name === value.name));

    const fetchData = useCallback((data: string[]) => {
        data.forEach((item: string) => {
            dispatch(getFavoriteAssets(item))
        })
    }, [dispatch]);

    // const filteredAssetArray = assetsArray
    //     .slice()
    //     .sort((a, b) => b.current_price - a.current_price)

    useEffect(() => {
        if (fetchDataRef.current) return
        fetchDataRef.current = true
        fetchData(favoritesAssetsName)
    }, [favoritesAssetsName, fetchData]);

    const renderFavoriteBlock = filteredFavoritesAssetsName.map((item: any) => {
        const currentPrice = item.singleAsset.map((el: any) => el.current_price);
        const currentCap = item.singleAsset.map((el: any) => el.market_cap);
        const changePrice = item.singleAsset.map((el: any) => el.price_change_percentage_24h);

        return (
            <Grid item xs={12} lg={6} md={6} key={item.name}>
                <StyledCartItem container >
                    <Grid item xs={12} lg={6} md={6}>
                        <StyledAssetsName>{item.name}</StyledAssetsName>
                        <StyledItemsDetails>
                            <StyledCardPrice>${currentPrice}</StyledCardPrice>
                            <StyledCapitalize><span style={{
                                color: changePrice > 0 ? '#green' : '#red'
                            }}>{Number(changePrice).toFixed(1)}%</span> ${currentCap}</StyledCapitalize>
                        </StyledItemsDetails>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6}>
                        <AreaChart data={item.price_chart_data} />
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
            <StyledLineChartBlock container>
                <Grid item xs={12} sm={12} lg={12}>
                    {filteredFavoritesAssetsName.length && <LineChart data={filteredFavoritesAssetsName} />}
                </Grid>
            </StyledLineChartBlock>
        </StyledRootBox>
    )
}

export default Home
