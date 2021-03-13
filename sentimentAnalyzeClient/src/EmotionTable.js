import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {  try{
                let listOfEvents = this.props.emotions.result.emotion.document.emotion;
                let listOfEventsAsArray = Object.entries(listOfEvents);
                let eventDetails = listOfEventsAsArray.map((eventDetial)=>
                {  
                    return <tr><td height='50' width='50%' >{eventDetial[0]}</td><td>{eventDetial[1]}</td></tr>
                })
                 return <div><table border='1' width='100%'><tbody>{eventDetails}</tbody></table></div>;

                    } catch (e) {
          let output = this.props.emotions.body;
          output=output.replace("'","");
          output=output.replace('"',"");
           output=output.replace('"',"");
           output=output.replace('"',"");
           output=output.replace('"',"");
           output=output.replace('"',"");
           output=output.replace('"',"");
           output=output.replace('"',"");
 
          output=output.replace('{',"");
          output=output.replace(','," ");
        output=output.replace('}',"");
        output =   <div>{output}</div>
        return output;
            } 
        }
}
export default EmotionTable;
