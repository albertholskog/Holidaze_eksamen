import { Paper } from '@mui/material'

function CarouselItem({item})
{
    return (
        <Paper>
         <img src={item.image} alt="" />
         <img src={item.image} alt="" />
         <img src={item.image} alt="" />
            <h2>{item.title}</h2>
        </Paper>
    )
}

export default CarouselItem