import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import { getWatchlistElements } from '../../store/thunks/watchlist'
import { getTopPriceData } from '../../store/thunks/assets'
import { StyledAssetsTableBlock, StyledHeading, StyledRoot, StyledWatchlistHeading } from './styles'
import TopPriceComponent from '../../components/top-price'
import { ISingleAsset } from '../../common/types/assets'
import { IWatchlist } from '../../common/types/auth'

const WatchListPage: FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const watchlist = useAppSelector((state) => state.watchlist.assets)
    const { assets } = useAppSelector((state) => state.assets)

    useEffect(() => {
        dispatch(getTopPriceData())
        dispatch(getWatchlistElements())
    }, [dispatch])

    const filteredArray = assets.filter((element: ISingleAsset) => {
        return watchlist.some((otherElement: IWatchlist) => {
            return otherElement.assetId === element.id
        })
    })
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
