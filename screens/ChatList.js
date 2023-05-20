import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { List, Avatar, Divider, FAB, Portal, Dialog, Button, TextInput } from 'react-native-paper';

const ChatList = () => {

  const [isDialogVisible, setIsDialogVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <List.Item
        title="İsminiz"
        description="Hi, I will be waiting for you"
        left={() => <Avatar.Text label="EP" size={56} />}
      />
      <Divider inset style={{ backgroundColor: 'black' }} />

      <Portal> 

      <Dialog visible={isDialogVisible}
       onDismiss ={() => setIsDialogVisible(false)}>
           <Dialog.Title>Yeni Görüşme</Dialog.Title>
            <Dialog.Content>
                <TextInput label="Email adresi giriniz" />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress ={() => setIsDialogVisible(false)} >Geri</Button>
              <Button> Kaydet </Button> 
            </Dialog.Actions>
      </Dialog>

      </Portal>

      <FAB
        style={{ position: 'absolute', bottom: 16, right: 20 }}
        icon="plus"
        onPress ={() => setIsDialogVisible(true)}
      />
    </View>
  );
};

export default ChatList;
