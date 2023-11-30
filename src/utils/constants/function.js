export const EmailMasking = ({ email }) => {
  const maskEmail = () => {
    if (email.trim() === "") {
      return "Email not found";
    } else {
      const atIndex = email.indexOf("@");
      const maskedEmail =
        email.substring(0, 2) +
        "*".repeat(atIndex - 2) +
        email.substring(atIndex - 1);
      return maskedEmail;
    }
  };

  return <span>{maskEmail()}</span>;
};
