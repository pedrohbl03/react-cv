import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"


export const theme: ThemeConfig = extendTheme({
  styles: {
    global: (props: ThemeConfig) => ({
      body: {
        bg: mode('dark.100', 'dark.100')(props),
        textDecoration: 'none'
      },
    }),
  },
  colors: {
    dark: {
      100: '#262626',
      200: '#1D1D1D',
    },
    gray: {
      100: '#848484',
    }
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
})