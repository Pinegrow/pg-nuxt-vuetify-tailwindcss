import type { ThemeDefinition } from 'vuetify'
import {
  pg_colors,
  // pg_fonts,
  // pg_backgrounds,
} from '../../themes/pg-tailwindcss/tokens.mjs'

// Customize light and dark themes
const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: pg_colors.primary['500'],
    'primary-darken-1': pg_colors.primary['600'],
    secondary: pg_colors.secondary['500'],
    'secondary-darken-1': pg_colors.secondary['600'],
    tertiary: pg_colors.tertiary['500'],
    success: pg_colors.success['500'],
    warning: pg_colors.warning['500'],
    error: pg_colors.error['500'],
    info: pg_colors.info['500'],
    neutral: pg_colors.neutral['500'],

    background: '#ffffff',
    'on-background': pg_colors.neutral['950'],
    surface: '#ffffff',
    'on-surface': pg_colors.neutral['950'],
    'surface-variant': pg_colors.neutral['500'],
    'on-surface-variant': pg_colors.neutral['900'],
  },
  variables: {
    // 'border-color': '#000000',
    // 'border-opacity': 0.12,
  },
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: pg_colors.primary['400'],
    'primary-darken-1': pg_colors.primary['300'],
    secondary: pg_colors.secondary['400'],
    'secondary-darken-1': pg_colors.secondary['300'],
    tertiary: pg_colors.tertiary['400'],
    success: pg_colors.success['400'],
    warning: pg_colors.warning['400'],
    error: pg_colors.error['400'],
    info: pg_colors.info['400'],
    neutral: pg_colors.neutral['400'],

    background: pg_colors.neutral['900'],
    'on-background': pg_colors.neutral['50'],
    surface: pg_colors.neutral['900'],
    'on-surface': pg_colors.neutral['50'],
    'surface-variant': pg_colors.neutral['600'],
    'on-surface-variant': pg_colors.neutral['50'],
  },

  variables: {
    // 'border-color': '#ffffff',
    // 'border-opacity': 0.12,
  },
}

export { lightTheme, darkTheme }
