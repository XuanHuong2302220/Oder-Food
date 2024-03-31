import { extendTheme } from "@chakra-ui/react";
import '@fontsource-variable/overpass';

const theme = extendTheme({
    fonts: {
        heading: `'Overpass Variable', sans-serif`,
        body: `'Overpass Variable', sans-serif`,
    }
})

export default theme;