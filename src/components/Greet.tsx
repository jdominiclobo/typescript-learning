type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name},  your unread messages are ${messageCount}`
          : `Welcome ${props.name}, You have no new messages`}
      </h2>
    </div>
  );
};
