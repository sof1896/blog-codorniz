import { getStrapiMedia } from "../lib/media";
import NextImage from "next/image";

const Image = ({ image }) => {
  const { alternativeText, width, height } = image.data.attributes;

  return (
    <div className="miniatura">
    <NextImage
      layout="responsive"
      width={width}
      height={height} 
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
    </div>
  );
};

export default Image;