import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { FC } from 'react'
import { ITablePriceData } from '../../common/types/assets';

const TopPriceComponent: FC<ITablePriceData> = ({ assets }) => {
    // console.log(assets);

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Change in ($)</TableCell>
                            <TableCell align="right">Change in (%)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {assets.map((element: any) => (
                            <TableRow
                                key={element.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {element.name}
                                </TableCell>
                                <TableCell align="right">{element.current_price}</TableCell>
                                <TableCell
                                    style={{ color: element.price_change_24h > 0 ? '#00ff00' : '#FF0000' }}
                                    align="right">{element.price_change_24h.toFixed(2)}
                                </TableCell>
                                <TableCell
                                    style={{ color: element.price_change_percentage_24h > 0 ? '#00ff00' : '#FF0000' }}
                                    align="right">{element.price_change_percentage_24h.toFixed(2)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    )
}

export default TopPriceComponent
