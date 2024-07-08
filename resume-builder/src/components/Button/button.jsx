import { Link } from "react-router-dom";
export default function button({ text, url, variant, onClick }) {
  return (
    <Link
      to={url}
      className={` ${variant} bg-[#0F74CC] rounded-md`}
      onClick={onClick}
    >
      {text}
    </Link>
  )
}