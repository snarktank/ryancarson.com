import Image from "next/image";

export default function Page() {
  return (
    <>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        New Dork City Newsletter
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <div className="flex flex-col sm:flex-row">
          <Image
            src="/images/new-dork-city/new-dork-city.jpg"
            alt="Logo of New Dork City"
            height={1290}
            width={1274}
            className="max-w-sm pr-4"
          />
          <p>
            New Dork City is a{" "}
            <a href="https://podcasters.spotify.com/pod/show/newdorkcity">
              podcast
            </a>{" "}
            and <a href="https://ryancarson.substack.com">newsletter</a> for
            anyone interested in using and building with AI.
          </p>
        </div>
        <h2 className="text-lg">Subscribe</h2>
        <iframe
          src="https://ryancarson.substack.com/embed"
          width="480"
          height="150"
          className="border bg-white"
        ></iframe>
      </div>
    </>
  );
}
