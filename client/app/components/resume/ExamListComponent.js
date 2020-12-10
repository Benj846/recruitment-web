import React  from 'react';
import ExamDetailComponent from './ExamDetailComponent';

function ExamListComponent({ ids, onRemove }) {
    return(
        <>
            {
                ids.map(
                    id => <ExamDetailComponent id={id} key={id} onRemove={onRemove}/>
                )                
            }
        </>
    );
}
export default ExamListComponent;
