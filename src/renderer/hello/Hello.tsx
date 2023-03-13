import DogJpgImage from './assets/dog.jpg';
import DogPngImage from './assets/dog.png';
import DogSvgImage from './assets/dog.svg';
import DogSvgImageUrl from './assets/dog.svg?url';

export default function Hello() {
  return (
    <div className="flex">
      <div>
        <h1 className="text-3xl">dog.jpg</h1>
        <img src={DogJpgImage} alt="dog" className="h-[400px] w-fit" />
      </div>
      <div>
        <h1 className="text-3xl">dog.png</h1>
        <img src={DogPngImage} alt="dog" className="h-[400px] w-fit" />
      </div>
      <div>
        <h1 className="text-3xl">dog.svg</h1>
        <img src={DogSvgImageUrl} alt="dog" className="h-[400px] w-fit" />
      </div>
      <div>
        <h1 className="text-3xl">dog.svg as ReactComponent</h1>
        <DogSvgImage className="h-[200px] w-fit" />
      </div>
    </div>
  );
}
