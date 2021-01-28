import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 64px;
	min-height: 100vh;
`

export const Navigation = styled.nav`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;
`

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	max-width: 891px;
	padding-left: 154px;
	padding-right: 18px;
`

export const Footer = styled.div`
	margin-top: auto;
`
