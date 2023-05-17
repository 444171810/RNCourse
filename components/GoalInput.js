import { StyleSheet, TextInput, View, Button, Modal } from 'react-native'
import { useState } from 'react'
import { Icon } from '@rneui/themed';

const GoalInput = ({ goalInputHandler, addGoal, visible, closeModal }) => {
    const [inputText, setInputText] = useState('');

    goalInputHandler = text => {
        setInputText(text);
    }
    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.headBar}>
                <Icon
                    name="angle-left"
                    type="font-awesome"
                    color="white"
                    size={30}
                    onPress={closeModal}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Your goal?' onChangeText={goalInputHandler} value={inputText} />
                <Button title="Add goal" onPress={() => { addGoal(inputText); setInputText('') }} />
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    headBar: {
        paddingHorizontal: 10,
        backgroundColor: '#11aa55',
        marginBottom: 10,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginBottom: 6,
        height: 50,
        paddingBottom: 10,
        paddingHorizontal: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 6,
        padding: 6,
        borderRadius: 6
    },
})