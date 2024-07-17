import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import { getFavoriteAssets, getTopPriceData } from '../../store/thunks/assets'
import { Grid } from '@mui/material'
import { StyledAssetsName, StyledCapitalize, StyledCardPrice, StyledCartItem, StyledItemsDetails, StyledLineChartBlock, StyledRootBox, StyledTopPriceRoot } from './styles'
import AreaChart from '../../components/charts/area-chart'
import LineChart from '../../components/charts/line-chart'
import { IChartData, ISingleAsset } from '../../common/types/assets/index'
import TopPriceComponent from '../../components/top-price'

const HomePage: FC = (): JSX.Element => {
    const favoriteAssets: IChartData[] = useAppSelector(state => state.assets.favoriteAssets);
    const assetsArray: ISingleAsset[] = useAppSelector(
        (state) => state.assets.assets,
    )

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

    const filteredAssetArray = assetsArray
        .slice()
        .sort((a, b) => b.current_price - a.current_price)

    useEffect(() => {
        if (fetchDataRef.current) return;
        fetchDataRef.current = true;
        fetchData(favoritesAssetsName);
        dispatch(getTopPriceData());
    }, [favoritesAssetsName, fetchData, dispatch]);

    const renderFavoriteBlock = filteredFavoritesAssetsName.map((item: IChartData) => {
        let currentPrice = 0;
        let changePrice = 0;
        let currentCap = 0;

        item.singleAsset.forEach((element: ISingleAsset) => {
            currentPrice = element.current_price;
            changePrice = element.price_change_percentage_24h;
            currentCap = element.market_cap
        });

        return (
            <Grid item xs={12} lg={6} md={6} key={item.name}>
                <StyledCartItem container >
                    <Grid item xs={12} lg={6} md={6}>
                        <StyledAssetsName>{item.name}</StyledAssetsName>
                        <StyledItemsDetails>
                            <StyledCardPrice>${currentPrice}</StyledCardPrice>
                            <StyledCapitalize><span style={{
                                color: changePrice > 0 ? '#00ff00' : '#FF0000'
                            }}>{changePrice.toFixed(1)}%</span> ${currentCap}</StyledCapitalize>
                        </StyledItemsDetails>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6}>
                        <AreaChart data={item.price_chart_data} />
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
            <StyledTopPriceRoot container>
                <Grid item xs={12} sm={12} lg={12}>
                    {filteredAssetArray.length && <TopPriceComponent assets={filteredAssetArray.slice(0, 10)} />}
                </Grid>
            </StyledTopPriceRoot>
        </StyledRootBox>
    )
}

export default HomePage
