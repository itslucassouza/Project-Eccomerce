import 'styled-components'

import theme from './theme'

export type DefaultTheme = typeof theme

declare module 'styled-components' {
    export interface DefaultTheme extends theme {}
}
