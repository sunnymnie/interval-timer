

export const formatTime = (time) => {
    let minutes = "00";
    if (time >= 60) {
        minutes = Math.floor(time / 60).toString()
        minutes = minutes.length === 1 ? "0" + minutes : minutes
    }
    let seconds = (time - Math.floor(time / 60) * 60).toString()
    seconds = seconds.length === 1 ? "0" + seconds : seconds
    return minutes + ":" + seconds
}