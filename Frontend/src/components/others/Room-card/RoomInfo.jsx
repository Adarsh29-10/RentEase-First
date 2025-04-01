const RoomInfo = ({ name, bill, isOccupied }) => (
  <div className="flex items-center gap-6">
    <div className="min-w-[200px]">
      <span className="text-sm text-gray-600">
        {name || 'Available'}
      </span>
    </div>
    {isOccupied && (
      <div className="text-sm font-medium text-gray-900">
        ₹{bill || '0'}
      </div>
    )}
  </div>
)

export default RoomInfo 