import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px ${Platform.OS === 'android' ? 160 : 40}px;
  justify-content: center;
  padding: 0 30px 40px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BoxButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;
