import Image from "next/image";

export default function Page() {
  return (
    <>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        New Dork City
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <div className="flex">
          <Image
            src="/images/new-dork-city/new-dork-city.jpg"
            alt="Logo of New Dork City"
            height={1290}
            width={1274}
            className="max-w-sm pr-4"
          />
          <p>
            New Dork City is a podcast and newsletter for anyone interested in
            building with AI. Beginners welcome!
          </p>
        </div>
        <h2 className="font-medium text-xl mb-8 tracking-tighter">
          Newsletter
        </h2>
        <iframe
          src="https://ryancarson.substack.com/embed"
          width="480"
          height="150"
          className="border bg-white"
          scrolling="no"
        ></iframe>

        <h2 className="font-medium text-xl mb-8 tracking-tighter">Podcast</h2>
        <p>
          <a href="https://podcasters.spotify.com/pod/show/newdorkcity">
            Subscribe on Spotify
          </a>
          .
        </p>
      </div>
    </>
  );
}
