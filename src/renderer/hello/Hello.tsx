import Mp3Sound from './assets/sound.mp3';
import WavSound from './assets/sound.wav';

export default function Hello() {
  const SampleWavSound = new Audio(WavSound);

  return (
    <div className="flex flex-col space-y-5">
      <div>
        <h1>mp3 파일 재생</h1>
        <audio controls src={Mp3Sound} />
      </div>
      <div>
        <h1>wav 파일 재생1</h1>
        <audio controls src={WavSound} />
      </div>
      <button
        type="button"
        onClick={() => {
          SampleWavSound.play();
        }}
      >
        wav 파일 재생2
      </button>
    </div>
  );
}
