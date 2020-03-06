import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-right-width: 1px;
  border-color: #eee;
`;
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`;
export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
  text-align: center;
`;
export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #999;
  text-align: center;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  background-color: #f5f5f5;
  border-radius: 4px;
  flex-direction: row;
  margin-bottom: 20px;
  padding: 10px 15px;
  align-items: center;
`;
export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eee;
`;
export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;
export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;
