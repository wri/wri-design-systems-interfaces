'use client'

import { MapControls as WriMapControls } from '@worldresources/wri-design-systems'

const MapControls = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px',
      }}
    >
      <WriMapControls.Zoom
        onZoomInClick={() => {}}
        onZoomOutClick={() => {}}
        vertical
      />
      <WriMapControls.Expand onClick={() => {}} />
      <WriMapControls.Share onClick={() => {}} />
      <WriMapControls.Print onClick={() => {}} />
      <WriMapControls.Settings onClick={() => {}} />
      <WriMapControls.Question onClick={() => {}} />
    </div>
  )
}
export default MapControls
