
const validateRoles = (rolesCount) => {
    if(rolesCount.has("Batsman")){
        if(rolesCount.get("Batsman") < 3 || rolesCount.get("Batsman") > 7){
            return false;
        }
    }else{
        return false;
    }

    if(rolesCount.has("Wicket-Keeper")){
        if(rolesCount.get("Wicket-Keeper") < 1 || rolesCount.get("Wicket-Keeper") > 5){
            return false;
        }
    }else{
        return false;
    }

    if(rolesCount.has("All-Rounder")){
        if(rolesCount.get("All-Rounder") > 4){
            return false;
        }
    }

    if(rolesCount.has("Bowler")){
        if(rolesCount.get("Bowler") < 3 || rolesCount.get("Bowler") > 7){
            return false;
        }
    }else{
        return false;
    }

    return true;
};

export default validateRoles;