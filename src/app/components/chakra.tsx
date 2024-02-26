import {
    ChakraProvider,
    cookieStorageManagerSSR,
    localStorageManager
} from "@chakra-ui/react"
import theme from '../lib/theme'
import {Providers} from "@/app/providers";
interface props{
    cookies : any,
    children : React.ReactNode
}
export default function Chakra({ cookies, children} : props){
    const colorModeManager =
        typeof cookies === 'string'
        ? cookieStorageManagerSSR(cookies)
        : localStorageManager
    return (
        <Providers theme={theme} colorModeManager={colorModeManager}>
            {children}
        </Providers>
    )
}
