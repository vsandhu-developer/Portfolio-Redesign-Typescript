import BlogsSection from "@/components/comps/sections/Blogs";

export default function Blog() {
  return (
    <div>
      <div className="min-h-screen pt-10 max-w-4xl m-auto">
        <div className="px-10 lg:px-0">
          <h1 className="text-4xl">
            Blogs -- <span className="text-sm">Discover, Engage, Learn</span>
          </h1>
          <p className="mt-5 leading-8">
            Welcome to our blog hub, where knowledge meets inspiration. Delve
            into a treasure trove of articles curated to enlighten, entertain,
            and empower. From tech trends to lifestyle hacks, our diverse range
            of topics promises something for everyone. Stay informed, stay
            inspired, and join us on a journey of discovery.
          </p>
        </div>

        <div className="mt-10 px-5 grid gap-y-4 gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 bg-red-50  bg-transparent">
          <BlogsSection />
        </div>
      </div>
    </div>
  );
}
