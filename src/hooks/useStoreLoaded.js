import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function useStoreLoaded () {
  const storePersonal = useSelector(state => state.personal.isLoaded)
  const storePositions = useSelector(state => state.position.isLoaded)

  const [isLoaded, setIsLoaded] = useState(null)

  useEffect(() => {
    (storePersonal && storePositions) ? setIsLoaded(true) : setIsLoaded(false)
  }, [storePersonal, storePositions])

  return isLoaded
}

export default useStoreLoaded
