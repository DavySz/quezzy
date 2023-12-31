import { useNavigation } from "@react-navigation/native";
import { NewPasswordUI } from "./new-password.ui";

export const NewPasswordContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoToInitial = () => {
    navigation.navigate("initial");
  };
  return <NewPasswordUI handleGoToInitial={handleGoToInitial} />;
};
