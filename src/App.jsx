import imgUno from './assets/images/SCABIA.jpg'
import PropTypes from 'prop-types'

const MyButton = ()=> {
    return (
        <button>Soy un botton</button>
    )
}

const MyButton2 = (props)=> {
    return (
        <button>{props.text}</button>
    )
}

MyButton2.PropTypes={
    text: PropTypes.string.isRequired,
};

const OnlineText=()=>{
    return (
        <>
        <h3>Online</h3>
        </>
    )
}
const OfflineText=()=>{
    return (
        <>
        <h3>Offline</h3>
        </>
    )
}

const App=()=> {

    const title="Mi titulo desde una constante";
    const user=true   ;
    const fruts=['🍌','🍉','🍎']
    return (
        <>
            <h1 className="text-center">{title}</h1>
            <MyButton />
            <MyButton2 text='Boton 1'/>
            <MyButton2 text='Boton 2'/>
            <MyButton2 text='Boton 3'/>
            {
                // user ? <OnlineText /> : <OfflineText />
                user && <OnlineText />
            }
            <img src={imgUno} width="100px"/>

            <ul>
            {
                fruts.map((f, index)=> (
                    <li key={index}>{f}-{index}</li>
                ))
            }   
            </ul>
        </>
    )
}

export default App;