import React from 'react';
import DailyQuestContainer from './DailyQuestContainer';
import { feather_icon, treasure } from '../../../database/images';

function DailyQuestCard({state, handles , titleCard}) {
    return (
        <div className="container-card">
            <div className="container-card-header">
                <div className="container-title-card">Today's quests</div>
            </div>
            <div className="container-card-body">
                <DailyQuestContainer state={state} type='ex' title='Finished exercises' />
                <DailyQuestContainer state={state} type='le' title='Read lessons' />
                <DailyQuestContainer state={state} type='pa' title='Read papers' />
            </div>
        </div>
    );
}

export default DailyQuestCard;