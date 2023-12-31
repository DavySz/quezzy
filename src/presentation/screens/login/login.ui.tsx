import React from "react";

import {
  Button,
  Divider,
  ScreenTemplate,
  Text,
  Input,
} from "@presentation/components";
import FacebookIcon from "@presentation/assets/icons/facebook-icon.svg";
import GoogleIcon from "@presentation/assets/icons/google-icon.svg";
import LetterIcon from "@presentation/assets/icons/letter-icon.svg";
import LockIcon from "@presentation/assets/icons/lock-icon.svg";

import {
  ButtonWrapper,
  Content,
  Form,
  InputWrapper,
  KeyboardSafeArea,
  Row,
} from "./login.styles";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { ILogin } from "./types";

export const LoginUI = ({
  handleGoBack,
  handleGoToResetPasswordScreen,
}: ILogin): ReturnType<React.FC<ILogin>> => {
  return (
    <KeyboardSafeArea testID="key-board-safe-area" behavior="height">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScreenTemplate.Root variant="secondary">
          <ScreenTemplate.Header goBack={handleGoBack}>
            Login
          </ScreenTemplate.Header>
          <Content testID="login-screen-content">
            <ButtonWrapper>
              <Button.Root variant="google">
                <Button.Icon icon={GoogleIcon} side="left" />
                <Button.Text>Login with Google</Button.Text>
              </Button.Root>
              <Button.Root variant="facebook">
                <Button.Icon icon={FacebookIcon} side="left" />
                <Button.Text>Login with Facebook</Button.Text>
              </Button.Root>
            </ButtonWrapper>
            <Row>
              <Divider.Root />
              <Divider.Text>OR</Divider.Text>
              <Divider.Root />
            </Row>
            <Form>
              <InputWrapper>
                <Input.Label>Email Address</Input.Label>
                <Input.Root>
                  <Input.Icon icon={LetterIcon} color="primary" />
                  <Input.Text
                    placeholder="Your email address"
                    inputMode="email"
                  />
                </Input.Root>
              </InputWrapper>
              <InputWrapper>
                <Input.Label>Password</Input.Label>
                <Input.Root>
                  <Input.Icon icon={LockIcon} />
                  <Input.Text placeholder="Your password" />
                </Input.Root>
              </InputWrapper>
            </Form>
            <ButtonWrapper>
              <Button.Root>
                <Button.Text>Login</Button.Text>
              </Button.Root>
              <Button.Root
                onPress={handleGoToResetPasswordScreen}
                testID="button-reset-password"
                variant="tertiary"
              >
                <Button.Text>Forgot password?</Button.Text>
              </Button.Root>
            </ButtonWrapper>
            <Text.Root
              variant="body-small-regular"
              color="neutral-grey-2"
              align="center"
            >
              By continuing, you agree to the Terms of{" "}
              <Text.Root variant="body-small-medium" color="neutral-grey-1">
                Services & Privacy Policy.
              </Text.Root>
            </Text.Root>
          </Content>
        </ScreenTemplate.Root>
      </TouchableWithoutFeedback>
    </KeyboardSafeArea>
  );
};
