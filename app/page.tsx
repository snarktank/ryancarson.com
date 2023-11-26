import Image from "next/image";
import office from "public/images/home/ryan-carson-standing.jpg";
import ryancoat from "public/images/home/ryan-coat.jpg";
import creativelive from "public/images/home/creative-live.jpg";
import twist from "public/images/home/this-week-in-startups.jpg";
import atlantic from "public/images/home/atlantic.jpg";
import collision from "public/images/home/collision.jpg";
import ninenineu from "public/images/home/99u.jpg";

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
            alt="Photo of Ryan Carson standing in the Treehouse Office"
            src={ninenineu}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={collision}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={ryancoat}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={creativelive}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={atlantic}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={twist}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}
