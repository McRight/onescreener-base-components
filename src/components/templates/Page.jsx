/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Logo } from '../atoms/Logo.jsx'

import { LogoBox } from '../organisms/LogoBox.jsx'
import { ContentBox } from '../organisms/ContentBox.jsx'
import { LinksBox } from '../organisms/LinksBox.jsx'

import { Links } from '../icons/platform/index.jsx'

import GlobalStyle from '../../style/global.js'

const PageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ color }) => color};
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: ${({ focusPoint }) => focusPoint};
  background-size: ${({ fullscreen }) => (fullscreen ? 'cover' : 'contain')};
  display: flex;
`

const BacklinkUrl =
  'https://res.cloudinary.com/optune-me/image/upload/c_thumb,e_blackwhite,g_face,w_100/v1558014130/onescreener-v2/app/logo-onescreener.svg'
const BackLink = styled.a`
  position: fixed;
  background-image: url(${BacklinkUrl});
  background-size: 60px 15px;
  background-color: #808080;
  background-position: center;
  background-repeat: no-repeat;
  width: 70px;
  height: 15px;
  opacity: 0.3;
  transform: rotate(-90deg);
  transform-origin: 100% 100%;
  right: 0;

  & h1 {
    color: #808080;
    font-size: 1px;
    opacity: 0.1;
  }
`

export const Page = ({ page, noBacklink }) => {
  const { background, logo, content, gigAPI } = page
  const { links } = page || { links: { list: [] } }

  return (
    <Fragment>
      <GlobalStyle />
      <PageContainer
        image={background.image && background.image.url}
        focusPoint={background.focusPoint}
        fullscreen={background.fullscreen}
        color={background.color}
      >
        {/* Back Link to onescreener.com */}
        {!noBacklink && (
          <BackLink
            href="https://www.onescreener.com"
            target="_blank"
            title="created with onescreener.com"
          >
            <h1>created by onescreener.com</h1>
          </BackLink>
        )}

        {/* Logo */}
        {logo && logo.image && (
          <LogoBox position={logo.position} zIndex={2}>
            <Logo logo={logo} />
          </LogoBox>
        )}

        {/* Logo */}
        <ContentBox content={content} links={links} />

        {/* Links */}
        {links.list.length > 0 && (
          <LinksBox position={links.position} zIndex={4}>
            {Links(links, content)}
          </LinksBox>
        )}
      </PageContainer>
    </Fragment>
  )
}
