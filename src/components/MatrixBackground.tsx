export function MatrixBackground() {
  // Generate deterministic "code rain" columns
  const columns = Array.from({ length: 20 }, (_, i) => {
    const chars = '0x1a2b3c4d5e6f789ABCDEFbase{}[]=>()const;function//import'
    const colChars = Array.from({ length: 30 }, (_, j) =>
      chars[(i * 7 + j * 3) % chars.length]
    ).join(' ')

    return {
      left: `${(i / 20) * 100}%`,
      duration: `${15 + (i % 5) * 4}s`,
      delay: `${-(i % 7) * 2}s`,
      chars: colChars,
    }
  })

  return (
    <div className="matrix-overlay" aria-hidden="true">
      {columns.map((col, i) => (
        <div
          key={i}
          className="matrix-column"
          style={{
            left: col.left,
            animationDuration: col.duration,
            animationDelay: col.delay,
          }}
        >
          {col.chars}
        </div>
      ))}
    </div>
  )
}
