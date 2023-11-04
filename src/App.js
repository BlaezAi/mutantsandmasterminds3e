import React, { useState } from 'react';
import CharacterCreation from './CharacterCreation';

function App() {
    const [show, setShow] = useState(false);

    const handleCreateCharacter = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    return (
        <div>
            <button onClick={handleCreateCharacter}>Create Character</button>
            {show && (
                <CharacterCreation onClose={handleClose} />
            )}
            {/* Rest of your application */}
        </div>
    );
}

export default App;
