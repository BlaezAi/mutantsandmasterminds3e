import React, { useState } from 'react';

function CharacterCreationModal(props) {
    const [playerName, setPlayerName] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [powerPoints, setPowerPoints] = useState(0);

    const handleCreateCharacter = () => {
        // You can pass playerName, characterName, and powerPoints to your character creation logic.
        // For example, call an API to create the character here.
        // After character creation, you can close the modal.

        // Close the modal
        props.onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Character Creation</h2>
                <label>Player Name:</label>
                <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                />
                <label>Character Name:</label>
                <input
                    type="text"
                    value={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                />
                <label>Enter Initial Power Points:</label>
                <input
                    type="number"
                    value={powerPoints}
                    onChange={(e) => setPowerPoints(parseInt(e.target.value, 10))}
                />
                <button onClick={handleCreateCharacter}>Create Character</button>
            </div>
        </div>
    );
}

export default CharacterCreationModal;
