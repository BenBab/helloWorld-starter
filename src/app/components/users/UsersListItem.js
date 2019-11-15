
import React from 'react'

import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';

function UsersListItem({ name }) {
    return (
        <UsersListItemWrapper raised={true} >
            <CardContent>
            <Typography color="textSecondary" gutterBottom>
                {name}
            </Typography>
            <Typography variant="h5" component="h2">
                be
                .
                nev
                . o . 
                lent
            </Typography>
            <Typography color="textSecondary">
                adjective
            </Typography>
            <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
            </CardContent>
            <CardActions className='cardActions'>
                <Button size="small">Learn More</Button>
            </CardActions>
        </UsersListItemWrapper>
    )
}

export default UsersListItem

const UsersListItemWrapper = styled(Card)`
    margin: 20px;
    min-width: 500px;


    .cardActions{
        justify-content: center;
    }

    &:hover{
        scale: 1.2;
        cursor: pointer;
    }
`;