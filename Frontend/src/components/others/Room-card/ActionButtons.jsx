const ActionButtons = ({ isOccupied, onEdit, onAssign }) => (
  <button
    className={`
      px-4 py-2 text-sm font-medium 
      ${isOccupied 
        ? 'text-blue-600 hover:bg-blue-50' 
        : 'text-green-600 hover:bg-green-50'
      } 
      rounded-lg transition-colors
    `}
    onClick={(e) => {
      e.stopPropagation();
      isOccupied ? onEdit() : onAssign();
    }}
  >
    {isOccupied ? 'Edit Room' : 'Assign Tenant'}
  </button>
)

export default ActionButtons 