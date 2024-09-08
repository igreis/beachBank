import React, { useState } from 'react'

const Root = React.forwardRef(({ defaultValue, min, max, step, onValueChange, className, ...props }, ref) => {
  const [value, setValue] = useState(defaultValue || min || 0)

  const handleChange = (e) => {
    const newValue = Number(e.target.value)
    setValue(newValue)
    onValueChange && onValueChange([newValue])
  }

  return (
    <div ref={ref} className={`relative ${className}`} {...props}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div
        className="absolute h-2 bg-blue-500 rounded-lg"
        style={{ width: `${((value - min) / (max - min)) * 100}%` }}
      ></div>
    </div>
  )
})

const Track = ({ children, className, ...props }) => (
  <div className={`absolute inset-0 ${className}`} {...props}>
    {children}
  </div>
)

const Range = ({ className, ...props }) => (
  <div className={`absolute h-full ${className}`} {...props} />
)

const Thumb = ({ className, ...props }) => (
  <div
    className={`absolute w-4 h-4 -mt-1 -ml-2 bg-white border-2 border-blue-500 rounded-full ${className}`}
    {...props}
  />
)

Root.displayName = 'Slider'
Track.displayName = 'SliderTrack'
Range.displayName = 'SliderRange'
Thumb.displayName = 'SliderThumb'

export { Root, Track, Range, Thumb }