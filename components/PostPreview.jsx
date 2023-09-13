import Link from 'next/link';

const PostPreview = (props) => {
  return (
    <div key={props.slug} className="border-b-4 border-dotted last:border-b-0 py-6">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-6xl mb-9">{props.title}</h2>
      </Link>
      <p>نُشر في: {props.date}</p>
    </div>
  );
};

export default PostPreview;
