import { List } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPlayersForTeamAsync, selectPlayers } from "../app/store/player";
import Player from "../player/Player";

const PlayerList = () => {
    const players = useSelector(selectPlayers);
    useDispatch()(loadPlayersForTeamAsync(6));
    
    return (
        <List header="Players" bordered dataSource={players}
            renderItem={item => <Player player={item}></Player>}
        >
        </List >
    );
}

export default PlayerList;