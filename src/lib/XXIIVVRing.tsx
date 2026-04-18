import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { JSDOM } from "jsdom";

const fetchSites = async (): Promise<{
  prev: string;
  rand: string;
  next: string;
} | null> => {
  try {
    const response = await fetch("https://webring.xxiivv.com/");
    const html = await response.text();

    const dom = new JSDOM(html);
    const doc = dom.window.document;
    const sites = Array.from(doc.querySelectorAll("body > ol > li")).map(
      (li: Element) => {
        const a = li.getElementsByTagName("a")[0];
        return {
          website_uuid: li.id,
          url: a.href,
        };
      }
    );

    const currentUUID = "105";
    const currentIndex = sites.findIndex(
      (site) => site.website_uuid === currentUUID
    );

    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + sites.length) % sites.length;
      const nextIndex = (currentIndex + 1) % sites.length;
      let randIndex = Math.floor(Math.random() * sites.length);

      if (randIndex === currentIndex) {
        randIndex = (randIndex + 1) % sites.length;
      }

      return {
        prev: sites[prevIndex].url,
        rand: sites[randIndex].url,
        next: sites[nextIndex].url,
      };
    }
  } catch (error) {
    console.error("Error fetching ring data:", error);
  }

  return null;
};

export const XXIIVVRing: React.FC = async () => {
  const ring = await fetchSites();

  return (
    <>
      <a
        id="rc-ring-prev"
        className="link link-hover"
        href={ring ? ring.prev : "https://webring.xxiivv.com/"}
      >
        <span className="flex items-center gap-2">
          <ArrowLeftCircleIcon className="h-4 w-4" width={16} height={16} />{" "}
          Previous Site
        </span>
      </a>
      <a
        id="rc-ring-rand"
        className="link link-hover"
        href={ring ? ring.rand : "https://lieu.cblgh.org/random"}
      >
        <span className="flex items-center gap-2">
          <QuestionMarkCircleIcon className="h-4 w-4" width={16} height={16} />{" "}
          Random Site
        </span>
      </a>
      <a
        id="rc-ring-next"
        className="link link-hover"
        href={ring ? ring.next : "https://webring.xxiivv.com/"}
      >
        <span className="flex items-center gap-2">
          <ArrowRightCircleIcon className="h-4 w-4" width={16} height={16} />{" "}
          Next Site
        </span>
      </a>
    </>
  );
};
