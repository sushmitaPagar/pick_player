import React from "react";
import "../css/Player.css";

const Player = ({ player, selectedPlayers, handleSelection }) => {
    return (
        <tr key={player.id} 
            className={selectedPlayers.includes(player)?"tableRow selectedRow":"tableRow"}
            onClick={() => handleSelection(player)}
            >
            <div>{player.name}</div>
            <div>
                <div>credit</div>
                <div>{player.event_player_credit}</div>
            </div>
        </tr>
    );
};

export default Player;