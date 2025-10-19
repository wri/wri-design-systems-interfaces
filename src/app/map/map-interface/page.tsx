import BaseMapSettings from '@/components/Map/BaseMapSettings'
import LayerPanel from '@/components/Map/LayerPanel'
import LegendPanel from '@/components/Map/LegendPanel'
import MapControls from '@/components/Map/MapControls'
import TabsControls from '@/components/Map/TabsControls'

const MapInterface = () => {
  return (
    <div className='h-full w-full flex relative'>
      <div className='h-full w-full bg-gray-400' />

      <div className='h-full w-80 absolute top-0 left-0 hidden lg:block'>
        <LayerPanel />
      </div>

      <div className='h-full p-5 absolute top-0 left-80 hidden lg:block'>
        <LegendPanel />
      </div>

      <div className='h-full p-5 absolute top-0 right-0 hidden sm:block'>
        <MapControls />
      </div>

      <div className='absolute bottom-4 right-4 hidden lg:block'>
        <BaseMapSettings />
      </div>

      <div className='absolute bottom-0 right-0 sm:bottom-4 sm:right-4 block lg:hidden'>
        <TabsControls />
      </div>
    </div>
  )
}

export default MapInterface
