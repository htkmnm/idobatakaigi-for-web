const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory(email);

    const handleClick = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/main')
                console.log('success login');
                console.log(email)
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                // ...
                if (errorCode === 'auth/wrong-password') {
                    alert('パスワードが間違えてます。');
                } else if (errorCode === 'auth/user-not-found') {
                    alert('存在しないアカウントです。');
                } else if (errorCode === 'auth/invalid-email') {
                    alert('入力してください。');
                } else if (errorCode === 'auth/user-disabled') {
                    alert('無効のアカウントです。')
                }
                console.log(error);
            });
    };

    return (
        <div>
            <h1>Login</h1>
            <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
            <Button variant="outlined" onClick={handleClick}>Login</Button><br />
            <Link to='createUser'>アカウント作成</Link>
        </div>
    );
};

export default Login;
