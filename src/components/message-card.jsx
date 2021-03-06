import { useEffect, useState  } from "react";
import { MessageCardComponent } from "../styles/components/message-card.style";

export default function MessageCard(props){

    const [dateWithFormat, setDateWithFormat] = useState('')

    useEffect(() => {
        const date = new Date(props.date.toMillis())
        const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        setDateWithFormat(dateString)
    }, [props.date])

    return(
        <MessageCardComponent>
            <h2>{props.name}</h2>
            <h3>{props.email}</h3>
            <p>- {props.message}</p>
            <span>{dateWithFormat}</span>
        </MessageCardComponent>
    )
}