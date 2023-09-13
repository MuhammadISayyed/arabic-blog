import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/utils/getPostMetaData';

const getPostContent = (slug) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResults = matter(content);
  return matterResults;
};

export async function generateStaticParams() {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const PostPage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <article className="prose lg:prose-xl flex flex-col items-center justify-center">
      <h1 className="text-5xl font-serif my-32 text-cherry">{post.data.title}</h1>
      <Markdown className="text-3xl font-light max-w-prose leading-normal">{post.content}</Markdown>
    </article>
  );
};

export default PostPage;
