import React from 'react';
import DriversDetailComponent from './DriverDetailComponent';

function DriversListComponent({ids, onRemove}) {
    return(
        <>
            {
                ids.map(
                    id=> <DriversDetailComponent id={id} key={id} onRemove={onRemove}/>
                )
            }
        </>
    );
}
export default DriversListComponent;