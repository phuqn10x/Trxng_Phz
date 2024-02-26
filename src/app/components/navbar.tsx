'use client'

import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
interface PropsLinkItem {
    href?: string;
    path?: string;
    target?: string;
    children: React.ReactNode;
}
const LinkItem = ({ href, path, target, children, ...props }: PropsLinkItem) => {
    const active: boolean = path === href;
    const inactiveColor: string = useColorModeValue('gray.800', 'whiteAlpha.900');
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? 'gressTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            target={target}
            {...props}
        >
            {children}
        </Link>
    );
}

const MenuLink = forwardRef((props: any, ref: any) => (
    <Link ref={ref} as={NextLink} {...props} />
))
const NavBar = (props: any) => {
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/works" >
                        Works
                    </LinkItem>
                    <LinkItem href="/posts">
                        Posts
                    </LinkItem>

                    <LinkItem
                        href="https://github.com/phuqn10x/Trxng_Phz"
                        target='_blank'
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                         <IoLogoGithub />
                        Source
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block' , md: 'none'}}>
                        <Menu isLazy id='navbar-menu'>
                            <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant={"outline"}
                            aria-label="Options"
                        />
                        <MenuList>
                            <MenuItem as={MenuLink} href="/">
                                About
                            </MenuItem>
                            <MenuItem as={MenuLink} href="/works">
                                Works
                            </MenuItem>
                            <MenuItem as={MenuLink} href="/posts">
                                Posts
                            </MenuItem>
                            <MenuItem as={Link} href="https://github.com/phuqn10x/Trxng_Phz">
                                View Source
                            </MenuItem>
                        </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )

}
export default NavBar