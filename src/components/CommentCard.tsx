const CommentCard = ({
  comment,
  author,
  userId,
}: {
  comment: any;
  author: any;
  userId: any;
}) => {
  return (
    <div className="bg-[#1e293b] rounded-xl p-4">
      <h2 className="font-bold mb-2">
        {comment.userId === author?.id
          ? "author"
          : comment.userId === userId
            ? "you"
            : comment.user.name}
      </h2>

      <p className="text-gray-400">{comment.content}</p>
    </div>
  );
};

export default CommentCard;
