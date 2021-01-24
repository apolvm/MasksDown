/** Author: AnaPatricia Olvera */
import {StyleSheet} from 'react-native';

export const globalStyles= StyleSheet.create({
    container:{
        flex: 1, 
        padding: 20,
        alignContent: 'center',
        justifyContent: 'flex-start'
    },
    titleText: {
        fontFamily: 'quicksand-semibold',
        fontSize: 18,
        color : '#333'
    },
    text_content:{
        fontSize:15,
        paddingTop:10,
      },
    text_base:{
        fontWeight: 'bold',
        fontSize:20,
        paddingTop:50,
      },
    paragraph:{
        marginVertical: 8,
        lineHeight:20,
    },
    buttonContainer:{
        marginTop: 20,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 18,
        marginVertical: 10

    }

})
const styles = StyleSheet.create({
    container:{
        marginBottom:40,
        marginLeft:40,
        marginRight: 40,
        paddingTop: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
  
  });