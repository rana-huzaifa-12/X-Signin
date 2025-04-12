import './App.css'

function App() {

    return (
        <>

            <div className="app">

                <div className="logo-box">

                    <img src="./x-logo.jpeg" alt="logo" className='logo' />
                    <h2>Sign In to Twitter</h2>

                    <button>
                        <img src="./google-logo.jpeg" alt="google" className='google' />
                        <h2>Sign In with Google</h2>
                    </button>

                    <button>
                        <img src="./apple.jpeg" alt="google" className='apple' />
                        <h2>Sign In with iphone</h2>
                    </button>


                    <span>OR</span>

                    <form>

                        <input type="text" placeholder='Enter email or username' />
                        <h2 className='login'>LOGIN</h2>


                    </form>

                </div>



            </div>

        </>
    )
}

export default App
