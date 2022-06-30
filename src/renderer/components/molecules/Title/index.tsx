import { Text } from 'renderer/components/atoms';
import { ITitleProps } from './ITitle';
import { ITextStyles } from 'renderer/components/atoms/Text/IText';
import { THIRD_FONT_COLOR } from 'contants';

const titleStyles: ITextStyles = {
  fontSize: '22px',
  color: THIRD_FONT_COLOR,
  // fontWeight: 'bold',
  textAlign: 'center',
};

const subtitle: ITextStyles = {
  fontSize: '16px',
  color: THIRD_FONT_COLOR,
  textAlign: 'center',
};

const selectType = {
  title: titleStyles,
  subtitle: subtitle,
};

const Title = (props: ITitleProps) => {
  const { children, type = 'title', fontSize } = props;
  return <Text styles={{ ...selectType[type], fontSize }}>{children}</Text>;
};

export default Title;
