import Image from "next/image";
import office from "public/images/home/ryan-carson-standing.jpg";
import ryancoat from "public/images/home/ryan-carson-coat.jpg";
import ryan_red from "public/images/home/ryan-red.jpg";
import twist from "public/images/home/this-week-in-startups.jpg";
import collision from "public/images/home/collision.jpg";
import ninenineu from "public/images/home/99u.jpg";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <>
      <section className="mb-10">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
          Hello! I'm Ryan Carson 👋🙂
        </h1>
        <p className="prose prose-neutral dark:prose-invert">
          Over the past two decades, I founded three tech companies and led them
          to successful acquisition. I'm proud and grateful to have founded{" "}
          <a href="https://teamtreehouse.com">Treehouse</a> which has taught
          1,000,000+ students how to code. My next adventure is starting,
          building and launching <a href="https://maple.coach">Maple</a>, an AI
          one-on-one sales coach.
        </p>
      </section>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Ryan Carson speaking at 99u Conference in NYC"
            src={ninenineu}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={ryancoat}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Ryan Carson being interviewed on This Week in Startups"
            src={twist}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Ryan Carson speaking at Collision Conference in Las Vegas"
            src={collision}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Ryan Carson wearing red"
            src={ryan_red}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="Ryan Carson smiling at the camera in the Treehouse office"
            src={office}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/ryancarson"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/ryancarson/"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">LinkedIn</p>
          </a>
        </li>
      </ul>
    </>
  );
}
