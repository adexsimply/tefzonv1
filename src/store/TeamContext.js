import React, { createContext, useContext, useState } from "react";
import { getTeam } from "../helpers/api";
import { formatString } from "../helpers/utils";
import { ReactComponent as PlayerJersey } from "../assets/img/jersey-xl.svg";
import { CreateTeamContext } from "./CreateTeamContext";

export const TeamContext = createContext();

const TeamProvider = ({ children }) => {
  const [teamData, setTeamData] = useState(null);
  const [loadingTeam, setLoadingTeam] = useState(false);
  const [teamDetails, setTeamDetails] = useState(null);
  const [teamPlayers, setTeamPlayers] = useState(null);

  const {
    setSelectedGoalKeepers,
    setSelectedMid,
    setSelectedDef,
    setSelectedFwd,
  } = useContext(CreateTeamContext);

  // useEffect(() => {
  //   getTeamData();
  //   // eslint-disable-next-line
  // }, []);

  const getTeamData = async () => {
    setLoadingTeam(true);
    try {
      const teams = await getTeam();
      console.log(teams);

      if (teams.statusCode === 200) {
        setTeamData(teams.result);
        setTeamDetails(teams.result.teamDetails);
        setTeamPlayers(teams.result.players);
        setDataToSelectionForm(teams.result.players)
        console.log({teamData, teamDetails, teamPlayers});
    }
    } catch (error) {
      if (error) {
        setLoadingTeam(false);
      }
    } finally {
      setLoadingTeam(false);
    }
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const setDataToSelectionForm = (players) => {
    let selectedDef = [];
    let selectedFwd = [];
    let selectedGoalKeepers = [];
    let selectedMid = [];
    players.forEach((item) => {
      if (item.placement.includes('gk')) {
        selectedGoalKeepers.push({
          id: item.player.player_id,
          name: item.player.player_name,
          position: capitalizeFirstLetter(item.wing),
          photo:  item.player.player_image,
          is_susbtitute: item.is_substitute === 1 ? true : false,
          is_captain: item.is_captain === 1 ? true : false,
          playerPlacement: item.placement,
        });
      }

      if (item.placement.includes('def')) {
        selectedDef.push({
          id: item.player.player_id,
          name: item.player.player_name,
          position: capitalizeFirstLetter(item.wing),
          photo:  item.player.player_image,
          is_susbtitute: item.is_substitute === 1 ? true : false,
          is_captain: item.is_captain === 1 ? true : false,
          playerPlacement: item.placement,
        });
      }

      if (item.placement.includes('fwd')) {
        selectedFwd.push({
          id: item.player.player_id,
          name: item.player.player_name,
          position: capitalizeFirstLetter(item.wing),
          photo:  item.player.player_image,
          is_susbtitute: item.is_substitute === 1 ? true : false,
          is_captain: item.is_captain === 1 ? true : false,
          playerPlacement: item.placement,
        });
      }

      if (item.placement.includes('mid')) {
        selectedMid.push({
          id: item.player.player_id,
          name: item.player.player_name,
          position: capitalizeFirstLetter(item.wing),
          photo:  item.player.player_image,
          is_susbtitute: item.is_substitute === 1 ? true : false,
          is_captain: item.is_captain === 1 ? true : false,
          playerPlacement: item.placement,
        });
      }
    });
    console.log(selectedGoalKeepers)
    console.log(selectedDef)
    console.log(selectedMid)
    console.log(selectedFwd)
    setSelectedGoalKeepers(selectedGoalKeepers);
    setSelectedMid(selectedMid);
    setSelectedDef(selectedDef);
    setSelectedFwd(selectedFwd);
    }

  const displayPlayers = (placement, position) => {
    const matchPlayer = teamPlayers?.filter(
      (teamPlayer) =>
        teamPlayer.placement === placement && teamPlayer.wing === position
    );

    console.log(matchPlayer);

    if (matchPlayer && matchPlayer.length > 0) {
      console.log('return pitch player');
      return (
        <div className="pitch-player ">
          {/* <button className="close-btn">
            <AiOutlineClose style={{ color: "#FF4B26", fontWeight: 600 }} />
          </button> */}
          <PlayerJersey className={`jersey jersey-${position}`} />

          <div className="">
            <div
              className="player-tag"
              title={matchPlayer[0].player.player_name}
            >
              {formatString(matchPlayer[0].player.player_name, 14)}
            </div>
            <div className="points-tag">{matchPlayer[0].wing}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <TeamContext.Provider
      value={{ teamData, teamPlayers, teamDetails, loadingTeam, getTeamData, displayPlayers }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export default TeamProvider;
