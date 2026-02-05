import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import AnswerNugget from "../../components/AnswerNugget";
import { IconArrow, IconDocument } from "../../components/Icons";
import { getBlogPost } from "../blogData";

export async function generateStaticParams() {
  // Import blogPosts dynamically to get all slugs
  const { blogPosts } = await import("../blogData");
  return blogPosts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Blog Post Not Found" };

  return {
    title: `${post.title} | eufta.in Blog`,
    description: post.description,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "eufta.in",
      url: "https://eufta.in",
    },
    publisher: {
      "@type": "Organization",
      name: "eufta.in",
      logo: {
        "@type": "ImageObject",
        url: "https://eufta.in/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title, href: `/blog/${params.slug}` },
            ]}
          />
          
          <article className="mt-8">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-semibold text-cyan-700 mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            <AnswerNugget content={post.answerNugget} />

            <div className="prose prose-slate max-w-none mt-8">
              {post.content}
            </div>

            {/* Related Links */}
            <div className="mt-12 rounded-xl border border-cyan-200 bg-cyan-50/50 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Ready to Start Exporting?
              </h3>
              <p className="text-slate-600 mb-4">
                Get personalized guidance for your export journey to the EU market.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  View Our Services
                  <IconArrow />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-cyan-600 px-6 py-3 text-sm font-semibold text-cyan-600 hover:bg-cyan-50 transition-all"
                >
                  Calculate Costs
                  <IconArrow />
                </Link>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-600 hover:text-cyan-700"
              >
                ← Back to Blog
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
