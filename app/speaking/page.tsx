import YouTubeEmbed from "app/components/youtube-embed";

export default function Page() {
  return (
    <>
      <section className="mb-10">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Speaking</h1>
        <p className="prose prose-neutral dark:prose-invert">
          I've spoken at many events and on various podcasts over the years.
          Here are a few highlights ...
        </p>
      </section>
      <section className="mb-10">
        <h2 className="font-medium text-xl mb-8 tracking-tighter">
          99u - Begin With the End In Mind
        </h2>
        <div className="mb-8">
          <YouTubeEmbed videoId="bXU4hUG-N_8" />
        </div>
        <p>
          When your week is over, what do you actually want to happen? Who do
          you want to be there with you? In this talk, Ryan Carson, founder and
          CEO of Treehouse, charges us to distill what and who matters most in
          our lives. We learn that we can spend less time working, we just have
          to do it purposefully. How? By hyper-focusing. "I spend 20 minutes
          first thing each Monday making a list of what I want to achieve each
          week," he said. "Then I take out the things that aren't happening."
          Carson's approach allows him to devote his time to what he really
          needs to accomplish over the next four days. "My initial reaction was
          that there was too much work to do," he said of shrinking his
          workweek. "But there is no rule that you have to work 40 hours a week
          to be successful."
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-medium text-xl mb-8 tracking-tighter">
          The Case for the 32-Hour Workweek
        </h2>
        <div className="mb-8">
          <YouTubeEmbed videoId="ztoHewIu2DU" />
        </div>
        <p>
          From 2006-2016, Ryan Carson, the CEO of Treehouse, maintained a
          four-day workweek for his employees. “There's no rule that you have to
          work 40 hours, you have to work more to be successful,” says Carson.
          “We've proven that you can take it from an experiment into something
          that's doable for real companies and real people in highly competitive
          markets.” Citing the benefits of a more flexible schedule, Carson
          believes that the reduced time in the office ultimately leads to an
          overall more productive work environment. But for Carson, his decision
          ultimately comes down to priorities. “It's not about more family time,
          or more play time, or less work time—it's about living a more balanced
          total life,” says Carson. “We basically take ridiculously good care of
          people because we think it's the right thing to do.”
        </p>
      </section>
      <section className="mb-10">
        <h2 className="font-medium text-xl mb-8 tracking-tighter">
          This Week in Startups
        </h2>
        <div className="mb-8">
          <YouTubeEmbed videoId="fa768qY_0bs" />
        </div>
        <p>
          Founder & CEO Ryan Carson was a guest on TWiST Episode 198, and he
          returns today to talk about Treehouse, his online trade school for
          adults that does one thing really well: taking anybody who has never
          coded from zero to job-ready. Ryan figured out how to reduce the cost
          of a computer science degree ($58k) down to 2% of that, with complete
          geographic and time shifting freedom. Join us as he and Jason debate
          the value of apprenticeships and explore the way traditional
          universities are run.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="font-medium text-xl mb-8 tracking-tighter">
          Chase Jarvis LIVE - How to Sell Without Selling Out
        </h2>
        <div className="mb-8">
          <YouTubeEmbed videoId="5cvpCa-iOmQ" />
        </div>
        <p>
          Ryan discusses how he got started, and like many of us it has been a
          path of exploration, failure, and self-discovery. His grassroots
          efforts started with small actions in community building which grew to
          a worldwide network all while working as a developer. He shares how
          he's used skills learned and earned along the way and has some great
          mindset shifts and tactical advice for your creative career - all the
          way from how to find your WHY to getting your first sale.
        </p>
      </section>
    </>
  );
}
