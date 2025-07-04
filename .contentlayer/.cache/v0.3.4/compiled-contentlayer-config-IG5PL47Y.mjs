// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, required: false },
    excerpt: { type: "string", required: false },
    author: { type: "string", required: false },
    image: { type: "string", required: false }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc.slug}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
  }
});
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-IG5PL47Y.mjs.map
