const RoomStatus = ({ roomNo, isOccupied }) => (
  <div className="flex items-center gap-3">
    <span className="text-xl font-bold text-gray-700">#{roomNo}</span>
    <span className={`
      h-2.5 w-2.5 rounded-full
      ${isOccupied ? 'bg-green-500' : 'bg-gray-300'}
    `} />
  </div>
)

export default RoomStatus 