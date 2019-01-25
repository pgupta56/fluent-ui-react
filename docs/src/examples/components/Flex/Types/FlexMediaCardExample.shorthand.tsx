import * as React from 'react'
import { Flex, Image, Text, Header } from '@stardust-ui/react'

const FlexExampleShorthand = () => (
  <>
    <Flex.Row gap={15} debug>
      <Flex.Item as="div" size="200px">
        <div style={{ position: 'relative' }}>
          <Image fluid src="http://localhost:8080/public/images/avatar/large/helen.jpg" />
        </div>
      </Flex.Item>

      <Flex.Item stretch>
        <Flex.Column gap={'10px'} vAlign="stretch">
          <Flex.Row space="between">
            <Header as="h3" content="LOREM IPSUM" />
            <Text as="pre" content="Oct 24th, 00:01" />
          </Flex.Row>

          <Text content="Man braid iPhone locavore hashtag pop-up, roof party forage heirloom chillwave brooklyn yr 8-bit gochujang blog." />

          <Flex.Item push>
            <Text as="pre" content="COPYRIGHT: Stardust-UI Inc." />
          </Flex.Item>
        </Flex.Column>
      </Flex.Item>
    </Flex.Row>
  </>
)

export default FlexExampleShorthand