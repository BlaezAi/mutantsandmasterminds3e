import React, { useState } from 'react';

function PowerLevelCalculator() {
    const [powerPoints, setPowerPoints] = useState(0);

    // Function to calculate Power Level
    const calculatePowerLevel = (points) => {
        let powerLevel = 1;

        while (points >= powerLevel * 15) {
            powerLevel++;
        }

        return powerLevel;
    };

    return (
        <div>
            <label>Enter Power Points: </label>
            <input
                type="number"
                value={powerPoints}
                onChange={(e) => setPowerPoints(parseInt(e.target.value, 10))}
            />

            <div>
                <p>Power Level: {calculatePowerLevel(powerPoints)}</p>
            </div>
        </div>
    );
}

export default PowerLevelCalculator;
