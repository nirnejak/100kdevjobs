import * as React from "react"

const DotBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
    </div>
  )
}

export default DotBackground
