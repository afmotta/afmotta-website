export const getBgColor = (colors, isColumn, isEven) =>
  colors.background[isColumn ? "column" : "main"][isEven ? "even" : "odd"]
