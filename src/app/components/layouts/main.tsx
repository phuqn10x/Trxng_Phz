import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import { Router } from 'next/router'
import { log } from 'console'

// const LazyVoxelDog = dynamic(() => import('../voxel-dog'). {
//     ssr: false,
//     loading: () => <VoxelDogLoader/>
// })
interface Props {
    children : React.ReactNode
}
const Main = ({ children }:Props) => {
    
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Phu's homepage"/>
                <meta name="author" content="Trong Phu"/>
                <meta name="author" content="Trxng Phz" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="twitter:title" content="Trong Phu" />
                <meta name="twitter:card" content="" />
                <meta name="twitter:site" content="" />
                <meta name="twitter:creator" content="" />
                <meta name="twitter:image" content="/card.png" />
                <meta property="og:site_name" content="Trong Phu" />
                <meta name="og:title" content="Trong Phu" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/card.png" />
                <title>Trong Phu - Homepage</title>
            </Head>

            <NavBar/>

            <Container maxW="container.md" pt={14}>
                {/* <LazyVoxelDog/> */}

                {children}

                {/* <Footer /> */}
            </Container>

        </Box>
    )

}

export default Main
