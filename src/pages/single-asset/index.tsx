import React, { FC, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { ISingleAsset } from '../../common/types/assets';
import { Alert, AlertColor, Snackbar, Typography } from '@mui/material';
import FlexBetween from '../../components/flexBetween';
import {
    StyledAssetIcon,
    StyledAssetName,
    StyledAssetPrice,
    StyledAssetSymbol,
    StyledCard,
    StyledCardButton,
    StyledCardButtonBlock,
    StyledCardItem,
    StyledCardTitle,
    StyledRoot,

} from './styles';
import { createWatchListRecord } from '../../store/thunks/assets';


const SingleAssetPage: FC = (): JSX.Element => {
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(false)
    const [severity, setSeverity] = useState<AlertColor>('success')
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const assetsArray: ISingleAsset[] = useAppSelector(
        (state) => state.assets.assets,
    );

    const asset = assetsArray.find(element => element.name === id);


    const handleCreateRecord = () => {
        try {
            const data = {
                name: '',
                assetId: '',
            }
            if (asset) {
                data.name = asset.name
                data.assetId = asset.id
            }
            dispatch(createWatchListRecord(data))
            setError(false)
            setSeverity('success')
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 2000)
        } catch (e) {
            setError(true)
            setSeverity('error')
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 2000)
        }
    }

    return (
        <>
            {asset && (
                <StyledRoot container>
                    <StyledAssetName item xs={12}>
                        <Typography variant="h1">{asset.name}</Typography>
                    </StyledAssetName>
                    <StyledCard item sm={6} xs={12}>
                        <StyledCardItem>
                            <FlexBetween>
                                <StyledAssetIcon
                                    src={asset.image}
                                />
                                <StyledAssetSymbol
                                    variant="h2"
                                >
                                    {asset.symbol.toUpperCase()}
                                </StyledAssetSymbol>
                            </FlexBetween>
                        </StyledCardItem>
                    </StyledCard>
                    <StyledCard item sm={6} xs={12}>
                        <StyledCardItem>
                            <FlexBetween>
                                <StyledCardTitle
                                    variant="h2"
                                >
                                    price: &nbsp;
                                </StyledCardTitle>
                                <StyledAssetPrice
                                    variant="h2"
                                >
                                    $ {asset.current_price}
                                </StyledAssetPrice>
                            </FlexBetween>
                        </StyledCardItem>
                    </StyledCard>
                    <StyledCard item sm={6} xs={12} >
                        <StyledCardItem container>
                            <StyledCardTitle
                                variant="h2"
                            >
                                Changes price: &nbsp;
                            </StyledCardTitle>
                            <Typography
                                variant="h2"
                                sx={{ color: asset.price_change_percentage_24h >= 0 ? '#A9FFA7' : '#FFA7A7' }}
                            >
                                $ {asset.price_change_24h.toFixed(4)}
                            </Typography>
                        </StyledCardItem>
                    </StyledCard>
                    <StyledCard item sm={6} xs={12}>
                        <StyledCardItem>
                            <StyledCardTitle
                                variant="h2"
                            >
                                Changes price in % :&nbsp;
                            </StyledCardTitle>
                            <Typography
                                variant="h2"
                                sx={{ color: asset.price_change_percentage_24h >= 0 ? '#A9FFA7' : '#FFA7A7' }}
                            >
                                $ {asset.price_change_percentage_24h.toFixed(2)}
                            </Typography>
                        </StyledCardItem>
                    </StyledCard>
                    <StyledCardButtonBlock
                        container
                        justifyContent="center"
                    >
                        <StyledCardButton
                            color="success"
                            variant="outlined"
                            onClick={() => navigate(-1)}
                        >
                            Go back
                        </StyledCardButton>
                        <StyledCardButton
                            color="success"
                            variant="outlined"
                            onClick={handleCreateRecord}
                        >
                            Add to favourites
                        </StyledCardButton>
                    </StyledCardButtonBlock>
                    <Snackbar open={open} autoHideDuration={6000}>
                        <Alert severity={severity} sx={{ width: '100%' }}>
                            {!error ? 'Success!' : 'Ooops'}
                        </Alert>
                    </Snackbar>
                </StyledRoot >

            )}
        </>
    )
}

export default SingleAssetPage
