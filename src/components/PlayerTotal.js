import React from "react";
import "../css/PlayerTotal.css";

const PlayerTotal = ({ selectedPlayers, teams }) => {

    return (
        <>
            <div className="playerTotal">
                <div>
                    <p>{selectedPlayers.length}/11</p>
                    <p>Players</p>
                </div>
                <div>
                    <p>{teams.has("MS")?teams.get("MS"):0}</p>
                    <p>MS</p>
                </div>
                <div>
                    <p>{teams.has("PS")?teams.get("PS"):0}</p>
                    <p>PS</p>
                </div>
                <div>
                    <p>{100 - selectedPlayers.map((player) => player.event_player_credit)
                                            .reduce((acc, currCredit) => acc + currCredit, 0 )}</p>
                    <p>Cr Left</p>
                </div>
            </div>
        </>
    );
};

export default PlayerTotal;