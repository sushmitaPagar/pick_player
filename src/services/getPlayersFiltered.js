const getPlayersFiltered = (playersList) => {
    let obj = {
        batsman: [],
        wicketKeepers: [],
        allRounders: [],
        bowlers: []
    };

    obj.batsman =  playersList.filter((player) => player.role === "Batsman");
    obj.wicketKeepers =  playersList.filter((player) => player.role === "Wicket-Keeper");
    obj.allRounders =  playersList.filter((player) => player.role === "All-Rounder");
    obj.bowlers =  playersList.filter((player) => player.role === "Bowler");

    //console.log("obj :: ", obj);
    return obj;
};

export default getPlayersFiltered;