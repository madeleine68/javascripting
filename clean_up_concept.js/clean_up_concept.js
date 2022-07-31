// Clean Up concept 

// **********************************
// in  JSX file
<button onClick={(() => this.setState({ isShow: !this.state.isShow  }))}>show</button>  
{this.state.isShow && <ClassTImer /> } 
// *************************************

//class component
class ClassTImer extends Component {
    state = {
        count: 0,
        isShow: true,
    };
    componentDidMount () {
        this.myTimer = setInterval (() => {
            this.setState({ count: this.state.count+1 });
        }, 1000)
    }
    
    componentWillUnmount () {
        clearInterval(this.myTimer);
    }
    
    render() {
        return <div>class Interval</div>
    }
}
// Functional component 

const FunctionalTimer = () => {
    const [count, setCount] = useState(0);

    useEffect (() => {
        const interval = setInterval (() => {
            setCount(count+1);
        }, 1000);
// if we don't add this line got the warning: can't perform a react state update on an unmount component
// when it's got hide it will unmount so setCount fn doesn't work
        return () => {
            clearInterval(interval)
        };
    }, [])

    return <div>this is timer</div>
}