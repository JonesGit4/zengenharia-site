import { getPayload } from "payload";
import config from "@/payload.config";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Post } from "@/payload-types";

export const dynamic = 'force-dynamic';

interface PostsPageProps {
  searchParams?: Promise<{
    page?: string;
  }>;
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const payload = await getPayload({ config });
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams?.page) || 1;
  const postsPerPage = 6;

  const posts = await payload.find({
    collection: "posts",
    where: {
      status: {
        equals: "published",
      },
    },
    sort: "-publishedAt",
    limit: postsPerPage,
    page: currentPage,
    depth: 2,
  });

  const postsData = posts.docs as Post[];

  return (
    <div className="min-h-screen bg-background mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-left mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Blog & Notícias
            </h1>
            <p className="text-xl text-muted-foreground">
              Acompanhe as últimas novidades e insights da Z Engenharia
            </p>
          </div>

          {/* Posts Grid */}
          {postsData.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {postsData.map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Featured Image */}
                  {post.featuredImage &&
                    typeof post.featuredImage === "object" && (
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={post.featuredImage.url || ""}
                          alt={post.featuredImage.alt || post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                  {/* Content */}
                  <div className="p-8">
                    {/* Meta Info */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      {post.publishedAt && (
                        <time dateTime={post.publishedAt}>
                          {format(new Date(post.publishedAt), "dd/MM/yyyy", {
                            locale: ptBR,
                          })}
                        </time>
                      )}
                      {post.tags && (
                        <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-medium">
                          {post.tags.split(",")[0].trim()}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </h2>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Read More */}
                    <Link
                      href={`/posts/${post.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors text-sm"
                    >
                      Ler mais
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-left py-20">
              <div className="w-24 h-24 mb-8 bg-muted rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Nenhum post encontrado
              </h3>
              <p className="text-muted-foreground text-lg">
                Ainda não há posts publicados. Volte em breve para conferir
                nossas novidades!
              </p>
            </div>
          )}

          {/* Pagination */}
          {posts.totalPages > 1 && (
            <div className="flex justify-start mt-16">
              <div className="flex items-center gap-3">
                {/* Previous Button */}
                {posts.hasPrevPage && (
                  <Link
                    href={`/posts?page=${posts.prevPage}`}
                    className="px-6 py-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                  >
                    Anterior
                  </Link>
                )}

                {/* Page Numbers */}
                <div className="flex items-center gap-2">
                  {Array.from(
                    { length: Math.min(posts.totalPages, 5) },
                    (_, i) => {
                      let page;
                      if (posts.totalPages <= 5) {
                        page = i + 1;
                      } else if (currentPage <= 3) {
                        page = i + 1;
                      } else if (currentPage >= posts.totalPages - 2) {
                        page = posts.totalPages - 4 + i;
                      } else {
                        page = currentPage - 2 + i;
                      }

                      return (
                        <Link
                          key={page}
                          href={`/posts?page=${page}`}
                          className={`px-4 py-3 rounded-lg transition-colors font-medium ${
                            page === currentPage
                              ? "bg-primary text-primary-foreground"
                              : "bg-card border border-border hover:bg-muted"
                          }`}
                        >
                          {page}
                        </Link>
                      );
                    }
                  )}
                </div>

                {/* Next Button */}
                {posts.hasNextPage && (
                  <Link
                    href={`/posts?page=${posts.nextPage}`}
                    className="px-6 py-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                  >
                    Próximo
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Blog & Notícias - Z Engenharia",
  description:
    "Acompanhe as últimas novidades, insights e projetos da Z Engenharia. Conteúdo especializado em engenharia e construção.",
};
