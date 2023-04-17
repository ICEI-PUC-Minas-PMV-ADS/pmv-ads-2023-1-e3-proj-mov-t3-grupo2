import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddNew } from '@screens/AddNew';
import { News } from '@screens/News';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Screen name="news" component={News} />
      <Screen name="addNew" component={AddNew} />
    </Navigator>
  );
}
