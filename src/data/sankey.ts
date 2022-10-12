export default {
  title: {
    text: ""
  },
  series: [
    {
      colors: ["#979797",  "#8B75BA",  "#DDAFD3", "#7EB8BF", "#77954D"],
      keys: ["from", "to", "weight", "color", "height"],
      data: [
        ["Медведи", "Мёд", 4, "#979797"],
        ["Медведи", "Малина", 2, "#DDAFD3"],
        ["Медведи", "Яблоки", 3],
        ["Ежи", "Мёд", 3, "#77954D"],
        ["Ежи", "Малина", 2],
        ["Ежи", "Яблоки", 2, "#7EB8BF"],
      ],
      type: "sankey",
      name: "Sankey demo series"
    }
  ]
};
