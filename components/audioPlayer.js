export function audioPlayer({ asset, volume = 0.5 }) {
    const audio = new Audio();
    audio.src = asset;
    audio.volume = volume;

    const play = () => {
        if (audio.paused || !audio.currentTime) {
            audio.play().catch(() => { });
        }
    };

    const stop = () => {
        audio.pause();
    };

    const setVolume = (value) => (audio.volume = value / 100);

    const setAudio = (src) => {
        audio.src = src;
    };

    return {
        play,
        stop,
        setVolume,
        setAudio,
    };
}