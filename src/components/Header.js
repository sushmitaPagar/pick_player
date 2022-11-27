import React from "react";
import PlayerTotal from "./PlayerTotal";
import "../css/Header.css";

const Header = ({ arePlayersFinaled, selectedPlayers, teams }) => {
    return (
        <>
        {arePlayersFinaled ? 
            <header>
                <h3>Picked Players</h3>
            </header> 
            :
            <header className="header">
                <h3>Pick Players</h3>
                <PlayerTotal selectedPlayers={selectedPlayers}
                            teams={teams} />
            </header>
        }
        

        </>
    );
};

export default Header;