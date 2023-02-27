
function User({user}){
    return(
        <div style={{margin:'10px'}} >
           <span>{user.id} </span> - <strong>{user.username}</strong> -
            <span>{user.email}</span> - <span>{user.address}</span>
        </div>
    )
}

function UserList(){
    const users = [
        {
            id:1,
            username : '박사랑',
            email : 'sarang@gmail.com',
            address : '안양시'
        },
        {
            id:2,
            username : '김은우',
            email : 'eunwoo@gmail.com',
            address : '광명시'
        },
        {
            id:3,
            username : '이소원',
            email : 'lswon@gmail.com',
            address : '과천시'
        },
    ];
    return(
        <div>
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </div>
    )
}

export default UserList;