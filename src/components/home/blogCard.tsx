import { Card, Title, Text, Badge,SimpleGrid ,Group} from '@mantine/core';
import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme, _params, getRef) => ({
    cardArea:{
        backgroundColor: '#FFFDFA',
        width: '100%'
    }
}))

export type BlogCardProps = {
    title:string,
    date:string,
    abstract:string,
    tags:string[],
}

const BlogCard = ({title,date,abstract,tags}:BlogCardProps)=> {
    const {classes} = useStyles()

    const list_jsx_Badge = tags.map((item,index) =>
       <Badge color="pink" variant="light">{item}</Badge>
    )

    return (
        <Card className={classes.cardArea} shadow="sm" p="lg" radius="md">
            <Title order={5}>{title}</Title>

            <Group position="right">
                <Text size="xs">{date}</Text>
            </Group>

            <Text weight={500} size="sm">{abstract}</Text>

            <SimpleGrid mt="sm" cols={2}>
                {list_jsx_Badge}
            </SimpleGrid>

        </Card>
    );
}

export default BlogCard
