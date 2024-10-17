export default function User({user}){
    const {name, email} = user;
    return (
        <div className="box">
            <h3>Email:{email}</h3>
            <p>name:{name}</p>
        </div>

    )
}