import { darken } from "polished"

export default ({
  text = "#a4a5a6",
  brand = "#2ca24c",
  background = "#2b2c2c",
} = {}) => ({
  text,
  brand,
  background: {
    main: {
      even: darken(0.01, background),
      odd: background,
    },
    column: {
      even: darken(0.021, background),
      odd: darken(0.015, background),
    },
  },
})
