import StartupCard from "@/components/StarupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      view: 55,
      author: { _id: 1, name: 'Hamza' },
      _id: 1,
      description: "This is a description",
      image: "https://i.ibb.co.com/yffkJ47/IMG-20220304-151615.jpg",
      category: "Tea",
      title: "The Famous Seven Colour Tea of JAFLONG Shylhet",
    },
  ];
  return (
    <main>
      {/* hero section */}
      <section className="pink_container">
        <h1 className=" heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      {/* startups */}
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Result For "${query}" ` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts?.map((item, index) => (
              <StartupCard
                key={item?._id}
                post={item}
              />
            ))
          ) : (
            <p className="no-result">No Starups Found</p>
          )}
        </ul>
      </section>
    </main>
  );
}
