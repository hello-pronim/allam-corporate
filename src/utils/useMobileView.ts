import { useWindowSize } from './useWindowSize'

export function useMobileView() {
  const windowSize = useWindowSize()
  return windowSize.innerWidth < 1024
}
