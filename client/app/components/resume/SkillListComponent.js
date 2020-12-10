import React  from 'react';
import SkillDetailComponent from './SkillDetailComponent';

function SkillListComponent({ ids, onRemove }) {
    return(
        <>
        {
            ids.map(
                id => <SkillDetailComponent id={id} key={id} onRemove={onRemove}/>
            )
        }
        </>
    );
}

export default SkillListComponent;