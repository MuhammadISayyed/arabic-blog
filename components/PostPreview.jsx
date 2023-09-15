import Link from 'next/link';

const PostPreview = (props) => {
  return (
    <div key={props.slug} className="border-b-4 border-dotted last:border-b-0 py-6">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-6xl mb-6 hover:text-cherry focus:text-cherry">{props.title}</h2>
      </Link>
      <p className="text-gray-600 text-2xl">نُشر في: {props.date}</p>
    </div>
  );
};

export default PostPreview;
