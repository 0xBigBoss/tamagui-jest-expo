import { expect, test } from '@jest/globals'

import { HomeScreen } from './screen'
import { create, act, type ReactTestRenderer } from 'react-test-renderer'
import { NavigationContainer } from '@react-navigation/native'
import { TamaguiProvider } from '@my/ui'
import { config } from '@my/ui'

test('HomeScreen', () => {
  jest.useFakeTimers()

  let tree = create(
    <NavigationContainer>
      <TamaguiProvider defaultTheme={'dark'} config={config}>
        <HomeScreen />
      </TamaguiProvider>
    </NavigationContainer>
  )

  act(() => {
    jest.runAllTimers()
  })

  expect(tree.toJSON()).toMatchSnapshot()
})
