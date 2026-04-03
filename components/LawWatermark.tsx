interface LawWatermarkProps {
  className?: string
  style?: React.CSSProperties
}

export function LawWatermark({ className, style }: LawWatermarkProps) {
  return (
    <div className={`watermark-text ${className ?? ""}`} style={style}>
      CONEVSKI
    </div>
  )
}
