export const theme = {
  color: {
    white_50: 'rgba(255, 255, 255, 0.5)',
    white: '#ffffff',
    text: 'rgba(255, 255, 255, 0.7)',
    primary_dark: '#141414',
    primary: '#161616',
    primary_light: '#181818',
    primary_lighten: '#202020',
    primary_lighten_2: '#242424',
    purple: '#6407FC',
    purple_30: 'rgba(100, 7, 252, 0.3)',
    black_50: 'rgba(0,0,0,0.5)',
    black_70: 'rgba(0,0,0,0.7)',
    orange_10: 'rgba(253, 102, 0, 0.1)',
    orange: '#FD6600',
    red: '#E82518',
    yellow: '#FFE200',
    green: '#48AD08'
  },
  gradient: {
    gradient_purple:
      'linear-gradient(275.26deg, #6407FC 27.98%, #8644F3 69.43%);'
  },
  shadow: {
    shadow_01: '0px 4px 24px rgba(0, 0, 0, 0.15)'
  }
};

export type Theme = typeof theme;
