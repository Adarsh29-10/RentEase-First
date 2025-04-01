const ExpandButton = ({ isExpanded, onClick }) => (
  <button
    className={`
      p-2 text-gray-400 hover:text-gray-600 transition-transform
      ${isExpanded ? 'rotate-180' : ''}
    `}
    onClick={onClick}
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
)

export default ExpandButton 