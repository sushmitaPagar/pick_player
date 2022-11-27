import React from "react";

const FinaledPlayers = ({ selectedPlayers }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <tbody>
                                {selectedPlayers.sort((a, b) => b.event_player_credit - a.event_player_credit)
                                                        .map((player) => {
                                                            return (
                                                                <tr key={player.id} 
                                                                    className="tableRow"
                                                                    >
                                                                    <div>{player.name}</div>
                                                                    <div>
                                                                        <div>credit</div>
                                                                        <div>{player.event_player_credit}</div>
                                                                    </div>
                                                                </tr>
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

export default FinaledPlayers;