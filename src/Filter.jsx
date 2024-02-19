import React from 'react';
const Filter=({filter})=>{
    return(
    <div style={{marginLeft:'30px',marginTop:'20px',marginBottom:'20px'}}>
        <label>Фільтр по імені
            <input style={{marginLeft:'20px',borderWidth:'3px'}} type="text" onChange={(e)=>filter(e.target.value)}/>
        </label>
    </div>
    )
}
export default Filter