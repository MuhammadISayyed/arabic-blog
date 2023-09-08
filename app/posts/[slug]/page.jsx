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
    <div>
      <h1>{post.title}</h1>
      <Markdown>{post.content}</Markdown>
    </div>
  );
};

export default PostPage;
