export interface Theme {
  name: string;
  displayName: string;
  colors: {
    primary: Record<string, string>;
    accent: string;
    bg: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  };
}

export const themes: Theme[] = [
  {
    name: 'midnight-black',
    displayName: 'Midnight Black',
    colors: {
      primary: {
        50: '249 250 251',
        100: '243 244 246',
        200: '229 231 235',
        300: '209 213 219',
        400: '156 163 175',
        500: '107 114 128',
        600: '75 85 99',
        700: '55 65 81',
        800: '31 41 55',
        900: '17 24 39',
        950: '3 7 18',
      },
      accent: '99 102 241',
      bg: {
        primary: '0 0 0',
        secondary: '17 24 39',
      },
      text: {
        primary: '255 255 255',
        secondary: '156 163 175',
      },
    },
  },
  {
    name: 'royal-gold',
    displayName: 'Royal Gold',
    colors: {
      primary: {
        50: '255 251 235',
        100: '254 243 199',
        200: '253 230 138',
        300: '252 211 77',
        400: '251 191 36',
        500: '245 158 11',
        600: '217 119 6',
        700: '180 83 9',
        800: '146 64 14',
        900: '120 53 15',
        950: '69 26 3',
      },
      accent: '245 158 11',
      bg: {
        primary: '15 10 0',
        secondary: '69 26 3',
      },
      text: {
        primary: '255 251 235',
        secondary: '252 211 77',
      },
    },
  },
  {
    name: 'sapphire-blue',
    displayName: 'Sapphire Blue',
    colors: {
      primary: {
        50: '239 246 255',
        100: '219 234 254',
        200: '191 219 254',
        300: '147 197 253',
        400: '96 165 250',
        500: '59 130 246',
        600: '37 99 235',
        700: '29 78 216',
        800: '30 58 138',
        900: '23 37 84',
        950: '15 23 42',
      },
      accent: '37 99 235',
      bg: {
        primary: '5 8 20',
        secondary: '15 23 42',
      },
      text: {
        primary: '239 246 255',
        secondary: '147 197 253',
      },
    },
  },
  {
    name: 'emerald-royal',
    displayName: 'Emerald Green',
    colors: {
      primary: {
        50: '236 253 245',
        100: '209 250 229',
        200: '167 243 208',
        300: '110 231 183',
        400: '52 211 153',
        500: '16 185 129',
        600: '5 150 105',
        700: '4 120 87',
        800: '6 95 70',
        900: '6 78 59',
        950: '2 44 34',
      },
      accent: '16 185 129',
      bg: {
        primary: '0 10 5',
        secondary: '2 44 34',
      },
      text: {
        primary: '236 253 245',
        secondary: '110 231 183',
      },
    },
  },
  {
    name: 'burgundy-wine',
    displayName: 'Burgundy Wine',
    colors: {
      primary: {
        50: '253 242 248',
        100: '252 231 243',
        200: '251 207 232',
        300: '249 168 212',
        400: '244 114 182',
        500: '236 72 153',
        600: '219 39 119',
        700: '190 24 93',
        800: '157 23 77',
        900: '131 24 67',
        950: '80 7 36',
      },
      accent: '190 24 93',
      bg: {
        primary: '20 0 10',
        secondary: '80 7 36',
      },
      text: {
        primary: '253 242 248',
        secondary: '249 168 212',
      },
    },
  },
  {
    name: 'imperial-purple',
    displayName: 'Imperial Purple',
    colors: {
      primary: {
        50: '250 245 255',
        100: '243 232 255',
        200: '233 213 255',
        300: '196 181 253',
        400: '139 92 246',
        500: '124 58 237',
        600: '109 40 217',
        700: '91 33 182',
        800: '76 29 149',
        900: '59 7 100',
        950: '35 6 75',
      },
      accent: '124 58 237',
      bg: {
        primary: '10 0 20',
        secondary: '35 6 75',
      },
      text: {
        primary: '250 245 255',
        secondary: '196 181 253',
      },
    },
  },
  {
    name: 'platinum-silver',
    displayName: 'Platinum Silver',
    colors: {
      primary: {
        50: '248 250 252',
        100: '241 245 249',
        200: '226 232 240',
        300: '203 213 225',
        400: '148 163 184',
        500: '100 116 139',
        600: '71 85 105',
        700: '51 65 85',
        800: '30 41 59',
        900: '15 23 42',
        950: '2 6 23',
      },
      accent: '100 116 139',
      bg: {
        primary: '8 10 15',
        secondary: '15 23 42',
      },
      text: {
        primary: '248 250 252',
        secondary: '203 213 225',
      },
    },
  },
  {
    name: 'sunset-coral',
    displayName: 'Sunset Coral',
    colors: {
      primary: {
        50: '255 241 242',
        100: '255 228 230',
        200: '254 205 211',
        300: '253 164 175',
        400: '251 113 133',
        500: '244 63 94',
        600: '225 29 72',
        700: '190 18 60',
        800: '159 18 57',
        900: '136 19 55',
        950: '76 5 25',
      },
      accent: '244 63 94',
      bg: {
        primary: '20 5 5',
        secondary: '76 5 25',
      },
      text: {
        primary: '255 241 242',
        secondary: '253 164 175',
      },
    },
  },
  {
    name: 'deep-teal',
    displayName: 'Deep Teal',
    colors: {
      primary: {
        50: '240 253 250',
        100: '204 251 241',
        200: '153 246 228',
        300: '94 234 212',
        400: '45 212 191',
        500: '20 184 166',
        600: '13 148 136',
        700: '15 118 110',
        800: '17 94 89',
        900: '19 78 74',
        950: '4 47 46',
      },
      accent: '20 184 166',
      bg: {
        primary: '0 15 15',
        secondary: '4 47 46',
      },
      text: {
        primary: '240 253 250',
        secondary: '94 234 212',
      },
    },
  },
  {
    name: 'vintage-bronze',
    displayName: 'Vintage Bronze',
    colors: {
      primary: {
        50: '255 247 237',
        100: '255 237 213',
        200: '254 215 170',
        300: '253 186 116',
        400: '251 146 60',
        500: '234 88 12',
        600: '194 65 12',
        700: '154 52 18',
        800: '124 45 18',
        900: '102 36 14',
        950: '67 20 7',
      },
      accent: '194 65 12',
      bg: {
        primary: '15 8 0',
        secondary: '67 20 7',
      },
      text: {
        primary: '255 247 237',
        secondary: '253 186 116',
      },
    },
  },
];

export const getThemeFromStorage = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('portfolio-theme') || 'midnight-black';
  }
  return 'midnight-black';
};

export const saveThemeToStorage = (themeName: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('portfolio-theme', themeName);
  }
};

export const applyTheme = (themeName: string): void => {
  const theme = themes.find(t => t.name === themeName);
  if (!theme) return;

  const root = document.documentElement;
  
  // Apply theme data attribute
  root.setAttribute('data-theme', themeName);
  
  // Apply CSS custom properties
  Object.entries(theme.colors.primary).forEach(([key, value]) => {
    root.style.setProperty(`--color-primary-${key}`, value);
  });
  
  root.style.setProperty('--color-accent', theme.colors.accent);
  root.style.setProperty('--color-bg-primary', theme.colors.bg.primary);
  root.style.setProperty('--color-bg-secondary', theme.colors.bg.secondary);
  root.style.setProperty('--color-text-primary', theme.colors.text.primary);
  root.style.setProperty('--color-text-secondary', theme.colors.text.secondary);
  
  // Save to localStorage
  saveThemeToStorage(themeName);
};
