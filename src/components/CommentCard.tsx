interface Props {
  username: string;
  text: string;
}

const CommentCard = ({ username, text }: Props) => {
  return (
    <div className="bg-[#1e293b] p-4 rounded-xl">
      <h3 className="font-semibold mb-2">{username}</h3>

      <p className="text-gray-400">{text}</p>
    </div>
  );
};

export default CommentCard;
