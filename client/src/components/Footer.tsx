import youtube_icon from "@/assets/youtube_icon.png";
import twitter_icon from "@/assets/twitter_icon.png";
import instagram_icon from "@/assets/instagram_icon.png";
import facebook_icon from "@/assets/facebook_icon.png";

export const Footer = () => {
  return (
    <>
      <div className="w-full px-16 py-10">
        <div className="flex gap-4">
          <img src={facebook_icon} alt="" width={30} />
          <img src={instagram_icon} alt="" width={30} />
          <img src={twitter_icon} alt="" width={30} />
          <img src={youtube_icon} alt="" width={30} />
        </div>
        <ul className="grid grid-cols-4 gap-4 mt-5">
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <p className="mt-5 text-gray-500 text-center">
          &copy; 1997-2025 Netflix Inc.
        </p>
      </div>
    </>
  );
};
