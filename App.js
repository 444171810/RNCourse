import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { Icon } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);


  addGoalHandler = (inputText) => {
    if (inputText.trim === '') {
      return
    }
    setGoals(currentGoals => ([...currentGoals, { text: inputText.trim(), id: Math.random() }]))
  }

  deleteGoalHandler = (id) => {
    setGoals(goals => goals.filter(item => item.id !== id))
  }

  toggleModal = () => {
    setModalOpen(modalOpen => !modalOpen)
  }
  closeModalHandler = () => {
    setModalOpen(false);
  }

  return (<>
    <StatusBar style="dark" />
    <View style={styles.appContainer}>
      <Icon
        color="#11aa55"
        iconStyle={{ fontSize: 33 }}
        name="add"
        reverse
        size={20}
        type="material"
        onPress={toggleModal}
      />
      <GoalInput visible={modalOpen} addGoal={addGoalHandler} closeModal={closeModalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={goalItem => {
            return (<GoalItem item={goalItem.item} deleteGoal={deleteGoalHandler} />)
          }
          }
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 10,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  },
});
