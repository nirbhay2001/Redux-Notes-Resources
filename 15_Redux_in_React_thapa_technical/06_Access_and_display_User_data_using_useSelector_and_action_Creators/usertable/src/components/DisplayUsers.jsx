import { useSelector } from "react-redux";
import styled from "styled-components";

const DisplayUsers = () => {

    const data = useSelector((state) => {
        // useSelector ki help se hum store ke sare reducer ko es page per access kar sakte hai, useSelector ke  state me  multiple slice aayenge lekin slice ke state me kewal us slice ke hi data aayenge
        return state.users;
    })

    console.log(data);

    return <Wrapper>
        {
            data.map((user, id) => {
                return <li key={id}>
                    {user}
                </li>
            })
        }
    </Wrapper>
}


export default DisplayUsers;