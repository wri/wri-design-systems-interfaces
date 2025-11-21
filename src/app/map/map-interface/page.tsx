'use client'

import BaseMapSettings from '@/components/Map/BaseMapSettings'
import LayerPanel from '@/components/Map/LayerPanel'
import LegendPanel from '@/components/Map/LegendPanel'
import MapControls from '@/components/Map/MapControls'
import TabsControls from '@/components/Map/TabsControls'
import useResponsiveFlags from '@/hooks/useResponsiveFlags'

const MapInterface = () => {
  const { isWindowReady, isSmallTablet, isMobile } = useResponsiveFlags()

  if (!isWindowReady) {
    return null
  }

  return (
    <div className='h-full w-full flex relative'>
      <div className='h-full w-full bg-gray-400' />

      {!isSmallTablet ? (
        <div className='h-full w-80 absolute top-0 left-0'>
          <LayerPanel />
        </div>
      ) : null}

      {!isSmallTablet ? (
        <div className='h-full p-5 absolute top-0 left-80'>
          <LegendPanel />
        </div>
      ) : null}

      {!isMobile ? (
        <div className='h-full p-5 absolute top-0 right-0 z-50'>
          <MapControls />
        </div>
      ) : null}

      {!isSmallTablet ? (
        <div className='absolute bottom-4 right-4'>
          <BaseMapSettings />
        </div>
      ) : null}

      {isSmallTablet ? (
        <div className='absolute bottom-0 right-0 sm:bottom-4 sm:right-4'>
          <TabsControls />
        </div>
      ) : null}
    </div>
  )
}

export default MapInterface
