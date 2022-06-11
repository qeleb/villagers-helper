import * as React from 'react'
import styled from 'styled-components/macro'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
import { VillagersCards } from 'app/components/VillagersCards'

export const CardsPage = () => (
  <>
    <Helmet>
      <title>cards</title>
      <meta name="description" content="cards" />
    </Helmet>
    <NavBar />
    <Wrapper>
      <Title>cards</Title>
      {/* TODO: Put Filters and Search at Top */}
      <VillagersCards />
    </Wrapper>
  </>
)

//TODO: Fix Scrolling with Toolbar hidden on iOS
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 320px;
`

const Title = styled.div`
  padding-top: 1vh;
  font-weight: bold;
  color: ${p => p.theme.text};
  font-size: 3.375rem;
`
