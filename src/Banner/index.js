import { Wrapper, Container, Text, Title, Desc, Buttons, DefaultButton, Image } from './styled'
import dataset, { image } from './data';

const Banner = ({ page }) => {
  const data = dataset[page];

  if (!data) return null;

  const { title, desc, buttons } = data;

  return (
    <Wrapper>
      <Container>
        <Text>
          <Title>
            {title}
          </Title>
          <Desc>
            {desc}
          </Desc>
          <Buttons>
            {buttons.map((button) => {
              const { theme, text } = button;
              return (
                <DefaultButton theme={theme} key={text}>
                  {text}
                </DefaultButton>
              );
            })}
          </Buttons>
        </Text>
        <Image {...image} />
      </Container>
    </Wrapper>
  );
}

export default Banner;
