import { useNavigation } from "@react-navigation/native";
import { SignUpEmailFirstStep } from "./sign-up-email-first-step";

export const SignUpEmailFirstStepContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSignUpEmailSecondStepScreen = () => {
    navigation.navigate("sign-up-email-second-step");
  };

  return (
    <SignUpEmailFirstStep
      handleSignUpEmailSecondStepScreen={handleSignUpEmailSecondStepScreen}
      handleGoBack={handleGoBack}
    />
  );
};
