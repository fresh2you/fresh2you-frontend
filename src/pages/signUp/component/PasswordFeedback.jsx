const PasswordFeedback = ({ passwordFeedbacks }) => {
  if (passwordFeedbacks.length === 0) return null;

  return (
    <div className="text-custom-gray-dark bg-custom-gray-light px-2 py-2 rounded mb-2 text-sm">
      {passwordFeedbacks.map((feedback, index) => (
        <p key={index}>•{feedback}</p>
      ))}
    </div>
  );
};

export default PasswordFeedback;
