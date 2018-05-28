import React from 'react'
import { 
    TouchableHighlight,
    Text, 
} from 'react-native'

class RandomizeButton extends React.Component{
    constructor (props) { 
            super(props)
            this.state = {
                text: ""
            }       
        this.handlePress = this.handlePress.bind(this)        
    }
    handlePress () {
        console.log("handlePress pre")
        !this.props.onMyPress || this.props.onMyPress()
        console.log("handlePress pos")
    }
    render () {
        //o return tem de começar com um statement na mesma linha ou então colocar o codigo entre ()
        return (
            <TouchableHighlight onPress={this.handlePress}>
                <Text>Touch me!</Text>
            </TouchableHighlight>
        )
    }
}

export default RandomizeButton