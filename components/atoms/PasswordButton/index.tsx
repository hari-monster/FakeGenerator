import styled from 'styled-components'
import {
	border,
	BorderProps,
	borderRadius,
	BorderRadiusProps,
	JustifySelfProps,
	margin,
	MarginProps,
	padding,
	PaddingProps,
} from 'styled-system'

export interface PasswordButtonProps
	extends PaddingProps,
		MarginProps,
		BorderProps,
		BorderRadiusProps,
		JustifySelfProps {
	darkenOnHover?: boolean
}

export const PasswordButton = styled.button<PasswordButtonProps>`
	padding: 5px;
	${padding};
	margin: 5px;
	${margin};

	${border};

	border-radius: 4px;
	${borderRadius};
	background-color: #fff;

	&:hover {
		color: ${({ darkenOnHover }) => darkenOnHover && '#fff'};
		background: ${({ darkenOnHover }) => darkenOnHover && '#000'};
	}
`
PasswordButton.defaultProps = {
	border: '2px solid #000',
	borderRadius: `5px`,
	darkenOnHover: true,
}
