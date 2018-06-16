import React from 'react';
import TeamInfo from '../../elements/teaminfo';

const header = (props) => {

    const teamInfo = (team)=>{
        return team ? (
            <TeamInfo team={team}/>

        ): null;
    }
    return (
        <div>
            {teamInfo(props.teamData)}
        </div>
    );
};

export default header;