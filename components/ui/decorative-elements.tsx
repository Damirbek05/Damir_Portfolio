export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-[#c778dd] opacity-30 rounded-full"></div>
        ))}
      </div>
    </div>
  )
}

export function GeometricShapes({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      {/* Purple outlined rectangles */}
      <div className="relative">
        <div className="w-16 h-12 border-2 border-[#c778dd] absolute top-0 left-0"></div>
        <div className="w-12 h-8 border-2 border-[#c778dd] absolute top-4 left-8"></div>
        <div className="w-8 h-6 border-2 border-[#c778dd] absolute top-8 left-4"></div>
      </div>

      {/* White filled rectangles */}
      <div className="relative mt-8">
        <div className="w-12 h-8 bg-[#ffffff] absolute top-0 left-0"></div>
        <div className="w-8 h-6 bg-[#ffffff] absolute top-2 left-6"></div>
      </div>
    </div>
  )
}
