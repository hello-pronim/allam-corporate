import { useState, useEffect } from 'react'

function getSize() {
  return {
    innerHeight: global.innerHeight || 800,
    outerHeight: global.outerHeight || 1280,
    innerWidth: global.innerWidth || 1280,
    outerWidth: global.outerWidth || 800
  }
}

export function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize())

  function handleResize() {
    setWindowSize(getSize())
  }

  useEffect(() => {
    global.addEventListener('resize', handleResize)

    return () => {
      global.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
