import React,{Component} from 'react';

export default class MemeGenerator extends Component{
    constructor(props) {
        super(props);
        this.state={
            img:[],
            randImg:'',
            data:false,
            upperText:'',
            bottomText:'',
            fontSize:22
        }
    }
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(data=>data.json())
            .then(response=>{
                this.setState({
                    img:response.data.memes,
                    randImg:response.data.memes[50].url,
                    data:true
                })
            })
            .catch(error=>{
                console.log(error);
            })
    }

    memeClick(){
        let rand=Math.floor(Math.random()*this.state.img.length);
        this.setState({
            randImg:this.state.img[rand].url
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleFont(e){
        this.setState({
            fontSize:e.target.value
        })
    }

    render() {
        return this.state.data?
            <>
                <div className={'memeWrapper'}>
                    <div className={'imgTxtWrapper'}>
                        <input type={'text'} name={'upperText'} placeholder={'Upper Text Here'}  onChange={this.handleChange.bind(this)}/>
                        <div style={{fontSize:this.state.fontSize}} className={'upText'}>{this.state.upperText}</div>
                        <img className={'memeImg'} src={this.state.randImg} alt={'meme'}/>
                        <div style={{fontSize:Number(this.state.fontSize)}} className={'botText'}>{this.state.bottomText}</div>
                        <input name={'bottomText'} placeholder={'Bottom Text Here'}  type={'text'} onChange={this.handleChange.bind(this)}/>
                        <input name={'fontSize'} placeholder={'Text font-size(22 default)'} onChange={this.handleFont.bind(this)}/>
                        <button className={'memeButton'} onClick={this.memeClick.bind(this)}>Generate new meme template</button>

                    </div>
                </div>

            </>
            :<h1 style={{color:'#ffc200'}}>Loading data...</h1>

    }
}