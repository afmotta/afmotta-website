import { darken } from 'polished'

const bg = '#2b2c2c'

export default {
  text: '#a4a5a6',
  brand: '#2ca24c',
  background: {
    main: {
      even: darken(0.01, bg),
      odd: bg,
    },
    column: {
      even: darken(0.021, bg),
      odd: darken(0.015, bg),
    }
  }
}