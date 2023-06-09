import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {

  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-white md:text-secondary-purple" : ""} hover:text-primary-purple hover:drop-shadow-sm`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link