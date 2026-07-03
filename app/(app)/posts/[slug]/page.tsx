import { getPayload } from "payload";
import config from "@/payload.config";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Post, Media, User } from "@/payload-types";
import { RichTextContent } from "@/components/rich-text-content";

export const dynamic = 'force-dynamic';

interface PostWithRelations extends Omit<Post, "featuredImage" | "author"> {
  featuredImage?: Media | string | null;
  author?: User | string | null;
}

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const payload = await getPayload({ config });
  const resolvedParams = await params;

  const posts = await payload.find({
    collection: "posts",
    where: {
      and: [
        {
          slug: {
            equals: resolvedParams.slug,
          },
        },
        {
          status: {
            equals: "published",
          },
        },
      ],
    },
    limit: 1,
    depth: 2,
  });

  if (!posts.docs.length) {
    notFound();
  }

  const post = posts.docs[0] as PostWithRelations;

  // Get related posts
  const relatedPosts = await payload.find({
    collection: "posts",
    where: {
      and: [
        {
          id: {
            not_equals: post.id,
          },
        },
        {
          status: {
            equals: "published",
          },
        },
      ],
    },
    sort: "-publishedAt",
    limit: 3,
    depth: 1,
  });

  return (
    <div className="min-h-screen bg-background mt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Início
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/posts"
            className="hover:text-foreground transition-colors"
          >
            Posts
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{post.title}</span>
        </nav>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            {/* Featured Image */}
            {post.featuredImage && typeof post.featuredImage === "object" && (
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
                <Image
                  src={post.featuredImage.url || ""}
                  alt={post.featuredImage.alt || post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Tags */}
            {post.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.split(",").map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-muted-foreground mb-6">
                {post.excerpt}
              </p>
            )}

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6">
              {/* Author */}
              {post.author && typeof post.author === "object" && (
                <div className="flex items-center gap-2">
                  <span>Por</span>
                  <span className="font-medium text-foreground">
                    {(post.author as User)?.email}
                  </span>
                </div>
              )}

              {/* Published Date */}
              {post.publishedAt && (
                <time dateTime={post.publishedAt}>
                  {format(new Date(post.publishedAt), "dd 'de' MMMM, yyyy", {
                    locale: ptBR,
                  })}
                </time>
              )}
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {post.content && <RichTextContent content={post.content} />}
          </div>

          {/* Share & Navigation */}
          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              {/* Share */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-foreground">
                  Compartilhar:
                </span>
                <div className="flex gap-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.slug}`
                    )}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Back to Posts */}
              <Link
                href="/posts"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Voltar aos posts
              </Link>
            </div>
          </footer>
        </article>

        {/* Related Posts */}
        {relatedPosts.docs.length > 0 && (
          <section className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Posts Relacionados
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.docs.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Featured Image */}
                  {relatedPost.featuredImage &&
                    typeof relatedPost.featuredImage === "object" && (
                      <div className="relative h-32 overflow-hidden">
                        <Image
                          src={relatedPost.featuredImage.url || ""}
                          alt={
                            relatedPost.featuredImage.alt || relatedPost.title
                          }
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      <Link href={`/posts/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    {relatedPost.excerpt && (
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/posts/${relatedPost.slug}`}
                      className="text-primary hover:text-primary/80 font-medium transition-colors text-sm"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

// Generate static params for build time
export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config });

    const posts = await payload.find({
      collection: "posts",
      where: {
        status: {
          equals: "published",
        },
      },
      limit: 100,
    });

    return posts.docs.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.warn('generateStaticParams: Payload indisponível no build, retornando []');
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PostPageProps) {
  const payload = await getPayload({ config });
  const resolvedParams = await params;

  const posts = await payload.find({
    collection: "posts",
    where: {
      and: [
        {
          slug: {
            equals: resolvedParams.slug,
          },
        },
        {
          status: {
            equals: "published",
          },
        },
      ],
    },
    limit: 1,
    depth: 2,
  });

  if (!posts.docs.length) {
    return {
      title: "Post não encontrado - Z Engenharia",
    };
  }

  const post = posts.docs[0] as PostWithRelations;

  return {
    title: post.seo?.metaTitle || `${post.title} - Z Engenharia`,
    description:
      post.seo?.metaDescription ||
      post.excerpt ||
      "Confira este post da Z Engenharia",
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images:
        post.seo?.metaImage && typeof post.seo.metaImage === "object"
          ? [{ url: post.seo.metaImage.url || "" }]
          : post.featuredImage && typeof post.featuredImage === "object"
            ? [{ url: post.featuredImage.url || "" }]
            : [],
    },
  };
}
