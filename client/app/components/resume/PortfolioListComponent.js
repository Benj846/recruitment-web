import React  from 'react';
import PortfolioDetailComponent from './PortfolioDetailComponent';

function PortfolioListComponent({ids, onRemove }) {
    return(
        <>
            {
                ids.map(
                    id => <PortfolioDetailComponent id={id} key={id} onRemove={onRemove}/>
                )
            }
        </>
    );
}
export default PortfolioListComponent;