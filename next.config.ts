import createMDX from "@next/mdx";
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  //
  output: "export",
  images: { unoptimized: true },
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  experimental: {
    globalNotFound: true,
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      "remark-frontmatter",
      "remark-mdx-frontmatter",
      "remark-math",
    ],
    rehypePlugins: [
      [
        "@shikijs/rehype",
        {
          themes: {
            light: "github-light-high-contrast",
            dark: "github-dark",
          },
        },
      ],
      ["rehype-katex", { strict: true, throwOnError: true }],
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
