import React from 'react';
import CareerDetailComponent from './CareerDetailComponent';

function CareerListComponent({ids, onRemove}) {
    return(
        <div>
            {/* <p><a onClick={props.addCareer}>Add Another Child Component</a></p>
            {props.children} */}
            {
                ids.map(
                    id => <CareerDetailComponent id ={id} key={id} onRemove={onRemove}/>
                )
            }
        </div>
    );
}
export default CareerListComponent;