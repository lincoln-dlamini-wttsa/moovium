import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

const SocialShare = ({url, text}) => {
        return (
            <div>
                  <FacebookShareButton
                    url={url}
                    quote={text}
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>

              <TwitterShareButton
                title={text}
                url={url}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
          );
}

export default SocialShare