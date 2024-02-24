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
import Paragraph from './components/Paragraph'
import Image from "next/image";
import styles from "./page.module.css";
import { format } from 'path';
import Section from './components/section'
import Layout from './components/layouts/article'
const Home = () => (
    <Layout>
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

        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>
                Trong Phu is a front-end developer and a designer based in hanoi with a
                passion for building digital services/stuff he wants. but he didn't do anything
            </Paragraph>
        </Section>
    </Container>
    </Layout>
);

export default Home
