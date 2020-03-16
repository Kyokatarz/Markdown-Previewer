const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

marked.setOptions({
  breaks: true,
});

class App extends React.Component{
    constructor(props){
        super(props);
       this.state = {
           textarea: defaultText
       }
    }
    
    
    handleChange(event){
        this.setState({textarea: event.target.value})
    }
    
    
    
    render(){
        document.getElementById('preview') 
        return(
            <div id='container'>
                <div id='editor-wrapper'>
                    <div className = "name-bar"><i class="fas fa-pen-nib"></i> Editor </div>
                    <textarea id='editor' onChange = {this.handleChange.bind(this)}>{this.state.textarea}</textarea>
                </div>
                
                <div id='preview-wrapper'>
                    <div className = "name-bar"><i class="fas fa-desktop"></i> Previewer </div>
                    <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.state.textarea)}}></div>
                </div>  
            </div>            
            
        
        
        )
    }
}
    
    ReactDOM.render(<App/>, document.querySelector('#App'))
    
    
    
    