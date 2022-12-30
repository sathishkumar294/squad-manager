import { List } from "antd";
import React from "react";
import Player from "../player/Player";

const PlayerList = () => {
    const players = [
        {
            name: 'Virat Kohli',
            country: 'India',
            type: 'Batsman'
        }
    ];
    return (
        <List header="Players" bordered dataSource={players}
            renderItem={item => <Player player={item}></Player>}
        >
        </List >
    );
}

export default PlayerList;