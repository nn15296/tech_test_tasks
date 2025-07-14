
import { Grid, Button, Stack, Container, Typography, Button } from '@mui/material'


function TaskDescription() {
    return (
        <Grid container>
            <Grid item>
                <Stack direction="column" spacing={2}>
                    <Typography variant='h5'>Title</Typography>
                    <Typography variant='body1'>Description</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
}
