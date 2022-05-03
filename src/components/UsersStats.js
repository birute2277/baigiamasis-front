import {useSelector} from "react-redux";

const UsersStats = () => {
    const users = useSelector(state => state.store.value.users)

    console.log(users)

    function convertDate(timestamp) {
        return new Date(timestamp).toLocaleDateString("lt-LT")
    }

    return (
        <div className="grow1">
            {users.map((x, i) => <div className="userCard">
                <div>{x.name}</div>
                <div>{convertDate(x.loginDate)}</div>
                <div>Messages: {x.messages}</div>
            </div>)}
        </div>
    );
};

export default UsersStats;