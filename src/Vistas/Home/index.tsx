import { Box, Container, Typography } from '@mui/material'
import Tarjeta from '../../Componentes/Card'
import Carrusel from '../../Componentes/Carousel'


function Home() {
  return (
    <Box sx={{ padding: "1rem", }} >
      <Carrusel />
      <Typography sx={{ color: "#41927F", margin: "4rem" }}
        variant="h3"
        color="textSecondary"
        align="center">Tu viaje empieza con nosotros...</Typography>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Tarjeta title='Machu Picchu' avatarLetter='MP' subheader='Una de las maravillas del mundo' urlImage='https://firebasestorage.googleapis.com/v0/b/example-imgs.appspot.com/o/macchupicchu.jpg?alt=media&token=a7873ff2-c63b-4efd-93c6-98cf9377c7c1' mainContent='La quebrada de Picchu, ubicada a medio camino entre los Andes y la floresta amazónica, fue una región colonizada por poblaciones andinas, no selváticas, provenientes de las regiones de Vilcabamba y del Valle Sagrado, en Cuzco, en busca de una expansión de sus fronteras agrarias. Las evidencias arqueológicas indican que la agricultura se practicaba en la región desde al menos el 760 a. C.' />
        <Tarjeta title='Machu Picchu' avatarLetter='MP' subheader='Una de las maravillas del mundo' urlImage='https://firebasestorage.googleapis.com/v0/b/example-imgs.appspot.com/o/macchupicchu.jpg?alt=media&token=a7873ff2-c63b-4efd-93c6-98cf9377c7c1' mainContent='La quebrada de Picchu, ubicada a medio camino entre los Andes y la floresta amazónica, fue una región colonizada por poblaciones andinas, no selváticas, provenientes de las regiones de Vilcabamba y del Valle Sagrado, en Cuzco, en busca de una expansión de sus fronteras agrarias. Las evidencias arqueológicas indican que la agricultura se practicaba en la región desde al menos el 760 a. C.' />
        <Tarjeta title='Machu Picchu' avatarLetter='MP' subheader='Una de las maravillas del mundo' urlImage='https://firebasestorage.googleapis.com/v0/b/example-imgs.appspot.com/o/macchupicchu.jpg?alt=media&token=a7873ff2-c63b-4efd-93c6-98cf9377c7c1' mainContent='La quebrada de Picchu, ubicada a medio camino entre los Andes y la floresta amazónica, fue una región colonizada por poblaciones andinas, no selváticas, provenientes de las regiones de Vilcabamba y del Valle Sagrado, en Cuzco, en busca de una expansión de sus fronteras agrarias. Las evidencias arqueológicas indican que la agricultura se practicaba en la región desde al menos el 760 a. C.' />
      </Container>
    </Box>
  )
}

export default Home