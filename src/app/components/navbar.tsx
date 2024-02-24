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
import { HamburgerIcon} from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
interface PropsLinkItem{
    href: string;
    path: string;
    target: string;
    children: string;
}
const LinkItem = ({ href, path, target, children, ...props} : PropsLinkItem , ) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800','whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? 'gressTeal' : undefined}
            color={active? '#202023' : inactiveColor}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

const MenuLink = forwardRef<any, any>((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))
const NavBar = () => {

}
export default NavBar