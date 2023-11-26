import Image from "next/image";
import office from "public/images/home/ryan-carson-standing.jpg";
import ryancoat from "public/images/home/ryan-coat.jpg";
import creativelive from "public/images/home/creative-live.jpg";
import twist from "public/images/home/this-week-in-startups.jpg";
import atlantic from "public/images/home/atlantic.jpg";
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
          Over the past two decades, I've worked in the tech industry, starting
          companies, securing investments, and leading teams. One of my proudest
          achievements is founding Treehouse, an online education platform with
          1m+ students learning how to code. This endeavor equipped our students
          with valuable skills and drew an investment of $23 million before its
          acquisition in 2021.
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
        <div className="relative h-40 mb-4">
          <Image
            alt="Ryan Carson speaking at Collision Conference in Las Vegas"
            src={collision}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Ryan Carson smiling at the camera in a warm winter coat"
            src={ryancoat}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Ryan Carson speaking on the Creative Live Show with Chase Jarvis"
            src={creativelive}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Ryan Carson speaking to the camera during an interview with the Atlantic"
            src={atlantic}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
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
