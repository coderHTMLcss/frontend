import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import { getWatchlistElements } from '../../store/thunks/watchlist'
import { getTopPriceData } from '../../store/thunks/assets'
import { StyledAssetsTableBlock, StyledHeading, StyledRoot, StyledWatchlistHeading } from './styles'
import TopPriceComponent from '../../components/top-price'

const WatchListPage = () => {
    const dispatch = useAppDispatch()
    const watchlist = useAppSelector((state) => state.watchlist.assets)
    const { assets } = useAppSelector((state) => state.assets)

    useEffect(() => {
        dispatch(getTopPriceData())
        dispatch(getWatchlistElements())
    }, [dispatch])

    const filteredArray = assets.filter((element: any) => {
        return watchlist.some((otherElement: any) => {
            return otherElement.assetId === element.id
        })
    })
    console.log(filteredArray)
    return (
        <StyledRoot >
            <StyledWatchlistHeading >
                <StyledHeading variant="h2" >
                    Favourites
                </StyledHeading>
            </StyledWatchlistHeading>
            <StyledAssetsTableBlock >
                <TopPriceComponent assets={filteredArray} />
            </StyledAssetsTableBlock>
        </StyledRoot>
    )
}

export default WatchListPage
