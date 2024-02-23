'use client'

import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
    Avatar
} from '@chakra-ui/react'
import Image from "next/image";
import styles from "./page.module.css";
import { format } from 'path';

const Home = () => (
    <Container>
        <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)'}}
        >
            Hello, I&apos;m a website developer based in Vietnam !
        </Box>
        
        <Box display={{ md : 'flex '}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Trong Phu
                </Heading>
                <p>Dreamer ( Developer / Designer / Gamer )</p>
            </Box>
            <Box
                flexShrink={0}
                mt={{ base: 4, md:0}}
                ml={{ md: 6}}
                textAlign="center"
            >
                
                    <Avatar
                        borderColor={"whiteAlpha.800"}
                        borderWidth={2}
                        borderStyle={"solid"}
                        size='xl'
                        src="/images/me_and_gf.jpg"
                        name="Profle image"
                       
                    />
                
            </Box>
        </Box>
    </Container>
);

export default Home
