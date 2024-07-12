import {
    Stack,
    Autocomplete,
    TextField,
    useMediaQuery,
} from '@mui/material';
import { ISingleAsset } from '../../common/types/assets';
import { useAppSelector } from '../../utils/hook';

const SearchElement = () => {
    const isNonMobile = useMediaQuery("(min-width:760px)");

    const assetsArray: ISingleAsset[] = useAppSelector(
        (state) => state.assets.assets,
    )
    return (
        <Stack spacing={2} sx={{ width: '300px', marginLeft: !isNonMobile ? '0px' : '35px' }}>
            <Autocomplete
                freeSolo
                renderInput={(element) => (
                    <TextField {...element} label='Search' InputProps={{
                        ...element.InputProps,
                        type: 'search'
                    }} />
                )}
                options={assetsArray.map(asset => asset.name)} />
        </Stack>
    )
}

export default SearchElement
