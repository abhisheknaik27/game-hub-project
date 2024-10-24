import love from "../assets/love.png";
import thumbs from "../assets/thumbs.png";
import meh from "../assets/meh.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "20px" },
    4: { src: thumbs, alt: "recommended", boxSize: "20px" },
    5: { src: love, alt: "must watch", boxSize: "30px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
