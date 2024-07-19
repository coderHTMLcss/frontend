import React, { FC, useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Grid, useTheme } from '@mui/material'
import TabPanel from '../../components/tab-panel'
import { tabProps } from '../../utils/helpers'
import { tokens } from '../../theme'
import { useAppDispatch } from '../../utils/hook'
import SettingsPersonalInfoComponent from '../../components/settings-personal-info'
import { getPublicUser } from '../../store/thunks/auth'


const SettingsPage: FC = (): JSX.Element => {
    const [value, setValue] = useState(0)
    const dispatch = useAppDispatch()
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    useEffect(() => {
        dispatch(getPublicUser())
    }, [dispatch])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Grid >
            <Box >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Settings tabs"
                    centered
                    textColor="secondary"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: colors.blue,
                        },
                    }}
                >
                    <Tab label="Personal data" {...tabProps(0)} />
                    <Tab label="Change password" {...tabProps(1)} />
                    <Tab label="Delete account" {...tabProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <SettingsPersonalInfoComponent />
            </TabPanel>
            <TabPanel value={value} index={1}>
                {/* <ChangePasswordComponent /> */}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {/* <DeleteUserComponent /> */}
            </TabPanel>
        </Grid>
    )
}

export default SettingsPage