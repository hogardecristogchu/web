import React from 'react'

const MapDispositivos = ({source}) => {
    return (
        <>
            <div className="text-center">
                <iframe className="mt-2 img-fluid" src={source} width={550} height={300}></iframe>
            </div>
        </>)
}

export default MapDispositivos