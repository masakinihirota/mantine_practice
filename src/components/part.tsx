// components/somepart.tsx
import { Container, Grid } from "@mantine/core";
import { Radio, Text, Button } from "@mantine/core";

export type SomePartProps = {
  label: string;
  name: string;
};

const SomePart: React.FC<SomePartProps> = ({ label, name }) => {
  return (
    <Container>
      <Grid>
        <Grid.Col span={4}>
          <Radio label={label} value="false" color="pink" />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>Font</Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Button variant="gradient" className="text-orange-700">
            {name}
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default SomePart;
