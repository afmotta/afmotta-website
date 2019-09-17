import colors from "./colors"

export const getBgColor = (isColumn, isEven) =>
  colors.background[isColumn ? "column" : "main"][isEven ? "even" : "odd"]
