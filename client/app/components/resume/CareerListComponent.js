import React from 'react';
import CareerDetailComponent from './CareerDetailComponent';

function CareerListComponent({ids, onRemove}) {
    return(
        <>
            {
                ids.map(
                    id => <CareerDetailComponent id ={id} key={id} onRemove={onRemove}/>
                )
            }
        </>
    );
}
export default CareerListComponent;