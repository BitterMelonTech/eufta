import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import AnswerNugget from "../../components/AnswerNugget";
import AuthorBio from "../../components/AuthorBio";
import { IconArrow } from "../../components/Icons";
import { getBlogPost } from "../blogData";

export async function generateStaticParams() {
  const { blogPosts } = await import("../blogData");
  return blogPosts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
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
      url: `https://eufta.in/blog/${post.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "eufta.in Trade Intelligence Team",
      url: "https://eufta.in/about",
      description:
        "Trade analysts, customs brokers, and regulatory specialists at Sanjan Venture (Rotterdam, NL). Expertise in India-EU FTA tariff schedules, Article 23 VAT deferment, EFSA/EMA/REACH compliance, and EU marketplace logistics.",
      sameAs: "https://www.linkedin.com/company/eufta",
    },
    publisher: {
      "@type": "Organization",
      name: "eufta.in",
      url: "https://eufta.in",
      logo: {
        "@type": "ImageObject",
        url: "https://eufta.in/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://eufta.in/blog/${post.id}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white">
        {/* Article Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 py-16">
          <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.category, href: "/blog" },
              ]}
            />
            
            <div className="mt-8">
              <span className="inline-flex rounded-full bg-cyan-500/20 border border-cyan-400/30 px-4 py-1.5 text-sm font-semibold text-cyan-300 mb-6">
                {post.category}
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span>{post.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span>eufta.in</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <AnswerNugget content={post.answerNugget} />

          <article className="mt-10 prose prose-slate prose-lg max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight 
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-slate-900
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-slate-800
            prose-p:leading-relaxed prose-p:text-slate-600
            prose-strong:text-slate-900
            prose-a:text-cyan-600 prose-a:no-underline hover:prose-a:underline
            prose-li:text-slate-600
            prose-table:border-collapse prose-table:border prose-table:border-slate-200
            prose-th:bg-slate-50 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:text-sm prose-th:font-semibold prose-th:text-slate-700
            prose-td:px-4 prose-td:py-3 prose-td:text-sm prose-td:border-t prose-td:border-slate-200
          ">
            {post.content}
          </article>

          {/* Author Bio — H-E-E-A-T human-in-the-loop signal */}
          <AuthorBio date={post.date} updatedDate={post.date} />

          {/* CTA Card */}
          <div className="mt-16 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10">
            <div className="absolute inset-0 bg-grid-modern [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold text-white mb-3">
                Ready to Start Exporting?
              </h3>
              <p className="text-slate-300 mb-6 max-w-lg leading-relaxed">
                Get personalized guidance for your export journey to the EU market.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  View Our Services
                  <IconArrow />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-cyan-400/30 bg-white/5 backdrop-blur-md px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300"
                >
                  Calculate Costs
                  <IconArrow />
                </Link>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-10 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-cyan-600 transition-colors"
            >
              Explore Services
              <IconArrow />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
