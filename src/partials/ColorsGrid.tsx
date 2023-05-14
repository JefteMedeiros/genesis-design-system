import { getContrast } from "polished"

import { colors } from "../tokens/colors"

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            backgroundColor: color,
            padding: "1rem",
            color: getContrast(color, "white") < 3.5 ? "#000" : "#FFF",
          }}
        >
          <strong>- {key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
