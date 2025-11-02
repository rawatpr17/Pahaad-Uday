// pages/articles/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

export default function ArticlePage({ frontmatter, contentHtml }) {
  return (
    <>
      <article className="card" style={{padding:0}}>
        {frontmatter.image && <img src={frontmatter.image} alt={frontmatter.title} />}
        <div className="card-body">
          <span className="cat">{frontmatter.category}</span>
          <h1>{frontmatter.title}</h1>
          <p className="meta">{frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <p style={{marginTop: 12}}>
            <Link href="/">← Back to Home</Link>
          </p>
        </div>
      </article>
    </>
  );
}

const ARTICLES_DIR = path.join(process.cwd(), 'articles');

export async function getStaticPaths() {
  const filenames = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));
  const paths = filenames.map(fname => {
    const filePath = path.join(ARTICLES_DIR, fname);
    const file = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(file);
    const slug = data.slug || fname.replace(/\.md$/, '');
    return { params: { slug } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filenames = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));

  // Find the file whose frontmatter.slug matches params.slug (or filename)
  let matched = null;
  for (const fname of filenames) {
    const filePath = path.join(ARTICLES_DIR, fname);
    const file = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(file);
    const slug = data.slug || fname.replace(/\.md$/, '');
    if (slug === params.slug) {
      const processed = await remark().use(html).process(content);
      const contentHtml = processed.toString();
      matched = { frontmatter: data, contentHtml };
      break;
    }
  }

  if (!matched) {
    return { notFound: true };
  }

  return {
    props: {
      frontmatter: matched.frontmatter,
      contentHtml: matched.contentHtml
    }
  };
}