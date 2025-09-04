import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: {
    singular: "Post",
    plural: "Posts",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "status", "publishedAt", "createdAt"],
    description: "Gerencie os posts do blog/conteúdo",
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Título",
      required: true,
      admin: {
        placeholder: "Digite o título do post",
      },
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
        description: "URL amigável para o post (ex: meu-primeiro-post)",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-")
                .trim("-");
            }
            return value;
          },
        ],
      },
    },
    {
      name: "status",
      type: "select",
      label: "Status",
      required: true,
      defaultValue: "draft",
      options: [
        {
          label: "Rascunho",
          value: "draft",
        },
        {
          label: "Publicado",
          value: "published",
        },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "featuredImage",
      type: "upload",
      label: "Imagem Destacada",
      relationTo: "media",
      admin: {
        position: "sidebar",
        description: "Imagem principal do post",
      },
    },
    {
      name: "content",
      type: "richText",
      label: "Conteúdo",
      required: true,
      admin: {
        description: "Conteúdo principal do post",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      label: "Resumo",
      admin: {
        description: "Breve descrição do post (opcional)",
        rows: 3,
      },
    },
    {
      name: "tags",
      type: "text",
      label: "Tags",
      admin: {
        position: "sidebar",
        description:
          "Tags separadas por vírgula (ex: tecnologia, web, javascript)",
        placeholder: "tecnologia, web, javascript",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      label: "Publicado Em",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
      hooks: {
        beforeChange: [
          ({ value, data, operation }) => {
            if (
              operation === "update" &&
              data?.status === "published" &&
              !value
            ) {
              return new Date();
            }
            return value;
          },
        ],
      },
    },
    {
      name: "author",
      type: "relationship",
      label: "Autor",
      relationTo: "users",
      required: true,
      admin: {
        position: "sidebar",
      },
      defaultValue: ({ user }) => user?.id,
    },
    {
      name: "seo",
      type: "group",
      label: "SEO",
      admin: {
        position: "sidebar",
      },
      fields: [
        {
          name: "metaTitle",
          type: "text",
          label: "Meta Título",
          admin: {
            description: "Título para SEO (máx. 60 caracteres)",
          },
        },
        {
          name: "metaDescription",
          type: "textarea",
          label: "Meta Descrição",
          admin: {
            description: "Descrição para SEO (máx. 160 caracteres)",
            rows: 3,
          },
        },
        {
          name: "metaImage",
          type: "upload",
          label: "Imagem Social",
          relationTo: "media",
          admin: {
            description: "Imagem para compartilhamento em redes sociais",
          },
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Garante que posts publicados tenham data de publicação
        if (data?.status === "published" && !data?.publishedAt) {
          data.publishedAt = new Date();
        }

        // Remove data de publicação se o status for alterado para draft
        if (data?.status === "draft") {
          data.publishedAt = null;
        }

        return data;
      },
    ],
  },
  timestamps: true,
};
