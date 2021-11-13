import React from 'react'


const Maps = () => {
    return (
        <>
            <h2 className="text-center"> Ubicación de todos los dispositivos</h2>
            <div className="text-center">
                <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1HH1ZKOjv-c-FByQoGKYVxDzwXw6gi3VW" width={640} height={480} />
            </div>
        </>)
}

export default Maps