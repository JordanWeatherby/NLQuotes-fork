
export const ChannelRadioButton = ({ selectedChannel, handleChannelChange, id, name}) => {
    const isSelected = selectedChannel === id;
    return(
        <div
            className={`radio-button ${isSelected ? 'selected' : ''}`}
            onClick={() => handleChannelChange(id)}
        >
            <input
                type="radio"
                id={id}
                value={id}
                checked={isSelected}
                onChange={handleChannelChange}
            />
            <label htmlFor={id} className="radio-label">
                {name}
            </label>
        </div>
  )}
