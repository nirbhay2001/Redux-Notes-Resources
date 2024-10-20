import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {MdDeleteForever} from "react-icons/all.js";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        // useSelector ki help se hum store ke sare reducer ko es page per access kar sakte hai, useSelector ke  state me  multiple slice aayenge lekin slice ke state me kewal us slice ke hi data aayenge
        return state.users;
    })

    // console.log(data);

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }



    return <Wrapper>
        {
            data.map((user, id) => {
                return <li key={id}>
                    {user}
                    <button className="btn btn-delete" onClick={() => deleteUser()}>
                        <MdDeleteForever className='delete-icon'/>
                    </button>
                </li>
            })
        }
    </Wrapper>
}


export default DisplayUsers;