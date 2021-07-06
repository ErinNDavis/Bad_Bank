function Withdraw(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    function validation(field, label){
        if (!field){
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        console.log(name,email,password);
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        ctx.users.push({name,email,password,balance:100});
        setShow(false);
    }
    
    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <Card
            bgcolor="info"
            header="Withdraw"
            status={status}
            body={show ? (
                <>
                Balance: <br/>
                Withdraw Amount<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                <button typw="submit" className="btn btn-light" onClick={handleCreate}>Withdraw</button>
                </>
            ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
            )}
        />
    )
}