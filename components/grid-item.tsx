import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

interface PropsGrid {
    children: React.ReactNode
    href:any,
    title: any,
    thumbnail:any
}
export const GridItem = ({ children, href, title, thumbnail } : PropsGrid) => (
    <Box w="100%" textAlign="center"> 
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
            />
            <LinkOverlay href={href} target='_blank'>
                <Text mt={2}>
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)
interface PropsWorkGrid {
    children: React.ReactNode
    category:any,
    id: any,
    href:any,
    title:any,
    thumbnail:any
}
export const WorkGridItem = ({ children, category = ' works', id, title, thumbnail }: PropsWorkGrid) => (
    <Box w="100%" textAlign="center">
        <LinkBox
            as={NextLink}
            href={`/${category}/`}
            scroll={false}
            cursor="pointer"
        >
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
            />
            <LinkOverlay as="div" href={`/${category}/${id}`}>
                <Text mt={2} fontSize={20}>
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize={14}>
                {children}
            </Text>
        </LinkBox>    
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
            .grid-item-thumbnail {
                border-radius: 12px;
            }
        `}
    />
)