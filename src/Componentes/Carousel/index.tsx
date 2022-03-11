import { Container } from '@mui/material'
import Carousel from 'nuka-carousel'

function Carrusel() {
  return (
    <Container sx={{ align: "center" }}>
      <Carousel>
        <img src="https://firebasestorage.googleapis.com/v0/b/example-imgs.appspot.com/o/site1.jpg?alt=media&token=91b26c2c-981c-4979-afa5-0db306709c64" alt='ex1' height="500px" />
        <img src="https://firebasestorage.googleapis.com/v0/b/example-imgs.appspot.com/o/site2.jpg?alt=media&token=000a743b-631c-4185-97ef-2dff73404685" alt='ex2' height="500px" />
        <img src="https://firebasestorage.googleapis.com/v0/b/example-imgs.appspot.com/o/site3.jpg?alt=media&token=af0a2720-b3f0-4b7f-997f-d1799f522440" alt='ex3' height="500px" />
      </Carousel>
    </Container>
  )
}

export default Carrusel