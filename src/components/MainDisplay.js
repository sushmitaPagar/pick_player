import React from "react";
import Player from "./Player";
import "../css/MainDisplay.css";

const MainDisplay = ({ filteredPlayers, selectedPlayers, handleSelection }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <h5>Pick 3-7 Batsman</h5>
                        <table className="table">
                            <tbody>
                                {filteredPlayers.batsman.sort((a, b) => b.event_player_credit - a.event_player_credit)
                                                        .slice(0, 6)
                                                        .map((player) => {
                                                            return (
                                                                <Player key={player.id} 
                                                                        player={player}
                                                                        selectedPlayers={selectedPlayers}
                                                                        handleSelection={handleSelection} />
                                                            );
                                                        })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-12 col-sm-6">
                        <h5>Pick 1-5 Wicket Keepers</h5>
                        <table className="table">
                            <tbody>
                                {filteredPlayers.wicketKeepers.sort((a, b) => b.event_player_credit - a.event_player_credit)
                                                        .slice(0, 6)
                                                        .map((player) => {
                                                            return (
                                                                <Player key={player.id}
                                                                        player={player}
                                                                        selectedPlayers={selectedPlayers}
                                                                        handleSelection={handleSelection} />
                                                            );
                                                        })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-12 col-sm-6">
                        <h5>Pick 0-4 All - Rounders</h5>
                        <table className="table">
                            <tbody>
                                {filteredPlayers.allRounders.sort((a, b) => b.event_player_credit - a.event_player_credit)
                                                        .slice(0, 6)
                                                        .map((player) => {
                                                            return (
                                                                <Player key={player.id}
                                                                        player={player}
                                                                        selectedPlayers={selectedPlayers}
                                                                        handleSelection={handleSelection} />
                                                            );
                                                        })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-12 col-sm-6">
                        <h5>Pick 3-7 Bowlers</h5>
                        <table className="table">
                            <tbody>
                                {filteredPlayers.bowlers.sort((a, b) => b.event_player_credit - a.event_player_credit)
                                                        .slice(0, 6)
                                                        .map((player) => {
                                                            return (
                                                                <Player key={player.id}
                                                                        player={player}
                                                                        selectedPlayers={selectedPlayers}
                                                                        handleSelection={handleSelection} />
                                                            );
                                                        })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainDisplay;