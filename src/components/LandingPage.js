import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import getApiResponse from "../services/getApiResponse";
import getPlayersFiltered from "../services/getPlayersFiltered";
import validateRoles from "../services/validateRoles";
import FinaledPlayers from "./FinaledPlayers";
import Footer from "./Footer";
import Header from "./Header";
import MainDisplay from "./MainDisplay";

const LandingPage = () => {

    // state variable for conditional rendering on LandingPage and FinaledPlayers
    const [arePlayersFinaled, setArePlayersFinaled] = useState(false);

    // total players list
    const [playersList, setPlayersList] = useState([]);

    // filtered players according to their role
    const [filteredPlayers, setFilteredPlayers] = useState({
        batsman: [],
        wicketKeepers: [],
        allRounders: [],
        bowlers: []
    });

    // selected players list
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const { enqueueSnackbar } = useSnackbar();

    // Map to maintain number of players selected from perticular team
    // key : team_short_name
    // value : count of players
    let teams = new Map();
    for(let i=0; i<selectedPlayers.length; i++){
        if(teams.has(selectedPlayers[i].team_short_name)){
            teams.set(selectedPlayers[i].team_short_name, teams.get(selectedPlayers[i].team_short_name) + 1);
        }else{
            teams.set(selectedPlayers[i].team_short_name, 1);
        }
    }

    // Map to maintain roles count from selected players list
    // key : role
    // value : count of players
    let rolesCount = new Map();
    for(let i=0; i<selectedPlayers.length; i++){
        if(rolesCount.has(selectedPlayers[i].role)){
            rolesCount.set(selectedPlayers[i].role, rolesCount.get(selectedPlayers[i].role) + 1);
        }else{
            rolesCount.set(selectedPlayers[i].role, 1);
        }
    }

    // function to handle selection / removal of a player
    const handleSelection = (player) => {
        if(selectedPlayers.includes(player)){
            setSelectedPlayers(selectedPlayers.filter((ele) => ele.id !== player.id));
        }else if(selectedPlayers.length < 11){
            if(teams.has(player.team_short_name)){
                if(teams.get(player.team_short_name) === 7){
                    enqueueSnackbar("Players count from one team are exceeding 7..", {variant: "warning"});
                }else{
                    setSelectedPlayers([...selectedPlayers, player]);
                }
            }else{
                setSelectedPlayers([...selectedPlayers, player]);
            }
        }else if(selectedPlayers.length >= 11){
            enqueueSnackbar("Players count is exceeding 11..", {variant: "warning"});
        }
    };

    // function to handle click on proceed button
    const handleProceed = () => {
        if(selectedPlayers.length !== 11){
            enqueueSnackbar("Select 11 palyers in total..", {variant: "error"});
        }else{
            if(validateRoles(rolesCount)){
                setArePlayersFinaled(true);
            }else{
                enqueueSnackbar("Follow min. & max. limit for each Role..", {variant: "error"});
            }
        }
    };

    useEffect(() => {
        const init = async () => {
            let list = await getApiResponse();
            setPlayersList(list);

            let filteredList = getPlayersFiltered(list);
            setFilteredPlayers(filteredList);
        };
        init();

    }, []);

    console.log("playersList ::", playersList);
    //console.log("filteredPlayers ::", filteredPlayers);

    return (
        <>
            <Header arePlayersFinaled={arePlayersFinaled} 
                    selectedPlayers={selectedPlayers}
                    teams={teams} />
            {arePlayersFinaled ?
            <FinaledPlayers selectedPlayers={selectedPlayers} />
            :
            <>
                <MainDisplay
                    filteredPlayers={filteredPlayers}
                    selectedPlayers={selectedPlayers}
                    handleSelection={handleSelection}
                    />
                <Footer handleProceed={handleProceed} />
            </>
            }
            
        </>
    );
};

export default LandingPage;