import { useState } from "react";
import { View, Alert, Button, Text } from "react-native";
import { MText } from "../../components/text";
import { styles } from "./../../style/container";
import { ModalButton } from "./../../components/modalButton";
import { CustomModal } from "./../../components/modal";
import { TodoList } from "../../components/todoList";
import { useSelector } from "../../store";
import { ScrollView } from "react-native-gesture-handler";
import { format } from "date-fns";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const { todos } = useSelector((store) => store.todo);
  const handleModal = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <View style={styles.container}>
      <MText fontSize={20} color={"red"}>
        Todays Todo {format(new Date(), "yyyy-MM-dd")}
      </MText>
      <ScrollView>
        {todos !== null && todos !== undefined && todos.length > 0 ? (
          <TodoList todos={todos} />
        ) : (
          <Text>You don't have any todos create one.</Text>
        )}
      </ScrollView>
      <CustomModal
        animationType={"fade"}
        transparent={false}
        visible={showModal}
        handleClose={handleClose}
      />
      <ModalButton onPress={handleModal} />
    </View>
  );
};
