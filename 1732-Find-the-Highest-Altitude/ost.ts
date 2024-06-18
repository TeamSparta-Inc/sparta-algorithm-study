function largestAltitude(gain: number[]): number {
    let initialAltitudePoint = 0;
    let highestAltitudePoint = 0;
    gain.forEach(altitudePoint => {
            initialAltitudePoint += altitudePoint;
            if(initialAltitudePoint > highestAltitudePoint) highestAltitudePoint = initialAltitudePoint
        }
    )
    return highestAltitudePoint
};