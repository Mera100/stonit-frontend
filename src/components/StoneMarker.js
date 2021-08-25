import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/tag-heart'
const StoneMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="stone-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}

export default StoneMarker
