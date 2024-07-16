import { MessageContainer } from "./styles";

const Message = ({ msg, type = 'success' }) => {
    return ( 
        <MessageContainer type={type}>
            <p>{msg}</p>
        </MessageContainer>
     )
}
 
export default Message;