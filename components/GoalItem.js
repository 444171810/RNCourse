import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Icon } from '@rneui/themed';

const GoalItem = (props) => {
    const deleteGoalHandler = () => {
        props.deleteGoal(props.item.id);
    }

    return (

        <View>
            <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }, styles.goalItem]} >
                <Text
                    style={styles.goalText}
                >
                    {props.item.text}
                </Text>
                <Icon
                    name="trash"
                    type="font-awesome"
                    color="white"
                    size={15}
                    onPress={deleteGoalHandler}
                />
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#11aa55',
        margin: 6,
        borderRadius: 5,
        padding: 8
    },
    goalText: {
        color: '#fff'
    },
    goalIconPressed: {
        backgroundColor: '#ffffff88'
    }
})